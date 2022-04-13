import { UpdateResult, DeleteResult } from 'typeorm';
import Cliente from '../entities/Cliente';

import { clienteRequest } from '../@type/clienteRequest';
import ClienteRepository from '../repository/ClienteRepository';

const clienteRepository = new ClienteRepository();

class ClienteService {
  async create({
    nome,
    sexo,
    data_nascimento,
    idade,
    cidade_id,
  }: clienteRequest): Promise<Cliente> {
    const cliente = await clienteRepository.create({
      nome,
      sexo,
      data_nascimento,
      idade,
      cidade_id,
    });

    return cliente;
  }
}

export default ClienteService;
