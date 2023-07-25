const express=require('express');
const {CityController}=require ('../../controllers');
//const {CityMiddlewares}=require('../../middlewares');
const router=express.Router();
//router.post('/',movieControler.createMovie(req,res));
//router.get('/movieslist',movieControler.getMovie(req,res));
router.post('/',CityController.createCity);
router.get('/',CityController.getCities);
router.get('/:id',CityController.getCity);
router.delete('/:id',CityController.destroyCity);//patch
router.put('/:id',CityController.updateCity);
module.exports=router