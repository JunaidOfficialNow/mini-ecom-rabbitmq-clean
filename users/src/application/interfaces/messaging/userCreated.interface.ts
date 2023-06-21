import { userDoc } from "../../../interface/db/mongodb/models/user.model";

export interface IUserCreatedPublishMessenger {
  publish(userData: any) : Promise<void>;
}