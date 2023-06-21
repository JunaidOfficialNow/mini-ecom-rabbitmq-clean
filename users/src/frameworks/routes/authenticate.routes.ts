import { Router } from "express";

export default function AuthenticateRoutes(router: Router) {
  router.post('/login');
  router.post('/register');
}