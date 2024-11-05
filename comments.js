// Create web server with express
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const comments = require('./comments');
app.get('/comments', (req, res) => {
  res.json(comments);
});
app.post('/comments', (req, res) => {
  comments.push(req.body);
  res.status(201).json(req.body);
});
app.listen(3000);
// comments.js
module.exports = [
  {
        id: 1,
      }
    ];