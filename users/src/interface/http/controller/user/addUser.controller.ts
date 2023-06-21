import { BaseController, HttpRequest, HttpResponse } from "ecom-common";
import { hash } from 'bcrypt';
import { IAddUserUseCase } from "../../../../application/interfaces/usecases/user/addUser.useCase";

export class AddUserController extends BaseController {
  constructor(private AddUserUseCase: IAddUserUseCase) {
    super();
  }

  async execute(httpRequest: HttpRequest): Promise<HttpResponse> {
    const {name, email, password} = httpRequest.body;
    const hashPassword = await hash(password, 10);
    const user = await this.AddUserUseCase.execute({name, email, hashPassword});
    return {statusCode: 200, body: {user}};
  }
}