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

  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const result = await clienteService.delete(id);

      return res.status(204).json(result);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const payload = req.body;

      const result = await clienteService.update(id, payload);

      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }

  async findById(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const result = await clienteService.findById(id);

      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }
}

export default ClienteController;
