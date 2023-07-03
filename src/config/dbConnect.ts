import mongoose from "mongoose";
import { ENVS } from "../main/constants/index";

const mongoURI = `mongodb://${ENVS.DB_USER}:${ENVS.DB_PASS}@${ENVS.DB_HOST}:${ENVS.DB_PORT}/${ENVS.DB_NAME}?authSource=admin`;

mongoose.connect(mongoURI);

mongoose.connection.on("error", () => console.error("connection error:"));
mongoose.connection.once("open", () => console.log("database connected"));
