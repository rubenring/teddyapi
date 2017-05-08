'use strict';

import {connection} from '../../../Database';

const query = 'SELECT * FROM goals WHERE id = ?';
const getSingleField = (val, res) => {
    let value = res[Object.keys(res)
    .filter((v)=> v == val)];
    return value;
};
export default (req, res, next) => {
    connection.query({
        sql: query,
        timeout: 10000, // 40s
        values: [
            req.params.id,
        ],
    }, (error, results, fields) => {
        if(error) {
            if(error.fatal) {
                res.status(500).json({error: `DB_ERROR - ${error.code}`});
            }
            res.status(500).json({error: error.code});
            return next(error);
        }
        if(results.length <= 0) {
            res.status(204).json({goal: results});
        }else if(results.length > 1) {
            res.status(500).json({goal: 'server error, to many results'});
        }else{
            res.status(200).json(getSingleField(req.params.field, results[0]));
        }
    });
};
