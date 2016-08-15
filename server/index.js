const path = require('path');
const express = require('express');
const app = express();
const {
  PORT = 3000,
  PWD = __dirname
} = process.env;

app.get('/tile/:zoom/:x/:y', (req, res) => {
  const {
    zoom,
    x,
    y
  } = req.params;

  res.sendFile(`tile_${zoom}_${x}_${y}.png`, {
    root: path.resolve(PWD, '../tiles')
  });
});

app.get('/build/:file', (req, res) => {
  const {
    file
  } = req.params;

  res.sendFile(file, {
    root: path.resolve(PWD, 'build')
  });
});

app.get('*', (req, res) => {
  res.sendFile('index.html', {
    root: path.resolve(PWD)
  });
});

app.listen(PORT, () => console.log(`App and tile server is running on port ${PORT}.`));
