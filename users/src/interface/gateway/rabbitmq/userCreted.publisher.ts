import { Exchanges, RabPublisher, RoutingKeys, UserCreatedEvent } from "ecom-common";

export class UserCreatedPublisher extends RabPublisher<UserCreatedEvent> {
  protected exchange: string = Exchanges.USERS
  protected routingKey: string = RoutingKeys.USER_CREATED
  protected options: Object | undefined;
}