import { ICreateProductRepo } from "../../../application/interface/repository/createProduct";
import { Product } from "../../../domain/product";

export class ProductRepository implements ICreateProductRepo {
  constructor(private productModel: any) { }
  async createProduct(productData: Product): Promise<Product & { _id: string; version: number; }> {
    const product =await this.productModel.create(productData);
    return product;
  }
}