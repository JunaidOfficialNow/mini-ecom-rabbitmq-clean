import { Product } from "../../../domain/product";

export interface ICreateProductPublishMessenger {
  publish(productData: Product) : Promise<void>;
}