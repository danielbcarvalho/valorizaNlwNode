import { Response } from "express"
import { RequestCustom } from "../@types"
import { ListUserSendComplimentsService } from "../services/ListUserSendComplimentsService"


class ListUserSendComplimentsController {

  async handle(request: RequestCustom, response: Response) {
    const { user_id } = request

    const listUserSendComplimentsService = new ListUserSendComplimentsService()

    const compliments = await listUserSendComplimentsService.execute(user_id)
  
    return response.json(compliments)

  }
}

export { ListUserSendComplimentsController }