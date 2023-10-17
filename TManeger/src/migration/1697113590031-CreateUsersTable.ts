import { MigrationInterface, QueryRunner,Table } from "typeorm"
export class CreateUsersTable1697113590031 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: 'user',
              columns: [
                {
                  name: 'id',
                  type: 'number',
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
        await queryRunner.dropTable('user');
    }

}
