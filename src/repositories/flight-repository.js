const { Sequelize } = require('sequelize');
const { Flight, Airplane, Airport } = require('../models');
const crudRepository = require('./crud-repository');
class flightRepository extends crudRepository {
    constructor() {
        super(Flight);
    }
    async getAllflights(filter, sortFilter) {
        console.log(filter);
        const response = await Flight.findAll({
            where: filter,
            order: sortFilter,
            include: [{
                model: Airplane,
                as:'airplaneDetails',
                required: true,
            },

              {
                  model: Airport,
                  as: 'arrivalAirport',
                  required: true,
                  on: {
                      col1: Sequelize.where(Sequelize.col("Flight.arrivalAirportId"), "=", Sequelize.col("arrivalAirport.code"))
                  }
              },

             {
                 model: Airport,
                 as:'departureAirport',
                 required: true,
                 on: {
                     col1: Sequelize.where(Sequelize.col("Flight.departureAirportId"), "=", Sequelize.col("departureAirport.code"))
                 }
             },

            ]
        });
        return response;
    }

}

module.exports = flightRepository;