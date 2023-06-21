import { Product } from "../../../domain/product";
import { ICreateProductPublishMessenger } from "../../interface/messaging/createProduct";
import { ICreateProductRepo } from "../../interface/repository/createProduct";
import { ICreateProductUseCase } from "../../interface/usecases/createProduct.inteface";

export class CreateProductUseCase implements ICreateProductUseCase {
  constructor(
    private productRepo : ICreateProductRepo,
    private publisher: ICreateProductPublishMessenger
    ) {}
  async execute(productData: Product): Promise<Product & { _id: string; version: number; }> {
    const product = await this.productRepo.createProduct(productData);
    await this.publisher.publish(product);
    return product;
  }

}