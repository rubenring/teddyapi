'use strict'

/* Libraries */
import express from 'express';
import bodyParser from 'body-parser';
import winston from 'winston';

/* Imports */
import { serverconfig } from './Configuration';
import { connection, dbConnect } from './Database';
import { loggreq, errorHandler } from './Middleware';
import api from './Routes';

/* Variables */
const app = express();
let port = process.env.PORT || serverconfig.PORT;


/* Middleware */
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(loggreq);
app.use('/api', api);
app.use(errorHandler);


/* Running app */
app.listen(port, ()=>{
    winston.info(`Listening to port ${port}`);
    /* Start SQL Connection */
    connection.connect(dbConnect);
})