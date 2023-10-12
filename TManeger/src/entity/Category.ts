import { Entity, PrimaryGeneratedColumn, Column, Repository, createConnection, getConnection } from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  categoria: string;

  @Column()
  numerocategoria: number;

  static getRepository(): Repository<Category> {
    const connection = getConnection(); // Recupere a conexão existente ou crie uma nova se necessário
    return connection.getRepository(Category);
  }

  static async getAll(): Promise<Category[]> {
    return this.getRepository().find();
  }

  static async getById(id: number): Promise<Category | undefined> {
    return this.getRepository().findOne(id);
  }

  static async create(category: Category): Promise<Category> {
    return this.getRepository().save(category);
  }

  static async update(category: Category): Promise<void> {
    await this.getRepository().update(category.id, category);
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
  username: 'seu_usuario',
  password: 'sua_senha',
  database: 'seu_banco_de_dados',
  entities: [Category],
  synchronize: true, // Esteja ciente dos riscos ao usar sincronização em produção
}).then(connection => {
  // Aqui você pode começar a usar os métodos do seu modelo Category
}).catch(error => console.log(error));

export default Category;
