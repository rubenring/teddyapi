'use strict';

import {connection} from '../../../Database';
'use strict';

import {fs} from 'fs';
import path from 'path';


export default (req, res, next) => {
    let fileId = req.params.id;
    let file = `${__dirname}Assets/Music/${fileId}`;
    fs.exists(file, (exists)=> {
        if(exists) {
            let rstream = fs.createReadStream(file);
            rstream.pipe(res);
        }else{
            res.status(404);
        }
    });
};
