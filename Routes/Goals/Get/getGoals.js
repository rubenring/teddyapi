'use strict';

import {connection} from '../../../Database';

export default (req, res, next) => {
    connection.query('SELECT * FROM `goals`', (error, results, fields) => {
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
        res.status(200).json({goals: results});
    });
};
