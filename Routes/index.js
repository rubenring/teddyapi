import { Router } from 'express';
import music from './Music';
import notFound from './NotFound'
let _router = Router();

_router.get('/', (req, res)=>{
    res.status(200).json({ message: 'API for teddy and the lovegang, checkout https://github.com/rubenring/teddy_api.git for more info' });
})
_router.use('/music', music);
_router.use('*', notFound);
export default _router;