import CidadeRepository from '../repository/CidadeRepository';
import { cidadeRequest } from '../@type/cidadeRequest';
import Cidade from '../entities/Cidade';

const cidadeRepository = new CidadeRepository();

class CidadeService {
  async create({ nome, estado }: cidadeRequest): Promise<Cidade> {
    const result = await cidadeRepository.create({ nome, estado });
    return result;
  }

  async findAll(payload): Promise<Cidade | Cidade[]> {
    const result = await cidadeRepository.findAll(payload);
    return result;
  }
}

export default CidadeService;
