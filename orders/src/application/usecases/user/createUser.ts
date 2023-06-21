import { User } from "../../../domain/user";
import { ICreateUserRepository } from "../../interfaces/repository/user/createUser";
import { ICreateUserListenedUseCase } from "../../interfaces/usecases/user/CreateUser.interface";

export class CreateUserListenedUseCase implements ICreateUserListenedUseCase {
  constructor(private createUserRepo: ICreateUserRepository) {};
  async execute(userData: User): Promise<void> {
    const user = new User(userData.name, userData.email, userData._id);
    await this.createUserRepo.createUser(user);
  }

}