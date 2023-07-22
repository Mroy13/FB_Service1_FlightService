const {Airplane}=require('../models');
const crudRepository=require('./crud-repository');
class movieRepository extends crudRepository{
    constructor(){
        super(Airplane);
    }
}

module.exports=movieRepository;