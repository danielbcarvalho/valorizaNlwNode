import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../repositories/ComplimentsReposiories"

class ListUserSendComplimentsService {

  async execute(user_id: string) {
    const complimentsRepository = getCustomRepository(ComplimentsRepositories)
    const sentCompliments = await complimentsRepository.find({
      where: {
        user_sender: user_id
      },
      relations: ["userSender", "userReceiver", "tag"]
    })
    
    return sentCompliments
  }
}

export { ListUserSendComplimentsService }