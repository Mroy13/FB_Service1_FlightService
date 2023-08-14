const express=require('express');
const {AirportController}=require ('../../controllers');
//const {AirportMiddlewares}=require('../../middlewares');
const router=express.Router();

router.post('/',AirportController.createAirport);
router.get('/',AirportController.getAirports);
router.get('/:id',AirportController.getAirport);
router.delete('/:id',AirportController.destroyAirport);
router.put('/:id',AirportController.updateAirport);
module.exports=router