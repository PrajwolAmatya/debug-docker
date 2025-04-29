const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('Hello from Node.js!');
});

app.listen(3000, () => {
  console.log('Node.js server running on port 3000');
});
