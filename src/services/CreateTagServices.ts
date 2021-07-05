import { getCustomRepository } from "typeorm";
import { TagRepositories } from "../repositories/TagRepositories";
import { IUserRequest } from "./CreateUserServices"

interface ITagRequest {
  name: string,
}

class CreateTagService {
  async execute({name}: ITagRequest) {
    const tagsRepositories = getCustomRepository(TagRepositories);

    if(!name) {
      throw new Error("Tag must have a name")
    }

    // SELECT * FROM TAGS WHERE NAME = 'name'
    const tagAlreadyExists = await tagsRepositories.findOne({
      name
    })

    if(tagAlreadyExists) {
      throw new Error("Tag Already exists")
    }

    const tag = tagsRepositories.create({
      name
    })

    await tagsRepositories.save(tag)

    return tag
  }
}

export { CreateTagService }