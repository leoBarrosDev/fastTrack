import {
  Entity, Column, CreateDateColumn, PrimaryColumn,
} from 'typeorm';

import { v4 as uuid } from 'uuid';

@Entity('Cidades')
class Cidade {
  @PrimaryColumn()
    id: string;

  @Column()
    nome: string;

  @Column()
    estado: string;

  @CreateDateColumn()
    created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export default Cidade;
