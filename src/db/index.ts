import { config } from 'config';
import mongoose from 'mongoose';

const connectionString = `mongodb://${config.MONGO_USER}:${config.MONGO_PASSWORD}@${config.MONGO_HOST}:${config.MONGO_PORT}/${config.MONGO_DB}`;

export async function connect() {
  await mongoose.connect(connectionString);
}
