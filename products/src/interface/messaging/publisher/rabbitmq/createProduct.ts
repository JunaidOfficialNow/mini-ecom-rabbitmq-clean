import { ICreateProductPublishMessenger } from "../../../../application/interface/messaging/createProduct";
import { Product } from "../../../../domain/product";
import { ProductCreatedPublisher } from "../../../gateway/rabbitmq/publisher/productCreated.publisher";

export class CreateProductPublishMessenger implements ICreateProductPublishMessenger {
  constructor(private publisher: ProductCreatedPublisher) {}
  async publish(productData: Product): Promise<void> {
    this.publisher.publish(productData);
  }
}