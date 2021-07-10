import { Response } from "express";
import { RequestCustom } from "../@types"
import { ListUserReceiveComplimentsService } from "../services/ListUserReceiveComplimentsService";
import { ListUserSendComplimentsService } from "../services/ListUserSendComplimentsService"


class ListUserReceiveComplimentsController {

  async handle(request: RequestCustom, response: Response) {
    const { user_id } = request

    const listUserReceiveComplimentsService = new ListUserReceiveComplimentsService()

    const compliments = await listUserReceiveComplimentsService.execute(user_id)
  
    return response.json(compliments)

  }
}

export { ListUserReceiveComplimentsController }