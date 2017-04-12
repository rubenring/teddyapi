'use strict';

import winston from 'winston';

export default (err, req, res, next) => {
    if(!err) {
        return next();
    }
    winston.error('error', err);
    res.status(500);
    res.send('500: Internal server error');
};
