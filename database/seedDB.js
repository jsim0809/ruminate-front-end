const faker = require('faker');
const Question = require('../database/index');

const seedDB = () => {
  for (let i = 0; i < 100; i += 1) {
    const numAnswers = Math.floor(Math.random() * 6);
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

    const datum = new Question({
      text: faker.lorem.sentences(),
      restaurant_id: i,
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
      date: faker.date.past(),
      answers: answersArray,
    });

    datum.save((err) => {
      if (err) {
        console.error(err);
      }
    });

    // Repeats about 9 times for each restaurant
    if (Math.random() < 0.9) {
      i -= 1;
    }
  }
};

seedDB();
