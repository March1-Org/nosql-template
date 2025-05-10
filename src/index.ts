import { connect } from 'db';
import { User } from 'schema/user';

await connect();

const newUser = new User({
  id: '1',
  name: 'Alonzo',
  age: 24,
  email: 'alonzo@email.com',
  createdAt: new Date(),
});

await newUser.save();

const users = await User.find();
console.log(users);
