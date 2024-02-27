// import { DataSource } from "typeorm"
const {DataSource} = require("typeorm")
const myDataSource = new DataSource({
    type: "mysql",
    host: "172.17.0.2",
    port: 3306,
    username: "root",
    password: "1234",
    database: "mysql",
    entities: ["src/entity/*.ts"],
    logging: true,
    synchronize: true,
})