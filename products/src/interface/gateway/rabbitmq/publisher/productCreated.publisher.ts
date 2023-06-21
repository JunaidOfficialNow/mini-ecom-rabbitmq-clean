import { Exchanges, RabPublisher, RoutingKeys } from "ecom-common";

export class ProductCreatedPublisher extends RabPublisher {
  protected exchange: string = Exchanges.PRODUCTS;
  protected routingKey: string = RoutingKeys.PRODUCT_CREATED;
  protected options: Object | undefined = undefined;

}