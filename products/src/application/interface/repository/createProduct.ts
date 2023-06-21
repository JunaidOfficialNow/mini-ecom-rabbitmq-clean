import { Product } from "../../../domain/product";

export interface ICreateProductRepo {
  createProduct(productData: Product) : Promise<Product & {_id: string, version: number}>
}