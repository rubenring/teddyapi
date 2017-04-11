import winston from 'winston';

export default (err, req, res, next) => {
    if(err){
        winston.error(err);
    }
    next(); 
};