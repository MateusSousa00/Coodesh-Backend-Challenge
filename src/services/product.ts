import { Product, IProduct } from "../main/models/Products";

export enum STATUS {
  DRAFT = "draft",
  TRASH = "trash",
  PUBLISHED = "published",
}

export class ProductService {
  //atualiza o status do produto para trash
  async deleteProduct(code: number): Promise<string> {
    try {
      await Product.findByIdAndUpdate(
        {
          code,
        },
        {
          status: STATUS.TRASH,
        },
        {
          new: true,
          useFindAndModify: false,
        }
      );
      return "DELETED";
    } catch (error) {
      return `error: ${error}`;
    }
  }

  //pega apenas um produto na base de dados
  async getProduct(code: number): Promise<IProduct | null> {
    return await Product.findOne({ code });
  }

  //pega todos os produtos com paginação
  async getAllProducts(): Promise<IProduct[]> {
    return await Product.find({});
  }
}
