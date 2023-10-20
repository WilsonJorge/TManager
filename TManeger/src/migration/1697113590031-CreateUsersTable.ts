import { MigrationInterface, QueryRunner,Table } from "typeorm"
export class CreateUsersTable1697113590031 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: 'users',
              columns: [
                {
                  name: 'id',
                  type: 'integer',
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
                    type: 'integer',
                  },
              ],
            })
          );
        }
  

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }

}
