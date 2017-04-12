'use strict';

import winston from 'winston';
export default (req, res, next) => {
    // log each request to the console
    winston.log(req.method, req.url);
    // continue doing what we were doing and go to the route
    next();
};
