import { Router } from 'express';

import CidadeController from '../app/controller/CidadeController';
import ClienteController from '../app/controller/ClienteController';

const router = Router();
const cidadeController = new CidadeController();
const clienteController = new ClienteController();

router
  .post('/cidades', cidadeController.create)
  .post('/clientes', clienteController.create)
  .delete('/clientes/:id', clienteController.delete)
  .put('/clientes/:id', clienteController.update)
  .get('/clientes/:id', clienteController.findById);

export { router };
