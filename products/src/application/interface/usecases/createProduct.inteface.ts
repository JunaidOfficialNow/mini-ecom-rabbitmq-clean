import { Product } from "../../../domain/product";

export interface ICreateProductUseCase {
  execute(productData: Partial<Product>): Promise<Product & {_id: string, version: number}>;
}