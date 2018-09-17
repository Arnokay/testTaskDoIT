import config from './index'
import jwt from 'express-jwt'

const authenticate = jwt({
  secret: config.jwtSecret
});

export default authenticate;