const StatusCode=require('http-status-codes');
const {airplaneRepository}=require('../repositories');
const Apperror=require('../utils/error/App-error');

const AirplaneRepository=new airplaneRepository();
async function createAirplane(data){
   try{
        const airplane=await AirplaneRepository.create(data);
        return airplane;
   }
   catch(error){
        console.log(error);
         if(error.name=='SequelizeValidationError'){
            const explanation=[];
            error.errors.forEach(err => {
               explanation.push(err.message);
            });
           
            throw new Apperror(explanation,StatusCode.BAD_REQUEST);
         }
         else{
         throw new Apperror("request not resolved due to server side probelem",StatusCode.INTERNAL_SERVER_ERROR);
         }
   }
}
async function getAirplanes(data){
   try{
        const Airplanes=await AirplaneRepository.getAll(data);
        return Airplanes;
   }
   catch(error){
        
      throw new Apperror("request not resolved due to server side probelem",StatusCode.INTERNAL_SERVER_ERROR);
         
   }
}

async function getAirplane(id) {
   try {
       const airplane= await AirplaneRepository.get(id);
       return airplane;
   } catch(error) {
       if(error.statusCode == StatusCode.NOT_FOUND) {
           throw new Apperror(error.message, error.statusCode);
       }
       throw new Apperror('Cannot fetch data of all the movies', StatusCode.INTERNAL_SERVER_ERROR);
   }
}
async function destroyAirplane(id) {
   try {
       const airplane= await AirplaneRepository.destroy(id);
       return airplane;
   } catch(error) {
       if(error.statusCode == StatusCode.NOT_FOUND) {
           throw new Apperror(error.message, error.statusCode);
       }
       throw new Apperror('Cannot fetch data of all the movies', StatusCode.INTERNAL_SERVER_ERROR);
   }
}
async function updateAirplane(id,data) {
   try {
       const airplane= await AirplaneRepository.update(id,data);
       return airplane;
   } catch(error) {
       if(error.statusCode == StatusCode.NOT_FOUND) {
           throw new Apperror(error.message, error.statusCode);
       }
       throw new Apperror('Cannot fetch data of all the movies', StatusCode.INTERNAL_SERVER_ERROR);
   }
}

module.exports={
          createAirplane,
          getAirplanes,
          getAirplane,
          destroyAirplane,
          updateAirplane
}