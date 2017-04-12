'use strict';

import winston from 'winston';
export default {
    transports: [
      new (winston.transports.Console)(),
      new (winston.transports.File)({filename: `${__dirname}/_Logfile.log`}),
    ],
};
