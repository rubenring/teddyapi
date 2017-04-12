'use strict';
import bodyParser from 'body-parser';

export default (req, res, next) => {
    res.status(200).json({message: 'posted music!'});
};
