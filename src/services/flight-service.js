const StatusCode = require('http-status-codes');
const { flightRepository } = require('../repositories');
const Apperror = require('../utils/error/App-error');

const FlightRepository = new flightRepository();
async function createFlight(data) {
    try {
        const flight = await FlightRepository.create(data);
        return flight;
    }
    //client side errorHandling
    catch (error) {
        console.log(error);
        if (error.name == 'SequelizeValidationError') {
            const explanation = [];
            error.errors.forEach(err => {
                explanation.push(err.message);
            });

            throw new Apperror(explanation, StatusCode.BAD_REQUEST);
        }
        //server side error handling
        else {
            throw new Apperror("request not resolved due to server side probelem", StatusCode.INTERNAL_SERVER_ERROR);
        }
    }
}
module.exports = {
    createFlight,

}