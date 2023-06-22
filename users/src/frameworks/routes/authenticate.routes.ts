import { expressRouteHandlerAdapter } from "ecom-common";
import { Router } from "express";
import { makeAddUserController } from "../factories/controller/user/addUser";

export default function AuthenticateRoutes(router: Router) {
  // router.post('/login');
  router.post('/register', expressRouteHandlerAdapter(makeAddUserController()));
}