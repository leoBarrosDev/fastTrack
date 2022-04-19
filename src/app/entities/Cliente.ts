import {
  Entity, Column, CreateDateColumn, PrimaryColumn, ManyToOne, JoinColumn,
} from 'typeorm';

import { v4 as uuid } from 'uuid';

import Cidade from './Cidade';

@Entity('Clientes')
class Cliente {
  @PrimaryColumn()
    id: string;

  @Column()
    nome: string;

  @Column()
    sexo: string;

  @Column()
    data_nascimento: string;

  @Column()
    idade: number;

  @Column()
    cidade_id: string;

  @ManyToOne(() => Cidade)
  @JoinColumn({ name: 'cidade_id' })
    cidade: Cidade;

  @CreateDateColumn()
    created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export default Cliente;
