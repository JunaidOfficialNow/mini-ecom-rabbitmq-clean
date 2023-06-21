import { User } from "../../../domain";
import { userDoc } from "../../../interface/db/mongodb/models/user.model";
import { IAddUserRepo } from "../../interfaces/repository/user/createUser.interface";
import { IAddUserUseCase } from "../../interfaces/usecases/user/addUser.useCase";

export class AddUserUseCase implements IAddUserUseCase {
  constructor(private AddUserRepo:  IAddUserRepo) {}
  async execute(userProps: User): Promise<any> {
    const user = await this.AddUserRepo.addUser(userProps);
    return user;
  }
  
}