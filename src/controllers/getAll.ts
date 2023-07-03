import { Request, Response } from "express";
import { ProductService } from "../services/product";

export class GetAllController {
  constructor(private readonly service: ProductService) {}

  async handle(req: Request, res: Response) {
    const { page, limit } = req.query;

    const newPage = page ? Number(page) : 1;
    const newLimit = limit ? Number(limit) : 10;

    try {
      const startIndex = (newPage - 1) * newLimit;
      const endIndex = newPage * newLimit;
      const data = this.service.getAllProducts();
      const newData = (await data).slice(startIndex, endIndex);

      return res.status(200).json({
        data: newData,
      });
    } catch (error) {
      console.error(`Error in GetAllController: ${error}`);
      return res.status(500).json({
        data: null,
        message: "Internal server error",
        error_code: "INTERNAL_SERVER_ERROR",
      });
    }
  }
}
