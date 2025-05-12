import path from 'path';

import dotenv from 'dotenv';

const envFile = `.env.${process.env.NODE_ENV || 'development'}`;
dotenv.config({ path: path.resolve(process.cwd(), envFile) });

interface Config {
  NODE_ENV: string;
  PORT: number;
  MONGO_HOST: string;
  MONGO_PORT: number;
  MONGO_DB: string;
  MONGO_USER: string;
  MONGO_PASSWORD: string;
}

export const config: Config = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: parseInt(process.env.PORT || '3000'),
  MONGO_HOST: process.env.MONGO_HOST || '127.0.0.1',
  MONGO_PORT: parseInt(process.env.MONGO_PORT || '27017'),
  MONGO_DB: process.env.MONGO_DB || 'db',
  MONGO_USER: process.env.MONGO_USER || 'db_user',
  MONGO_PASSWORD: process.env.MONGO_PASSWORD || 'db_password',
};
