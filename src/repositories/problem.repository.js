const NotFoundError = require('../errors/notfound.error');
const { Problem } = require('../models')
const logger =require('../config/logger.config')

class ProblemRepository {

    async createProblem(problemData){
        try {
            const problem = await Problem.create ({
                title: problemData.title,
                description: problemData.description,
                codeStubs:problemData.codeStubs,
                testCases: (problemData.testCases) ? problemData.testCases: []
            })
            logger.info(`Add problem: ${ problemData } into db`);
            return problem;
        } catch(error) {
            logger.error(`Error inserting problem: ${problemData} into db`);
            throw error;
        }
    }
    async getAllProblems(){
        try {
            
            const problems = await Problem.find ({});
            return problems;
        } catch(error) {
            logger.error(`Error getting all problems from db`);
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
            logger.error(`Problem getting the problem with ${id} from db`);
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
            logger.error(`Problem deleting the problem with id:${id} from db`);
            throw error;
        }
    }
}

module.exports = ProblemRepository;