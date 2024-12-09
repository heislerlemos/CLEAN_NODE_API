import { LogMongoRepository } from '../../../infra/db/mongodb/log/log-mongo-repository'
import { Controller } from '../../../presentation/protocols'
import { UserControllerDecorator } from '../../decorators/user-controller-decorator'

export const makeUserControllerDecorator = (controller: Controller): Controller => {
  const logMongoRepository = new LogMongoRepository()
  return new UserControllerDecorator(controller, logMongoRepository)
}
