import dotenv from "dotenv";
dotenv.config();

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
export default {
  client: 'mysql2',
  connection: {
    host: process.env.DB_HOST || '127.0.0.1',
    database: process.env.DB_NAME || 'medpass',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'RootRoot',
  },
  migrations: {
    directory: './src/migrations',
  },
  seeds: {
    directory: './src/seeds',
  },
};

