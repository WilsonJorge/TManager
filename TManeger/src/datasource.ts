import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Category } from "./entity/Category"
import { Departament } from "./entity/Departament"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "root",
    database: "TManeger",
    synchronize: true,
    logging: false,
    entities: [User,Category,Departament],
    migrations: ["./src/migration/*.ts"],
    subscribers: [],
})


