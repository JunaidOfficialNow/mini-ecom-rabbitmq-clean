import { RabPublisher } from "ecom-common";


export class UserCreatedPublisher extends RabPublisher {
  protected exchange: string;
  protected routingKey: string;
  protected options: Object | undefined;
  
}