import { getRepository, UpdateResult, DeleteResult } from 'typeorm';
import Cliente from '../entities/Cliente';

import { clienteRequest } from '../@type/clienteRequest';

class ClienteRepository {
  async create({
    nome,
    sexo,
    data_nascimento,
    idade,
    cidade_id,
  }: clienteRequest): Promise<Cliente> {
    const repository = getRepository(Cliente);
    const cliente = repository.create({
      nome,
      sexo,
      data_nascimento,
      idade,
      cidade_id,
    });

    await repository.save(cliente);
    return cliente;
  }

  async delete(id: string): Promise<DeleteResult> {
    const repository = getRepository(Cliente);
    const destroy = await repository.delete(id);

    return destroy;
  }
}

export default ClienteRepository;
