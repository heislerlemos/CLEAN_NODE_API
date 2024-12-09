import {  UserController } from '../../../../presentation/controllers/login/user/user-controller'
import { Controller } from '../../../../presentation/protocols'
import { makeDbLoadUsers } from '../../usecases/account/load-user/db-load-users-factory'
import { makeLogControllerDecorator } from '../../decorators/log-controller-decorator-factory'



//Testando

export const makeUserController = (): Controller => {
    var UserControllers = new UserController( makeDbLoadUsers())
    return makeLogControllerDecorator(UserControllers) 
  }

