import { User } from "../../../../domain";
import { UseCase } from "../../useCase.inteface";

export interface IAddUserUseCase extends UseCase<AddUserUseCase.Request, AddUserUseCase.Response> {
  execute(userProps: AddUserUseCase.Request ): Promise<AddUserUseCase.Response>;
}


export namespace AddUserUseCase {
  export type Request = User
  export type Response = User
}