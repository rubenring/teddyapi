'use strict';

import {connection} from '../../../Database';

const query = 'SELECT * FROM goals WHERE id = ?';

export default (req, res, next) => {
    connection.query({
        sql: query,
        timeout: 10000, // 40s
        values: [req.params.id],
    }, (error, results, fields) => {
        // error will be an Error if one occurred during the query
        // results will contain the results of the query
        // fields will contain information
        // about the returned results fields (if any)
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
            res.status(200).json({goal: results});
        }
    });
};
