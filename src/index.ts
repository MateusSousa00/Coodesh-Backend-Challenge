import express from "express";
import swagger from "swagger-ui-express";
import swaggerFile from "./main/docs/swagger.json";
import { dbOn } from "./config/dbConnect";
import { routes } from "./routes/index";
import { ENVS } from "./main/constants";
import { job } from "./config/cron";

const app = express();

app.use(express.json());
app.use("/docs", swagger.serve, swagger.setup(swaggerFile));
app.use(routes);

dbOn();

job.start();

app.listen(ENVS.SERVER_PORT, () => {
  console.info(`Server is listening on port: ${ENVS.SERVER_PORT}`);
});
