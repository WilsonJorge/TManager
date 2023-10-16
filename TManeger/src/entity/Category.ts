import { Entity, PrimaryGeneratedColumn, Column, Repository, createConnection, getConnection } from 'typeorm';
import { UUID, randomUUID } from "crypto"
@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: UUID;

  @Column()
  categoria: string;

  @Column()
  numerocategoria: number;

}