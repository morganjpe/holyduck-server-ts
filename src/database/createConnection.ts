import { Pool, QueryResult, QueryArrayResult } from "pg";

const pool = new Pool({
  //   host: process.env.DB_HOST,
  //   port: parseInt(process.env.DB_PORT as string, 10),
  //   database: process.env.DB_NAME,
  //   user: process.env.DB_USERNAME,
  //   password: process.env.DB_PASSWORD,
  ssl: {
    rejectUnauthorized: false,
  },
  connectionString:
    "postgresql://doadmin:n09ekb9k88en0t1q@db-postgresql-lon1-22264-do-user-7432706-0.b.db.ondigitalocean.com:25060/defaultdb",
});

export const query = (qstr: string, params?: Array<string | number>) => {
  return pool.query(qstr, params);
};
