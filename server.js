const path = require('path');
const express = require('express');
require('dotenv').config({path: path.join(__dirname, '.env')});

const app = express();

const {PORT, API} = process.env;

const fetch = async (...props) => {
  const {default: nodeFetch} = await import('node-fetch');
  return nodeFetch(...props);
};

const handleRequest = async (req, res) => {
  try {
    const url = `${API}${req.url.substring(1)}`;
    const {body} = req;
    const Authorization = req.get('Authorization');
    const response = await fetch(url, {
      method: req.method,
      body: body && Object.entries(body).length > 0 ? JSON.stringify(body) : null,
      headers: {
        Authorization,
        'Content-Type': 'application/json'
      }
    });
    res.send(await response.json());
  } catch (err) {
    res.status(500).send({
      error: true,
      message: 'Internal server error'
    });
  }
};

app.use(express.static(__dirname));
app.use(express.json({}));
app.use(express.urlencoded({extended: true}));

app.post('/public-api/login', handleRequest);
app.post('/public-api/session', handleRequest);

app.get('*', (_, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => console.log(`App running at port ${PORT}`));
