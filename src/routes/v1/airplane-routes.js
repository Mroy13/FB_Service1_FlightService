const express=require('express');
const {AirplaneControler}=require ('../../controlers');
const {AirplaneMiddlewares}=require('../../middlewares');
const router=express.Router();
//router.post('/',movieControler.createMovie(req,res));
//router.get('/movieslist',movieControler.getMovie(req,res));
router.post('/',AirplaneMiddlewares.validateCreateRequest,AirplaneControler.createAirplane);
router.get('/',AirplaneControler.getAirplanes);
router.get('/:id',AirplaneControler.getAirplane);
router.delete('/:id',AirplaneControler.destroyAirplane);//patch
router.put('/:id',AirplaneControler.updateAirplane);
module.exports=router