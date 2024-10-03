const mongoose = require ('mongoose');
const logger = require('./logger.config');
const { ATLAS_DB_URL, NODE_ENV, PORT } = require('./server.config');

async function connectToDB (){
    try{
        if (NODE_ENV == 'development'){
            await mongoose.connect(ATLAS_DB_URL);
        }
    } catch (error){
        logger.error("Problem connecting to database");
        throw error;
    }
}

module.exports = connectToDB;