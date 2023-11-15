import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
@Entity()
export class Project {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string

    @Column()
    email: string

    @Column()
    country: String

    @Column()
    telephone : number

    @Column()
     company : string

     @Column()
     companyPhone : number

     @Column()
     city: string

     @Column()
     Andress : string


}