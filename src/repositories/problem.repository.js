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
            logger.info(`Added problem: ${ problemData } into db`);
            return problem;
        } catch(error) {
            logger.error(`Error inserting problem: ${problemData} into db`);
            throw error;
        }
    }
    async getAllProblems(){
        try {
            const problems = await Problem.find ({});
            logger.info(`Fetch all problem from db ${problems}`);
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
            logger.info(`Fetch problem with id ${id} from db`);
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
            logger.info(`Deleted problem with id ${id} from db`);
            return deletedProblem;
        }catch(error) {
            logger.error(`Problem deleting the problem with id:${id} from db`);
            throw error;
        }
    }
    async updateProblem (id, problemData){
        try{
            console.log(id, problemData);
            const updatedProblem = await Problem.findOneAndUpdate({_id:id}, problemData);
            if (!updatedProblem){

                logger.error(`Problem with id: ${_id} not found in db`);
                throw new NotFoundError("problem", id);
            }
            logger.info(`Updated problem with id ${id} from db`);
            return updatedProblem;
        }catch(error) {
            logger.error(`Problem updating the problem with id:${id} from db`);
            throw error;
        }
    }
}

module.exports = ProblemRepository;