const express = require ('express');

const { ProblemController } = require ('../../controllers');
const problemRouter = require('./problems.route');

const v1Router = express.Router();

v1Router.use('/problems', problemRouter);

module.exports = v1Router