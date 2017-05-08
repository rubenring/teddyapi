'use strict';

// import postMusic from "./Post";
import {getGoals, getGoal, getGoalValue} from './Get';
import express from 'express';
const goals = express.Router();

/* GET */
goals.get('/', (req, res, next)=>{
    res.status(200)
    .json({message: '/goals'});
});
goals.get('/goals', getGoals);
goals.get('/goal/:id', getGoal);
goals.get('/goal/:field/:id', getGoalValue);

export default goals;
