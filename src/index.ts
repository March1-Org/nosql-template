import { connect } from 'db';
import { User } from 'schema/user';

export { User };

await connect();

const newUser = new User({
  age: 10,
});

const res = await newUser.save();

console.log(res);

console.log(await User.find());
