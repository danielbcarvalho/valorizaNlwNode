import { getCustomRepository } from "typeorm"
import { TagRepositories } from "../repositories/TagRepositories"
import { classToPlain } from "class-transformer"

class ListTagsService {
  async execute() {
    const tagsRepositories = getCustomRepository(TagRepositories)

    let tags = await tagsRepositories.find()

  // adicionar uma propriedade com o nome customizável 'hashtag'
    
    // tags = tags.map(tag => (
    //   {...tag, nameCustom: `#${tag.name}`}
    // ))

    return classToPlain(tags)
  }
}

export { ListTagsService }