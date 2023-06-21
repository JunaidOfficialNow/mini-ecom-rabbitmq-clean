import { RabConsumer } from "ecom-common";
import { UserCreatedConsumer } from "../../rabbitmq/listener/userCreated.listener";
import { rabClient } from "../../config/rabbitmq";
import { UserCreatedListenerMessenger } from "../../../interface/messaging/rabbitmq/listner/userCreated.listener";
import { CreateUserListenedUseCase } from "../../../application/usecases/user/createUser";
import { UserRepository } from "../../../interface/repository/mongodb/userRepository";
import { userModel } from "../../../interface/db/mongodb/models/user.model";

export function makeUserCreatedListener(): RabConsumer {
  const userRepository = new UserRepository(userModel)
  const createUserUseCase  = new CreateUserListenedUseCase(userRepository);
  const listener = new UserCreatedListenerMessenger(createUserUseCase)
  return new UserCreatedConsumer(rabClient.channel, listener);
}