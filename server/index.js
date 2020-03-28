const express = require('express');
const path = require('path');
const cors = require('cors');
const Question = require('../database/index');

const app = express();
const PORT = 3004;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/:restaurantID', express.static(path.resolve(__dirname, '..', 'public')));

app.get('/api/questions/:restaurantID', (req, res) => {
  const { restaurantID } = req.params;
  Question.find({ restaurant_id: restaurantID }, (err, questions) => {
    if (err) {
      res.sendStatus(500);
    }
    res.status(200).send(questions);
  });
});

app.get('/api/bundle.js', (req, res) => {
  if (req.header('Accept-Encoding').includes('br')) {
    req.url += '.br';
    res.set('Content-Encoding', 'br');
    res.sendFile(path.resolve(__dirname, '..', 'public', 'bundle.js.br'));
  } else if (req.header('Accept-Encoding').includes('gzip')) {
    req.url += '.gz';
    res.set('Content-Encoding', 'gzip');
    res.sendFile(path.resolve(__dirname, '..', 'public', 'bundle.js.gz'));
  } else {
    res.sendFile(path.resolve(__dirname, '..', 'public', 'bundle.js'));
  }
});

// STRETCH TODO: Store Authors as their own document type
// app.get('/api/authors/:authorID', (req, res) => {
//   // TODO: grab the author associated with the authorID
//   res.send();
// });

// STRETCH TODO: Allow user to upvote an answer.
// app.patch('/api/questions', (res, req) => {
//   // TODO: fill out
// });

// STRETCH TODO: Allow user to post a question.
// app.post('/api/questions', (res, req) => {
//   // TODO: fill out
// });

app.listen(PORT, () => { console.log(`Listening on port ${PORT}.`); });
