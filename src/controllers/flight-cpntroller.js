const {flightService}=require('../services');
const StatusCode=require('http-status-codes');
const {SuccessResponse,ErrorResponse}=require('../utils/common');

/**
 * POST : /flights
 * req-body: {flightNumber:'AIC217',airplaneId:'33',departureAirportId:'HYD',arrivalAirportId:'DEL'
 * arrivalTime:'2023-07-26 4:50:00',departureTime:'2023-07-26 1:30:00',price:'6000',boardingGate:'20A',totalSeats:'150'
 *  
 * }
 */

async function createFlight(req,res){
       try{
              console.log(req.body.arrivalTime); 
             const flightInfo=await flightService.createFlight({
                flightNumber:req.body.flightNumber,
                airplaneId:req.body.airplaneId,
                departureAirportId:req.body. departureAirportId,
                arrivalAirportId:req.body.arrivalAirportId,
                arrivalTime:req.body.arrivalTime,
                departureTime:req.body.departureTime,
                price:req.body.price,
                boardingGate:req.body.boardingGate,
                totalSeats:req.body.totalSeats

             });
             SuccessResponse.data=flightInfo;
             return res.status(StatusCode.CREATED).json(SuccessResponse);
       }
       catch(error){
              
              ErrorResponse.error=error;
              return res.status(error.statusCode).json(ErrorResponse);
       }
             
            
}

module.exports={
    createFlight,
}