'use strict';
import postMusic from './Post';
import {getSong, getSongs, listen} from './Get';
import express from 'express';

const music = express.Router();

music.get('/', (req, res, next) => {
    res.status(200)
    .json({message: '/Music'});
});
music.get('/song/:id', getSong);
music.get('/songs', getSongs);
music.get('/listen/:id', listen);

music.post('/', postMusic);
export default music;
