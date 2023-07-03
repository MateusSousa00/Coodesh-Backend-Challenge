import { Request, Response, Router } from "express";

import {
  DefaultController,
  DeleteController,
  GetController,
  GetAllController,
} from "../controllers";
import { ProductService } from "../services/product";
import { updateDatabase } from "../config/cron";

export const routes = Router();
export const service = new ProductService();

//controllers
const serverStarted = new DefaultController();
const deleteProduct = new DeleteController(service);
const getOneProduct = new GetController(service);
const getAllProduct = new GetAllController(service);

//makers
async function makeDefaultController(req: Request, res: Response) {
  return await serverStarted.handle(req, res);
}

async function makeUpdateController(req: Request, res: Response) {
  return await updateDatabase(req, res);
}

async function makeDeleteController(req: Request, res: Response) {
  return await deleteProduct.handle(req, res);
}

async function makeGetController(req: Request, res: Response) {
  return await getOneProduct.handle(req, res);
}

async function makeGetAllController(req: Request, res: Response) {
  return await getAllProduct.handle(req, res);
}

//routes
routes.get("/", makeDefaultController);
routes.put("/products/:code", makeUpdateController);
routes.delete("/products/:code", makeDeleteController);
routes.get("/products/:code", makeGetController);
routes.get("/products", makeGetAllController);
