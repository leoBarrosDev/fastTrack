import Joi from 'joi';
import { NextFunction, Request, Response } from 'express';
import Cliente from '../../entities/Cliente';

class ValidationBodyCustomer {
  async use(req: Request, res: Response, next: NextFunction): Promise<void|Response> {
    try {
      const validation: Joi.ObjectSchema<Cliente> = Joi.object({
        nome: Joi.string().trim().min(3).required(),
        sexo: Joi.string().trim().required(),
        data_nascimento: Joi.string().required(),
        idade: Joi.number().required(),
        cidade_id: Joi.string().trim().required(),
      });
      const { error } = await validation.validate(req.body, { abortEarly: true });
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

export default ValidationBodyCustomer;
