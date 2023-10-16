import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import { v4 as uuidv4 } from "uuid";
@Entity()
export class User {

    @PrimaryGeneratedColumn("uuid")
  id: string = uuidv4();

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    age: number

}
