import {LoadUsersRepository} from '../../../../data/protocols/db/user/load-user'
import { type UserModel } from '../../../../domain/models/user'
import { MongoHelper } from '../helpers/mongo-helper'

export class UserMongoRepository implements LoadUsersRepository{


  async loadAll (): Promise<any> {
    const userCollection = await MongoHelper.getCollection('users')
    const users = await userCollection.find().toArray()
    return users
  }

}