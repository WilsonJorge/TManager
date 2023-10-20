import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCategoryTables1697528681957 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'category',
        columns: [
          {
            name: 'id',
            type: 'integer', // Correção aqui
            isPrimary: true,
          },
          {
            name: 'categoria',
            type: 'varchar',
          },
          {
            name: 'numeroCategoria',
            type: 'integer', // Correção aqui
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('category');
  }
}

