import { type UserModel } from '../models/user'

export interface LoadUsers{
load (): Promise<UserModel[]>
}
