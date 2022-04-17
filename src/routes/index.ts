import { Router } from 'express';

import CidadeController from '../app/controller/CidadeController';
import ClienteController from '../app/controller/ClienteController';
import ValidationBodyCity from '../app/validations/cidade/validationBodyCity';
import ValidationBodyCustomer from '../app/validations/cliente/validationBodyCustomer';
import ValidationId from '../app/validations/uuid/validationId';

const router = Router();
const cidadeController = new CidadeController();
const clienteController = new ClienteController();
const validationBodyCity = new ValidationBodyCity();
const validationBodyCustomer = new ValidationBodyCustomer();
const validationId = new ValidationId();

router
  .post('/cidades', validationBodyCity.use, cidadeController.create)
  .get('/cidades', cidadeController.findAll)
  .post('/clientes', validationBodyCustomer.use, clienteController.create)
  .delete('/clientes/:id', validationId.use, clienteController.delete)
  .put('/clientes/:id', validationId.use, clienteController.update)
  .get('/clientes/:id', validationId.use, clienteController.findById)
  .get('/clientes', clienteController.findAll);

export { router };
