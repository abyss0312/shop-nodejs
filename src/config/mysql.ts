import "dotenv/config";
import { User } from "../models";
import { DataSource } from "typeorm";


export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.MY_SQL_DB_HOST,
  port: Number(process.env.MY_SQL_DB_PORT),
  username: process.env.MY_SQL_DB_USER,
  password: process.env.MY_SQL_DB_PASSWORD,
  database: process.env.MY_SQL_DB_DATABASE,
  synchronize: true,
  // logging: true,
  entities: [User],
});




export async function initDB() {

  await AppDataSource.initialize();
}