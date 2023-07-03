import dotenv from "dotenv";
dotenv.config();

export const ENVS = {
  DB_USER: process.env.DB_USER,
  DB_PASS: process.env.DB_PASS,
  DB_HOST: process.env.DB_HOST,
  DB_PORT: process.env.DB_PORT,
  DB_NAME: process.env.DB_NAME,
  SERVER_PORT: process.env.SERVER_PORT,
  API_KEY: process.env.API_KEY,
  API_BASE_URL: process.env.API_BASE_URL,
};
