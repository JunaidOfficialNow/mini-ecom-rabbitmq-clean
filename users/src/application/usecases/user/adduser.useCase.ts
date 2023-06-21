import { User } from "../../../domain";
import { IAddUserUseCase } from "../../interfaces/usecases/user/addUser.useCase";

export class AddUserUseCase implements IAddUserUseCase {
  execute(userProps: User): Promise<User> {
    throw new Error("Method not implemented.");
  }
  
}