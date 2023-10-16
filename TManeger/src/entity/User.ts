import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import { UUID, randomUUID } from "crypto"
@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: UUID

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    age: number

}
