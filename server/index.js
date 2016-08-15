const path = require('path');
const express = require('express');
const app = express();
const {
  PORT = 3001,
  PWD = __dirname
} = process.env;

app.get('/:zoom/:x/:y', (req, res) => {
  const {
    zoom,
    x,
    y
  } = req.params;

  res.sendFile(`tile_${zoom}_${x}_${y}.png`, {
    root: path.resolve(PWD, '../tiles')
  });
});

app.listen(PORT, () => console.log(`Tile server is running on port ${PORT}.`));
