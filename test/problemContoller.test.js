const { StatusCodes } = require("http-status-codes");
const { getProblems } = require("../src/controllers/problem.controller");
const { ProblemService } = require("../src/services");

jest.mock("../src/services");

jest.mock('../src/config/logger.config', () => ({
    info: jest.fn(),
    error: jest.fn(),
    warn: jest.fn(),
}));// This is to ensure that there is no connection to mongodb log db when we are running npm test

describe("test",()=>{
    beforeEach(()=>{
        req = {};
        res = {
            status:jest.fn(()=>res),
            json:jest.fn()
        };
        next=jest.fn();
    }),
    
    test("should get all problems", async () => {
        const problems = [];
        ProblemService.prototype.getAllProblems.mockResolvedValue(problems);
    
        await getProblems(req, res, next);
    
        expect(res.status).toHaveBeenCalledWith(StatusCodes.OK);
        expect(ProblemService.prototype.getAllProblems).toHaveBeenCalledTimes(1);
        expect(next).not.toHaveBeenCalled();
    });
    
    
})

