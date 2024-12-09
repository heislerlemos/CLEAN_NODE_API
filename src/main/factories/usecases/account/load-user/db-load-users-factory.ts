import { UserMongoRepository } from '../../../../../infra/db/mongodb/user/user-mongo-repository'
import { LoadUsers} from '../../../../../domain/usecases/load-users'
import { DbLoadUsers} from '../../../../../data/usecases/load-user/db-load-user'


export const  makeDbLoadUsers = (): LoadUsers=> {
  const UserMongoRepositorys = new  UserMongoRepository()
   return new DbLoadUsers(UserMongoRepositorys)

}
