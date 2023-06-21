import { User } from "../../../domain";
import { userDoc } from "../../../interface/db/mongodb/models/user.model";
import { IUserCreatedPublishMessenger } from "../../interfaces/messaging/userCreated.interface";
import { IAddUserRepo } from "../../interfaces/repository/user/createUser.interface";
import { IAddUserUseCase } from "../../interfaces/usecases/user/addUser.useCase";

export class AddUserUseCase implements IAddUserUseCase {
  constructor(private AddUserRepo:  IAddUserRepo, 
    private UserCreatedPublishMessenger: IUserCreatedPublishMessenger) {}
  async execute(userProps: User): Promise<any> {
    const user = await this.AddUserRepo.addUser(userProps);
    await this.UserCreatedPublishMessenger.publish(user);
    return user;
  }
  
}