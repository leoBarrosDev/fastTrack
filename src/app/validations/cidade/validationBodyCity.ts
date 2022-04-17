import Joi from 'joi';
import { NextFunction, Request, Response } from 'express';
import Cidade from '../../entities/Cidade';

class ValidationBodyCity {
  async use(req:Request, res: Response, next:NextFunction):
  Promise<void|Response> {
    try {
      const validation: Joi.ObjectSchema<Cidade> = Joi.object({
        nome: Joi.string().trim().required().min(3),
        estado: Joi.string().trim().required().min(2),
      });
      const { error } = await validation.validate(req.body, {
        abortEarly: false,
      });
      if (error) throw error;
      return next();
    } catch (error) {
      return res.status(400).json({
        name: error.name,
        description: error.message,
      });
    }
  }
}

export default ValidationBodyCity;
