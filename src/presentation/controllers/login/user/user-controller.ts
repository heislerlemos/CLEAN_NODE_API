import {  HttpRequest, HttpResponse, } from './user-controller-protocols'
import {  ok, serverError} from '../../../helpers/http/http-helper'
import { noContent} from '../../../helpers/http/http-helper'
import { LoadUsers } from './user-controller-protocols'




export class UserController {
  
  constructor (private readonly LoadUsers: LoadUsers) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const user = await this.LoadUsers.load()
      return user.length ? ok(user) : noContent()
    } catch (error) {
      return serverError(error)
    }
  }


}


