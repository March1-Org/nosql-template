import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  id: Number,
  name: String,
  age: Number,
  email: String,
  createdAt: Date,
  updatedAt: Date,
  deletedAt: Date,
});

export const User = mongoose.model('User', schema);
