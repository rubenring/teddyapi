import mysql from 'mysql';
import { dbconfig } from '../Configuration';

let connection = mysql.createConnection(dbconfig);

module.exports = {
    connection
}