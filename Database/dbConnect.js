'use strict';

import connection from './connection.js';
import winston from 'winston';

export default (err) => {
    if (err) {
        winston.error(`error connecting: ${err.stack}`);
        return;
    }
    winston.info(`connected as id ${connection.threadId} on port ${connection.config.port}`);
};

