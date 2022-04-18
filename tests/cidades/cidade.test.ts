import supertest from 'supertest';
import Cidade from '../../src/app/entities/Cidade';
import CidadeController from '../../src/app/controller/CidadeController';
import CidadeService from '../../src/app/service/CidadeService';
import CidadeRepository from '../../src/app/repository/CidadeRepository';
import App from '../../src/App';

function createCidade(cidade: Cidade) {
  return {
    nome: 'Cidade teste',
    estado: 'Estado teste',
  };
}

const cidade = {
  nome: 'Ribeirão Preto',
  uf: 'SP',
};
const app = new App().express;

describe('Test Feature Cidade', () => {
  it('GET', async () => {
    await supertest(App).post('/api/cidades').send(cidade);

    const res = await supertest(app).get('/api/cidades/');

    expect(res.statusCode).toBe(200);
  });

  it('POST', async () => {
    const res = await supertest(app)
      .post('/api/cidades/')
      .send({
        nome: 'Ilha de itamaracá',
        estado: 'PE',
      });

    expect(res.statusCode).toBe(201);
  });
});
