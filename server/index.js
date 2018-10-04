const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

const PORT = 3000;
const DIST = path.join(__dirname, '..');

app.use(express.static(DIST));

app.get('*', (req, res) => {
  fs.createReadStream(path.join(DIST, 'index.html')).pipe(res);
});

app.listen(PORT, () =>
  process.stdout.write(`Basket management application listen on port ${PORT}\n`)
);
