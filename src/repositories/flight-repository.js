const {Flight}=require('../models');
const crudRepository=require('./crud-repository');
class flightRepository extends crudRepository{
    constructor(){
        super(Flight);
    }
}

module.exports=flightRepository;