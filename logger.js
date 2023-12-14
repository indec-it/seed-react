const winston = require('winston');
const fs = require('fs');

const LOG_PATH = process.env.LOG_PATH || 'logs/';

const {
  createLogger,
  format: {
    combine,
    timestamp,
    printf,
    colorize,
    align
  },
  transports: {
    Console, Stream
  }
} = winston;

const myCustomLevels = {
  levels: {
    error: 0,
    info: 2,
    debug: 1
  },
  colors: {
    error: 'red',
    info: 'green',
    debug: 'yellow'
  }
};

const customFormat = printf(info =>
  `[${info.level} ${new Date(info.timestamp).toLocaleString()}] ${info.message}`
);

winston.addColors(myCustomLevels.colors);

const format = combine(
  timestamp(),
  align(),
  colorize({all: true}),
  customFormat
);

const getTransports = () => {
  const transportOpts = [
    (new Console({
      level: 'info',
      colorize: true
    }))
  ];

  transportOpts.push(
    new Stream({
      format,
      stream: fs.createWriteStream(`${LOG_PATH}sga_ui_info.log`,
        {
          encoding: 'utf8',
          flags: 'a'
        })
    })
  );
  transportOpts.push(
    new Stream({
      level: 'error',
      format,
      stream: fs.createWriteStream(`${LOG_PATH}sga_ui_error.log`,
        {
          encoding: 'utf8',
          flags: 'a'
        }
      )
    })
  );

  return transportOpts;
};

const logger = createLogger({
  format,
  levels: myCustomLevels.levels,
  transports: getTransports()
});

module.exports = logger;
