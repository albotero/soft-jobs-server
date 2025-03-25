import Joi from "joi"

export const userSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  rol: Joi.string().required(),
  lenguage: Joi.string().required(),
})
