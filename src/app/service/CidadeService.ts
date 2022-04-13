import CidadeRepository from '../repository/CidadeRepository';
import { cidadeRequest } from '../@type/cidadeRequest';
import Cidade from '../entities/Cidade';

const cidadeRepository = new CidadeRepository();

class CidadeService {
  async create({ nome, estado }: cidadeRequest): Promise<Cidade> {
    const result = await cidadeRepository.create({ nome, estado });
    return result;
  }
}

export default CidadeService;
