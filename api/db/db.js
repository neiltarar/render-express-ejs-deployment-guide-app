const { Pool } = require('pg');

let poolConfig;

if (process.env.DATABASE_URL) {
    poolConfig = {
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false
        }
    };
} else {
    poolConfig = {
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        database: process.env.DB_NAME ,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT
    };

    if (process.env.DEV_DB_PASSWORD) {
        poolConfig.password = process.env.DEV_DB_PASSWORD;
    }
}

const pool = new Pool(poolConfig);

module.exports = {
    query: (text, params) => pool.query(text, params)
};