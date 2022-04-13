import { Request, Response } from 'express';

import CidadeService from '../service/CidadeService';

const cidadeService = new CidadeService();

class CidadeController {
  async create(req: Request, res: Response): Promise<Response> {
    try {
      const { nome, estado } = req.body;
      const result = await cidadeService.create({ nome, estado });

      return res.status(201).json(result);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }
}

export default CidadeController;
