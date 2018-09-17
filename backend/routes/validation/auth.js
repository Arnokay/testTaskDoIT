import Joi from 'joi'

export default {

  auth: {
    body: {
      username: Joi.string().min(3).required(),
      password: Joi.string().min(3).required()
    }
  }

}