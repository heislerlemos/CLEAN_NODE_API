import {UserModel}  from '../../../domain/models/user'
import { LoadUsers } from '../../../domain/usecases/load-users'
import { LoadUsersRepository} from '../../protocols/db/user/load-user'

export class DbLoadUsers implements LoadUsers {
  constructor (private readonly loadUsersRepository: LoadUsersRepository) {}

  async load (): Promise<UserModel[]> {
    const users = await this.loadUsersRepository.loadAll()
    return users
  }
}
