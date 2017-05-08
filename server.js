'use strict';

/* Libraries */
import express from 'express';
import bodyParser from 'body-parser';
import winston from 'winston';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from'webpack-hot-middleware';
import webpack from 'webpack';
/* Imports */
import config from './webpack.config';
import {serverconfig, loggconfig} from './Configuration';
import {connection, dbConnect} from './Database';
import {loggreq, errorHandler} from './Middleware';
import api from './Routes';
import path from 'path';
//import Childhood_radio_edit from './Assets/Music/Childhood_radio_edit.mp3';


/* Variables */
const app = express();
const port = process.env.PORT || serverconfig.PORT;
const compiler = webpack(config);

/* Middleware */
winston.configure(loggconfig);
console.log(process.env.NODE_ENV)
//app.use('/static', express.static(path.join(__dirname, '/Assets')));
if (process.env.NODE_ENV == 'development') {
  app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    stats: {color: true},
  }));
  app.use(webpackHotMiddleware(compiler, {
      log: console.log,
  }));
}
app.use(bodyParser.urlencoded({
  extended: true,
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
});
