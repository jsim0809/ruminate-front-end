const express = require('express');
const path = require('path');

const app = express();
const PORT = 3004;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', express.static(path.resolve(__dirname, '..', 'public')));

app.get('/api/questions/:restaurantID', (req, res) => {
  // TODO: grab all questions associated with a restaurantID
  res.send();
});

app.get('/api/authors/:authorID', (req, res) => {
  // TODO: grab the author associated with the authorID
  res.send();
});

// Stretch TODO 1: Allow user to upvote an answer.
// app.patch('/api/questions', (res, req) => {
//   // TODO: fill out
// });

// Stretch TODO 2: Allow user to post a question.
// app.post('/api/questions', (res, req) => {
//   // TODO: fill out
// });

app.listen(PORT, () => { console.log(`Listening on port ${PORT}.`); });
