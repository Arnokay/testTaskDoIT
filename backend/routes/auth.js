import { Router } from 'express'
import validate from 'express-validation'

import AuthController from '../controllers/auth'
import validation from './validation/auth'

const authCtrl = new AuthController();

const router = new Router();

router.route('/token')
  .post([validate(validation.auth)], authCtrl.authenticate,
    authCtrl.generateToken,
    authCtrl.respondJWT);

export default router;