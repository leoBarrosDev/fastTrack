import supertest from 'supertest';
import { Connection } from 'typeorm';
import Cidade from '../../src/app/entities/Cidade';
import CidadeController from '../../src/app/controller/CidadeController';
import CidadeService from '../../src/app/service/CidadeService';
import CidadeRepository from '../../src/app/repository/CidadeRepository';
import App from '../../src/App';

// const cidade = {};
const app = new App().express;

describe('Test Feature Cidade', () => {
  let connection: Connection;
  it('GET', async () => {
    const res = await supertest(app).get('/api/cidades/');

    expect(res.statusCode).toBe(200);
  });

  it('POST', async () => {
    const res = await supertest(app)
      .post('/api/cidades/')
      .send({
        nome: 'recife',
        estado: 'pe',
      });

    expect(res.statusCode).toBe(201);
  });
});
