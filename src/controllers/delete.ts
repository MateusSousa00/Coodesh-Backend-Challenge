import { Request, Response } from "express";
import { ProductService } from "../services/product";

export class DeleteController {
  constructor(private readonly service: ProductService) {}

  async handle(req: Request, res: Response) {
    const { code } = req.params;
    try {
      const data = await this.service.deleteProduct(Number(code));
      if (data === "DELETED") {
        return res.status(200).json({
          data: `Product with code: ${code} deleted successfully.`,
        });
      }
    } catch (error) {
      console.error(`Error in DeleteController: ${error}`);
      return res.status(500).json({
        data: null,
        message: "Internal server error",
        error_code: "INTERNAL_SERVER_ERROR",
      });
    }
  }
}
