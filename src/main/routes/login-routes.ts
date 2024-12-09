import { type Router } from 'express'
import { adaptRoute } from '../adapters/express-route-adapter'
import { makeSignUpController } from '../factories/controllers/signup/signup-controller-factory'
import { makeLoginController } from '../factories/controllers/login/login-controller-factory'
import { makeUserController } from '../factories/controllers/user/user-controller-factory'


export default (router: Router): void => {
  router.post('/signup', adaptRoute(makeSignUpController()))
  router.post('/login', adaptRoute(makeLoginController()))
  router.get('/user', adaptRoute(makeUserController()))
}