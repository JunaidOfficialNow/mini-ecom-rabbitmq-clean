import { User } from "../../../../domain";
import { userDoc } from "../../../../interface/db/mongodb/models/user.model";

export interface IAddUserRepo {
  addUser(userData: AddUserRepo.Request) : Promise<AddUserRepo.Response>;
}


export namespace AddUserRepo {
  export  type Request = User;
  export type Response = userDoc | null;
}