import path from 'path';

import dotenv from 'dotenv';

// Load the correct .env file based on NODE_ENV
const envFile = `.env.${process.env.NODE_ENV || 'development'}`;
dotenv.config({ path: path.resolve(process.cwd(), envFile) });

// Define the configuration interface
interface Config {
  NODE_ENV: string;
  PORT: number;
  MONGO_HOST: string;
  MONGO_PORT: number;
  MONGO_DB: string;
  MONGO_USER: string;
  MONGO_PASSWORD: string;
}

// Export the configuration
export const config: Config = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: parseInt(process.env.PORT || '3000'),
  MONGO_HOST: process.env.MONGODB_HOST || '127.0.0.1',
  MONGO_PORT: parseInt(process.env.MONGODB_PORT || '27017'),
  MONGO_DB: process.env.MONGODB_DB || 'db',
  MONGO_USER: process.env.MONGODB_USER || 'db_user',
  MONGO_PASSWORD: process.env.MONGODB_PASSWORD || 'db_password',
};
