const express=require('express');
const {airplaneControler}=require ('../../controlers');
//const {movieMiddleware}=require('../../middlewares');
const router=express.Router();
//router.post('/',movieControler.createMovie(req,res));
//router.get('/movieslist',movieControler.getMovie(req,res));
router.post('/',airplaneControler.createAirplane);
router.get('/',airplaneControler.getAirplanes);
router.get('/:id',airplaneControler.getAirplane);
router.delete('/:id',airplaneControler.destroyAirplane);//patch
router.put('/:id',airplaneControler.updateAirplane);
module.exports=router