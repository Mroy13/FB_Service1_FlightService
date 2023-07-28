const { Flight } = require('../models');
const crudRepository = require('./crud-repository');
class flightRepository extends crudRepository {
    constructor() {
        super(Flight);
    }
    async getAllflights(filter,sortFilter) {
           console.log(filter);
            const response = await Flight.findAll({
                where: filter,
                order: sortFilter,
            });
            return response; 
    }

}

module.exports = flightRepository;