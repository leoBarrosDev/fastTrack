import { getRepository } from 'typeorm';
import Cidade from '../entities/Cidade';

import { cidadeRequest } from '../@type/cidadeRequest';

class CidadeRepository {
  async create({ nome, estado }: cidadeRequest): Promise<Cidade> {
    const repository = getRepository(Cidade);
    const cidade = repository.create({ nome, estado });

    await repository.save(cidade);
    return cidade;
  }

  async findAll(payload): Promise<Cidade|Cidade[]> {
    const repository = getRepository(Cidade);
    const cidades = await repository.find(payload);

    return cidades;
  }

  // async findByName(name: string): Promise<Cidade> {
  //   const repository = getRepository(Cidade);
  //   const cidade = await repository.findOne({ where: { nome: name } });

  //   return cidade;
  // }
}

export default CidadeRepository;
