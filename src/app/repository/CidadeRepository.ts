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
}

export default CidadeRepository;
