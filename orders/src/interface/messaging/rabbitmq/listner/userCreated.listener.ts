import { IUserCreateListenerMessenger } from "../../../../application/interfaces/messages/listener/userCreated.listener";
import { ICreateUserListenedUseCase } from "../../../../application/interfaces/usecases/user/CreateUser.interface";

export class UserCreatedListenerMessenger implements IUserCreateListenerMessenger {
  constructor(private createUserUseCase: ICreateUserListenedUseCase) {}
  async execute(data: any): Promise<void> {
    await this.createUserUseCase.execute(data);
  }

}