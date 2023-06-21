import { BaseController } from "ecom-common";
import { AddProductController } from "../../../../interface/http/controller/products/addProduct.controller";
import { CreateProductUseCase } from "../../../../application/usecases/products/createProduct.usecase";
import { ProductRepository } from "../../../../interface/repository/mongodb/prodcutRepository";
import { productModel } from "../../../../interface/db/mongodb/models/product";
import { CreateProductPublishMessenger } from "../../../../interface/messaging/publisher/rabbitmq/createProduct";
import { ProductCreatedPublisher } from "../../../../interface/gateway/rabbitmq/publisher/productCreated.publisher";
import { rabClient } from "../../../config/rabbitmq";


export function makeAddProductController(): BaseController {
  const productRepo = new ProductRepository(productModel)
  const eventPublisher = new ProductCreatedPublisher(rabClient.channel)
  const publisher = new CreateProductPublishMessenger(eventPublisher)
  const addProductUseCase = new CreateProductUseCase(productRepo, publisher);
  return new AddProductController(addProductUseCase);

}