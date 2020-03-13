const express = require('express');
const path = require('path');
const Question = require('../database/index');

const app = express();
const PORT = 3004;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', express.static(path.resolve(__dirname, '..', 'public')));

app.get('/api/questions/:restaurantID', (req, res) => {
  // TODO: grab all questions associated with a restaurantID
  res.send();
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
