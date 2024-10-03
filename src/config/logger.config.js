const winston = require('winston');
const { LOG_DB_URL } = require('./server.config');
require ('winston-mongodb');

const allowedTransport = [];

// The below transport configuration enables logging on the console
allowedTransport.push(new winston.transports.Console({
    //console specific formatting
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss',

        }),
        winston.format.printf((log)=>`${log.timestamp} [${log.level}]: ${log.message}`)
    )
}));

// The below transport configuration enables logging on the mongoDb database
allowedTransport.push(new winston.transports.MongoDB({
    level:'error',//only want to log error in mongodb
    db: LOG_DB_URL,
    collection: 'logs',
    options: { useUnifiedTopology: true },// to fix warning 
}));

// The below transport configuration enables logging on the mongoDb database
allowedTransport.push(new winston.transports.File({
    filename: `app.log`
}));

const logger = winston.createLogger({
    format: winston.format.combine(

        //default formatting
        //First argument to the combine method is defining how we want the timestamp to come up
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss',

        }),
         //Second argument to the combine method which define what exactly is going to be printed in log
        winston.format.printf((log)=>`${log.timestamp} [${log.level.toUpperCase()}]: ${log.message}`)
    ),
    transports: allowedTransport
})

module.exports = logger;