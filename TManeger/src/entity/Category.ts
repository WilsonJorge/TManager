import { Entity, PrimaryGeneratedColumn, Column, Repository, createConnection, getConnection } from 'typeorm';

@Entity()
export class Departament {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  departamento: string;

  @Column()
  numeroColaboradores: number;

  static getRepository(): Repository<Departament> {
    const connection = getConnection(); // Recupere a conexão existente ou crie uma nova se necessário
    return connection.getRepository(Departament);
  }

  static async getAll(): Promise<Departament[]> {
    return this.getRepository().find();
  }

  static async getById(id: number): Promise<Departament | undefined> {
    return this.getRepository().findOne(id);
  }

  static async create(departament: Departament): Promise<Departament> {
    return this.getRepository().save(departament);
  }

  static async update(departament: Departament): Promise<void> {
    await this.getRepository().update(departament.id, departament);
  }

  static async delete(id: number): Promise<void> {
    await this.getRepository().delete(id);
  }
}

// Para criar uma conexão com o banco de dados:
createConnection({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: "postgres",
    password: "root",
    database: "Tmaneger",
  entities: [Departament],
  synchronize: true, // Esteja ciente dos riscos ao usar sincronização em produção
}).then(connection => {
  // Aqui você pode começar a usar os métodos do seu modelo Departament
}).catch(error => console.log(error));

export default Departament;
