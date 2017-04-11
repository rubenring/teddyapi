'use strict'
import postMusic from "./Post";
import { getSong, getSongs } from "./Get";

const music = require('express').Router();


//Get
//fooditem.get('/', getForhandlere);
//fooditem.get('/:id', getForhandler);

//Put
//fooditem.put('/:id', putForhandlere);
//Post

music.get('/song/:id', getSong);
music.get('/songs', getSongs);

music.post('/', postMusic);


export default music;