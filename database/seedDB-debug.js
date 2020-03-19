const faker = require('faker');
const Question = require('../database/index');

// This script is for targeted seeding of a restaurant with custom parameters. for testing purposes.

for (let i = 0; i < 50; i += 1) {
  const numAnswers = i;
  const answersArray = [];
  for (let j = 0; j < numAnswers; j += 1) {
    const answer = {
      text: faker.lorem.sentence(),
      author: {
        username: faker.name.findName(),
        avatarUrl: faker.image.avatar(),
        level: Math.floor(Math.random() * 100),
        cakeYear: Math.floor(Math.random() * 40) + 1980,
        hometown: `${faker.address.city()}, ${faker.address.country()}`,
        contributions: Math.floor(Math.random() * 10),
        citiesVisited: Math.floor(Math.random() * 10),
        helpfulVotes: Math.floor(Math.random() * 10),
        reviewsCount: {
          1: Math.floor(Math.random() * 10),
          2: Math.floor(Math.random() * 10),
          3: Math.floor(Math.random() * 10),
          4: Math.floor(Math.random() * 10),
          5: Math.floor(Math.random() * 10),
        },
      },
      index: j,
      votes: Math.floor(Math.random() * 10),
    };
    answersArray.push(answer);
  }

  const theFirstQuestion = new Question({
    text: 'What is the answer to the ultimate question of life, the universe, and everything?',
    restaurant_id: 100,
    author: {
      username: 'Lunkwill',
      avatarUrl: 'https://media-cdn.tripadvisor.com/media/photo-l/01/2a/fd/98/avatar.jpg',
      level: 100,
      cakeYear: 1970,
      hometown: 'Magrathea',
      contributions: 1,
      citiesVisited: 0,
      helpfulVotes: 2,
      reviewsCount: {
        1: 5, 4: 1,
      },
    },
    date: '2016-01-01T23:35:01.844Z',
    answers: answersArray,
  });

  theFirstQuestion.save((err) => {
    if (err) {
      console.error(err);
    }
  });
}

// =======================
// Useful testing snippets
// =======================
//
// answers: [{
//   text: '42.',
//   author: {
//     username: 'Deep Thought',
//     level: 999,
//     cakeYear: 1984,
//     hometown: 'Magrathea',
//     contributions: 85764,
//     citiesVisited: 0,
//     helpfulVotes: 8,
//     reviewsCount: {
//       1: 10, 2: 10, 3: 10, 4: 10, 5: 10,
//     },
//   },
//   index: 0,
//   votes: 374,
// },
// {
//   text: '54.',
//   author: {
//     username: 'Arthur Dent',
//     level: 47,
//     cakeYear: 2003,
//     hometown: 'London',
//     contributions: 2,
//     citiesVisited: 2,
//     helpfulVotes: 60,
//     reviewsCount: {},
//   },
//   index: 1,
//   votes: 31,
// }],