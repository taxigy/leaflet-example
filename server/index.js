const fs = require('fs');
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
  const filename = `tile_${zoom}_${x}_${y}.png`;

  fs.stat(path.resolve(PWD, 'tiles', filename), (error) => {
    if (error) {
      res.sendFile('dummy.png', {
        root: path.resolve(PWD, 'tiles')
      });
    } else {
      res.sendFile(filename, {
        root: path.resolve(PWD, 'tiles')
      });
    }
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
