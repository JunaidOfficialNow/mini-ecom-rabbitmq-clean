import { ICreateUserRepository } from "../../../application/interfaces/repository/user/createUser";
import { User } from "../../../domain/user";

export class UserRepository implements ICreateUserRepository {
  constructor(private userModel: any) {};
  async createUser(user: User): Promise<void> {
    await this.userModel.create(user);
  }
  
}