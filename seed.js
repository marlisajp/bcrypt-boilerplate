const db = require('./server/db/db');
const User = require('./server/db/models/User');

const users = [
  {
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'JaneDoe@example.com',
    username: 'Jane D.',
    password: 'password',
  },
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'JohnDoe@example.com',
    username: 'John D.',
    password: 'password',
  },
];

const seed = async () => {
  try {
    await db.sync({ force: true });
    await Promise.all(users.map((user) => User.create(user)));
    console.log('seeding was successful');
    db.close();
  } catch (error) {
    console.error('something went wrong when seeding database!');
    console.error(error);
    db.close();
  }
};

seed();
