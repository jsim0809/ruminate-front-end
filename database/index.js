const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/hr-fec-q-a', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connection established with database "hr-fec-q-a".');
});

const authorSchema = new mongoose.Schema({
  username: String,
  level: Number,
  cakeDay: Date,
  hometown: String,
  contributions: Number,
  citiesVisited: Number,
  helpfulVotes: Number,
  reviewsCount: {
    1: Number, 2: Number, 3: Number, 4: Number, 5: Number,
  },
});

const Author = mongoose.model('Author', authorSchema);

const questionSchema = new mongoose.Schema({
  text: String,
  restaurant_id: Number,
  author_id: { type: mongoose.ObjectId, ref: Author },
  date: Date,
  answers: [{
    text: String, author_id: ObjectID, date: Date, votes: Number,
  }],
});

const Question = mongoose.model('Question', questionSchema);
