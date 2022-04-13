import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateClientes1649862353159 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'Clientes',
      columns: [
        {
          name: 'id',
          type: 'uuid',
          isPrimary: true,
          isGenerated: true,
        },
        {
          name: 'nome',
          type: 'varchar',
          isNullable: false,
        },
        {
          name: 'sexo',
          type: 'varchar',
          isNullable: false,
        },
        {
          name: 'data_nascimento',
          type: 'varchar',
          isNullable: false,
        },
        {
          name: 'idade',
          type: 'int',
          isNullable: false,
        },
        {
          name: 'cidade_id',
          type: 'uuid',
          isNullable: false,
        },
        {
          name: 'created_at',
          type: 'timestamp',
          isNullable: false,
          default: 'now()',
        },
      ],
      foreignKeys: [
        {
          name: 'fk_clientes_cidade',
          columnNames: ['cidade_id'],
          referencedTableName: 'Cidades',
          referencedColumnNames: ['id'],
        },
      ],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('Clientes');
  }
}
