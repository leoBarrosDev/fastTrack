import { Router } from 'express';
import CidadeController from '../app/controller/CidadeController';

const router = Router();
const cidadeController = new CidadeController();

router
  .post('/cidades', cidadeController.create);

export { router };
