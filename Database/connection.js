import mysql from 'mysql';
import {dbconfig} from '../Configuration';

export default mysql.createConnection(dbconfig);