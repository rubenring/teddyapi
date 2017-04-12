'use strict';

import express from 'express';
import music from './Music';
import members from './Members';
import notFound from './NotFound';
const _router = express.Router();

_router.get('/', (req, res)=>{
    res.status(200).json({message: 'API for teddy and the lovegang, checkout https://github.com/rubenring/teddy_api.git for more info'});
});
_router.use('/music', music);
_router.use('/members', members);
_router.use('*', notFound);

export default _router;
