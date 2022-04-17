import Joi, { ObjectSchema } from 'joi';
import { NextFunction, Response, Request } from 'express';

class ValidationId {
  async use(req: Request, res: Response, next: NextFunction): Promise<void|Response> {
    try {
      const validation: ObjectSchema<string> = Joi.object({
        id: Joi.string()
          .min(36)
          .max(36)
          .trim()
          .pattern(/[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89aAbB][a-f0-9]{3}-[a-f0-9]{12}/)
          .required(),
      });
      const { error } = await validation.validate(req.params, { abortEarly: false });
      if (error) throw error;
      return next();
    } catch (error) {
      return res.status(400).json({
        details: error.details.map((detail) => ({
          name: detail.path[0],
          description: detail.message,
        })),
      });
    }
  }
}

export default ValidationId;
