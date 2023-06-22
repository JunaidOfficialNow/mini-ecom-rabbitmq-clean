import { BaseController } from "ecom-common";
import { AddUserController } from "../../../../interface/http/controller/user/addUser.controller";
import { AddUserUseCase } from "../../../../application/usecases/user/adduser.useCase";
import { UserRepository } from "../../../../interface/repository/mongodb/user.repository";
import { userModel } from "../../../../interface/db/mongodb/models/user.model";
import { UserCreatedPublishMessenger } from "../../../../interface/messaging/publisher/rabbitmq/userCreate.publisher";
import { rabClient } from "../../../config/rabbitmq";

export function makeAddUserController(): BaseController {
  const userRepo =  new UserRepository(userModel);
  const addUserPublisher = new UserCreatedPublishMessenger(rabClient.channel);
  const addUserUseCase = new AddUserUseCase(userRepo, addUserPublisher);
  return new AddUserController(addUserUseCase);
}
