// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

// Use body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use static files
app.use(express.static('public'));

// Get comments
app.get('/comments', (req, res) => {
  fs.readFile(path.join(__dirname, 'comments.json'), 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Failed to read comments');
    } else {
      res.send(data);
    }
  });
});

// Post comment
app.post('/comments', (req, res) => {
  fs.readFile(path.join(__dirname, 'comments.json'), 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Failed to read comments');
    } else {
      const comments = JSON.parse(data);
      const newComment = {
        id: comments.length + 1,
