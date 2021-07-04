import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories"

interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean
}

class CreateUserService {
  async execute({
    name,
    email,
    admin
  }: IUserRequest) {
    //cria uma instância de userRepositories
    const usersRepositories = getCustomRepository(UsersRepositories);

    // verifica se possui email
    if(!email) {
      throw new Error("Email incorrect")
    }

    // busca no BD se já existe email igual
    const userAlreadyExists = await usersRepositories.findOne({
      email
    })

    if (userAlreadyExists) {
      throw new Error("User Already exists")
    }

    // cria uma instância do usuário
    const user = usersRepositories.create({
      name,
      email,
      admin
    })

    // salva usuário no bd
    await usersRepositories.save(user)

    return user
  }
}

export { CreateUserService }