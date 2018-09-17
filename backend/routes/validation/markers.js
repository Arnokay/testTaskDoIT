import Joi from 'joi'

export default {

  createMarker: {
    body: {
      user: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
      lat: Joi.number().min(-90).max(90).required(),
      lng: Joi.number().min(-180).max(180).required()
    }
  }

}