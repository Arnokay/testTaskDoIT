import {Router} from 'express'

import userRouter from './users'
import markerRouter from './markers'
import authRouter from './auth'

const router = Router();

router.use('/auth', authRouter);

router.use('/api/users', userRouter);

 router.use('/api/markers', markerRouter);

export default router;