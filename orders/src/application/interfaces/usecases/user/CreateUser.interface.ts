import { User } from "../../../../domain/user";

export interface ICreateUserListenedUseCase {
  execute(userData: User) : Promise<void>;
}