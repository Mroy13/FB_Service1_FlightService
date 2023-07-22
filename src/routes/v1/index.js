const express=require('express');
const { infoControler} = require('../../controlers');
const airplaneRoutes=require('./airplane-routes');
const router=express.Router();
router.use('/airplane',airplaneRoutes);
router.get('/info',infoControler.info);
module.exports=router;
