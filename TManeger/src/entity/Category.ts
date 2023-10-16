import { Entity, PrimaryGeneratedColumn, Column, Repository, createConnection, getConnection } from 'typeorm';
import { v4 as uuidv4 } from "uuid";
@Entity()
export class Category {
  @PrimaryGeneratedColumn("uuid")
  id: string = uuidv4();

  @Column()
  categoria: string;

  @Column()
  numerocategoria: number;

}