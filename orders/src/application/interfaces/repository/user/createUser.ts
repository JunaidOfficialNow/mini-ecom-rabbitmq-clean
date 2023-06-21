import { User } from "../../../../domain/user";

export interface ICreateUserRepository {
  createUser(user: User): Promise<void>;
}