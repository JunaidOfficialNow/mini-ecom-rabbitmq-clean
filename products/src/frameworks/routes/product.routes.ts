import { Router } from "express";
import { makeAddProductController } from "../factory/controller/products/addProduct.controller";
import { expressRouteHandlerAdapter } from "ecom-common";

export function configProductRoutes(router: Router) {
  router.post('/products', expressRouteHandlerAdapter(makeAddProductController()));
}