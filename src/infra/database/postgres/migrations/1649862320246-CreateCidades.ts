import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateCidades1649862320246 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'Cidades',
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
          name: 'estado',
          type: 'varchar',
          isNullable: false,
        },
        {
          name: 'created_at',
          type: 'timestamp',
          default: 'now()',
        },
      ],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('Cidades');
  }
}
