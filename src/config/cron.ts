import axios from "axios";
import zlib from "zlib";
import { CronJob } from "cron";
import { Product } from "../main/models/Products";
import { ENVS } from "../main/constants";

const schedule = "0 9 * * *"; //9AM

export async function updateDatabase(): Promise<void> {
  const pageSize = 100;
  const page = 1;
  const products = await Product.find({})
    .maxTimeMS(parseInt(ENVS.DB_TIMEOUT as string))
    .skip((page - 1) * pageSize)
    .limit(pageSize);
  const start = products.length > 0 ? products[0].id + 1 : 1;
  const end = start + pageSize - 1;

  const response = await axios.get(`${ENVS.API_BASE_URL}/products_01.json.gz`, {
    responseType: "stream",
  });

  const gunzip = zlib.createGunzip();
  const jsonStream = response.data.pipe(gunzip);
  let count = 0;
  let jsonData = ""; // Accumulate the JSON data

  jsonStream.on("data", (chunk: any) => {
    jsonData += chunk.toString(); // Accumulate the chunks
  });

  jsonStream.on("end", async () => {
    try {
      const data = JSON.parse(jsonData); // Parse the complete JSON data
      const newData = data.slice(start - 1, end); // Get the first 100 data

      await Product.insertMany(newData);
      count += newData.length;

      console.log(`Imported ${count} data successfully.`);
    } catch (error) {
      console.error(`Error parsing JSON data: ${error}`);
    }
  });

  jsonStream.on("error", (error: any) => {
    console.error(`Error reading JSON stream: ${error}`);
  });
}

const job = new CronJob(schedule, updateDatabase);

export default job;
