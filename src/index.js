const express = require ('express');
const bodyParser = require ('body-parser');

const { PORT } = require ('./config/server.config');
const apiRouter =require ('./routes');
const errorHandler = require('./utils/errorHandler');
const connectToDB = require('./config/db.config');
const { StatusCodes } = require('http-status-codes');

const app = express ();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());


//If any request comes and route starts with /api, we map it to apiRouter 
app.use('/api', apiRouter);

app.get ('/ping', (req, res)=>{
    return res.status(StatusCodes.OK).json ({message: 'Problem Service is alive'});
})

// There is default express error middleware https://expressjs.com/en/guide/error-handling.html
//,but we have added our own ....
// last middleware if any error comes
app.use(errorHandler);

app.listen (PORT, async ()=>{
    console.log (`server started at PORT ${PORT}`);
    await connectToDB ();
});