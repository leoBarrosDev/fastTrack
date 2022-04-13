import { Request, Response } from 'express';

import ClienteService from '../service/ClienteService';

const clienteService = new ClienteService();

class ClienteController {
  async create(req: Request, res: Response): Promise<Response> {
    try {
      const {
        nome,
        sexo,
        data_nascimento,
        idade,
        cidade_id,
      } = req.body;
      const result = await clienteService.create({
        nome,
        sexo,
        data_nascimento,
        idade,
        cidade_id,
      });

      return res.status(201).json(result);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}

export default ClienteController;
