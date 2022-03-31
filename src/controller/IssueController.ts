import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import {Issue} from "../entity/Issue";

class IssueController {
  static fetchIssues = async (req: Request, res: Response) => {
    try {
      const issueRepository = getRepository(Issue);
      const issues = await issueRepository.find();
      res.send({message: 'Issues live'});
    } catch (err) {
      console.error(err);
      return res
        .status(500)
        .send({ message: 'Server Error' });
    }
  };
}

export default IssueController;