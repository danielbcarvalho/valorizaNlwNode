import { Request, Response, NextFunction } from "express" 
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

export async function ensureAdmin(request: Request, response: Response, next: NextFunction) {
  
  const { user_id } = request;

  const usersRepositories = getCustomRepository(UsersRepositories)

  const user = await usersRepositories.findOne(user_id)
  console.log("🚀 ~ file: ensureAdmin.ts ~ line 12 ~ ensureAdmin ~ user", user)
  // verificar se usuário é admin

  if(user.admin) {
    return next()
  }

  return response.status(401).json({
    error: "Unauthorized"
  })
}