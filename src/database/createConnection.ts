import { Pool, QueryResult, QueryArrayResult } from "pg";

const pool = new Pool({
  ssl: {
    rejectUnauthorized: false,
  },
  connectionString: process.env.CONNECTION_STRING,
});

export const query = (qstr: string, params?: Array<string | number>) => {
  return pool.query(qstr, params);
};
