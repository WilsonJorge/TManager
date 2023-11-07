import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
@Entity()
export class Category {
 
  @Column()
  categoria: string;

  @Column()
  numeroCategoria: number;

}