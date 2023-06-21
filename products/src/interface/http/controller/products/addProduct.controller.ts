import { BaseController, HttpRequest, HttpResponse } from "ecom-common";
import { ICreateProductUseCase } from "../../../../application/interface/usecases/createProduct.inteface";

export class AddProductController extends BaseController {
  constructor(private addProductUseCase: ICreateProductUseCase) {
    super();
  }
  async execute(httpRequest: HttpRequest): Promise<HttpResponse> {
    const { name , price } = httpRequest.body;
    const product = await this.addProductUseCase.execute({name, price})
    return {statusCode: 201, body: {product}};
  }
}