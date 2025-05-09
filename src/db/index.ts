import { config } from 'config';
import mongoose from 'mongoose';

const connectionString = `mongodb://${config.MONGODB_HOST}:${config.MONGODB_PORT}`;

mongoose.connect(connectionString, {
  dbName: config.MONGODB_DB,
  auth: {
    username: config.MONGODB_USER,
    password: config.MONGODB_PASSWORD,
  },
});
