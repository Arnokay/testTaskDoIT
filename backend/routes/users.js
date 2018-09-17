import {Router} from 'express'

import UserController from '../controllers/users'
import User from '../models/user'

const router = Router();
const userCtrl = new UserController(User);

router.route('/')
  .get(userCtrl.list)
  .post(userCtrl.create);

router.route('/:userId')
  .get(userCtrl.get);

router.param('userId', userCtrl.load);

export default router;