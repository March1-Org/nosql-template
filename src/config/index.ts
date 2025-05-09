import path from 'path';

import dotenv from 'dotenv';

// Load the correct .env file based on NODE_ENV
const envFile = `.env.${process.env.NODE_ENV || 'development'}`;
dotenv.config({ path: path.resolve(process.cwd(), envFile) });

// Define the configuration interface
interface Config {
  NODE_ENV: string;
  PORT: number;
  MONGODB_HOST: string;
  MONGODB_PORT: number;
  MONGODB_DB: string;
  MONGODB_USER: string;
  MONGODB_PASSWORD: string;
}

// Export the configuration
export const config: Config = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: parseInt(process.env.PORT || '3000'),
  MONGODB_HOST: process.env.MONGODB_HOST || '127.0.0.1',
  MONGODB_PORT: parseInt(process.env.MONGODB_PORT || '27017'),
  MONGODB_DB: process.env.MONGODB_DB || 'db',
  MONGODB_USER: process.env.MONGODB_USER || 'db_user',
  MONGODB_PASSWORD: process.env.MONGODB_PASSWORD || 'db_password',
};
