import axios from "axios";
import { CronJob } from "cron";
import { Product } from "../main/models/Products";
import { ENVS } from "../main/constants";
import { Request, Response } from "express";

const schedule = "0 9 * * *"; //9AM

export async function updateDatabase(
  req: Request,
  res: Response
): Promise<string> {
  const { code } = req.params;
  const products = await Product.find({});

  const newCode = code ? code : "1";

  const newProducts = await axios.get(
    `${ENVS.API_BASE_URL}/products_0${newCode}.json.gz`,
    {
      params: { limit: 100, start: products[0]?.id + 1 },
    }
  );

  try {
    await Product.insertMany(newProducts.data);
    return "data imported successfully.";
  } catch (error) {
    console.error(`errors in import: ${error}`);
    return "found errors in import.";
  }
}

export const job = new CronJob(schedule, () => updateDatabase);
