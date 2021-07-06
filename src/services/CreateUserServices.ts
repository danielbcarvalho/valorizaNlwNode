import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories"
import { hash } from "bcryptjs"

interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
  password: string;
}

class CreateUserService {
  async execute({
    name,
    email,
    admin,
    password
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

    const passwordHash = await hash(password, 8)

    if (userAlreadyExists) {
      throw new Error("User Already exists")
    }

    // cria uma instância do usuário
    const user = usersRepositories.create({
      name,
      email,
      admin,
      password: passwordHash
    })

    // salva usuário no bd
    await usersRepositories.save(user)

    return user
  }
}

export { CreateUserService, IUserRequest }