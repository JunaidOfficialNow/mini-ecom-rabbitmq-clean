import { Model } from "mongoose";
import { IAddUserRepo } from "../../../application/interfaces/repository/user/createUser.interface";
import { User } from "../../../domain";
import { userDoc } from "../../db/mongodb/models/user.model";

export class UserRepository implements 
IAddUserRepo {
  constructor(private userModel: Model<userDoc>) {}
  async  addUser(userData: User): Promise<userDoc| null> {
    return await this.userModel.create(userData); 
  }


}