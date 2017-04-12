'use strict';

// import postMusic from "./Post";
import {getMember, getMembers} from './Get';
import express from 'express';
const member = express.Router();

// Get
// fooditem.get('/', getForhandlere);
// fooditem.get('/:id', getForhandler);

// Put
// fooditem.put('/:id', putForhandlere);
// Post
member.get('/', (req, res, next)=>{
    res.status(200)
    .json({message: '/members'});
});
member.get('/member/:id', getMember);
member.get('/members', getMembers);

// music.post('/', postMusic);


export default member;
