import { Entity, PrimaryGeneratedColumn, Column, Repository, createConnection, getConnection } from 'typeorm';
import { UUID, randomUUID } from "crypto"
@Entity()
export class Departament {
  @PrimaryGeneratedColumn()
  id: UUID;

  @Column()
  departamento: string;

  @Column()
  numeroColaboradores: number;

}