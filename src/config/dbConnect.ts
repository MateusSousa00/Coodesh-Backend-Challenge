import mongoose from "mongoose";
import { ENVS } from "../main/constants/index";

const mongoURI = `mongodb://${ENVS.DB_USER}:${ENVS.DB_PASSWORD}@${ENVS.DB_HOST}:${ENVS.DB_PORT}/${ENVS.DB_DATABASE}`;

export const dbOn = async () => await mongoose.connect(mongoURI);
