import mysql from 'mysql';
import dotenv from 'dotenv'
dotenv.config();

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.MYSQL_DB,
    password: process.env.DB_PASS,
    connectionLimit: 10,
    insecureAuth: true
});

export default pool;