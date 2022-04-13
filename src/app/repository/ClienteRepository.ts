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

  async update(id: string, payload: clienteRequest): Promise<UpdateResult> {
    const repository = getRepository(Cliente);
    const newClient = await repository.update(id, payload);

    return newClient;
  }

  async findById(id: string): Promise<Cliente> {
    const repository = getRepository(Cliente);
    const cliente = await repository.findOne(id);

    return cliente;
  }
}

export default ClienteRepository;
