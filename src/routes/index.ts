import { Router } from 'express';

import CidadeController from '../app/controller/CidadeController';
import ClienteController from '../app/controller/ClienteController';

const router = Router();
const cidadeController = new CidadeController();
const clienteController = new ClienteController();

router
  .post('/cidades', cidadeController.create)
  .post('/clientes', clienteController.create);

export { router };
