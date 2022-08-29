const path = require('path');
const express = require('express');

const app = express();

const PORT = process.argv[2];

app.use(express.static(__dirname));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => console.log(`App running at port ${PORT}`));
