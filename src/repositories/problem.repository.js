const NotFoundError = require('../errors/notfound.error');
const { Problem } = require('../models')
const logger =require('../config/logger.config')

class ProblemRepository {

    async createProblem(problemData){
        try {
            const problem = await Problem.create ({
                title: problemData.title,
                description: problemData.description,
                testCases: (problemData.testCases) ? problemData.testCases: []
            })
            return problem;
        } catch(error) {
            console.log(error);
            throw error;
        }
    }
    async getAllProblems(){
        try {
            
            const problems = await Problem.find ({});
            return problems;
        } catch(error) {
            console.log(error);
            throw error;
        }
    }
    async getProblem(id){
        try {
            const problem = await Problem.findById (id);
            if (!problem){

                logger.error(`Problem with id: ${id} not found in db`);
                throw new NotFoundError("Problem", id)
            }
            return problem;
        } catch(error) {
            console.log(error);
            throw error;
        }
    }
    async deleteProblem (id){
        try{
            const deletedProblem = await Problem.findByIdAndDelete(id);
            if (!deletedProblem){

                logger.error(`Problem with id: ${id} not found in db`);
                throw new NotFoundError("problem", id);
            }
            return deletedProblem;
        }catch(error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = ProblemRepository;