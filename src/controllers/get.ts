import { Request, Response } from "express";
import { ProductService } from "../services/product";

export class GetController {
  constructor(private readonly service: ProductService) {}

  async handle(req: Request, res: Response) {
    const { code } = req.params;
    try {
      const data = this.service.getProduct(Number(code));
      return res.status(200).json({ data: data });
    } catch (error) {
      console.error(`Error in GetController: ${error}`);
      return res.status(500).json({
        data: null,
        message: "Internal server error",
        error_code: "INTERNAL_SERVER_ERROR",
      });
    }
  }
}
