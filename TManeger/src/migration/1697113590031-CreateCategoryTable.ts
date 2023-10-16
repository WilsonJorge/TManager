import { MigrationInterface, QueryRunner,Table } from "typeorm"
import { UUID, randomUUID } from "crypto"
export class CreateCategoryTable1697113590031 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: 'users',
              columns: [
                {
                  name: 'id',
                  type: 'UUID',
                  isPrimary: true,
                },
                {
                  name: 'firstName',
                  type: 'varchar',
                },
                {
                  name: 'lastName',
                  type: 'varchar',
                },
                {
                    name: 'age',
                    type: 'number',
                  },
              ],
            })
          );
        }
  

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }

}
