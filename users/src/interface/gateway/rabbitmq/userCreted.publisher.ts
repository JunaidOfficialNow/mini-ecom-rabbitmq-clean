import { Exchanges, RabPublisher, RoutingKeys } from "ecom-common";


export class UserCreatedPublisher extends RabPublisher {
  protected exchange: string = Exchanges.USERS
  protected routingKey: string = RoutingKeys.USER_CREATED
  protected options: Object | undefined = undefined
  
}