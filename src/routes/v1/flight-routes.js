const express=require('express');
const {FlightController}=require ('../../controllers');
const {FlightMiddlewares}=require('../../middlewares');
const router=express.Router();
//router.post('/',movieControler.createMovie(req,res));
//router.get('/movieslist',movieControler.getMovie(req,res));
router.post('/',FlightMiddlewares.validateCreateRequest,FlightController.createFlight);
//router.get('/',AirplaneController.getAirplanes);
//router.get('/:id',AirplaneController.getAirplane);
//router.delete('/:id',AirplaneController.destroyAirplane);//patch
//router.put('/:id',AirplaneController.updateAirplane);
module.exports=router