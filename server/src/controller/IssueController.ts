import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import {Issue} from "../entity/Issue";

class IssueController {
  static fetchIssues = async (req: Request, res: Response) => {
    try {
      const issueRepository = getRepository(Issue);
      const issues = await issueRepository.find();
      res.send(issues);
    } catch (err) {
      console.error(err);
      return res
        .status(500)
        .send({ message: 'Server Error' });
    }
  };

  static createIssues = async (req: Request, res: Response) => {
    const {title, description} = req.body;
    console.log('Issue Created', {title, description});
    try {
      const issueRepository = getRepository(Issue);
      await issueRepository.save({title, description});
      res.send({message: 'New issue created'});
    } catch (err) {
      console.error(err);
      return res
        .status(500)
        .send({ message: 'Server Error' });
    }
  }

  static updateIssue = async (req: Request, res: Response) => {
    const {title, description} = req.body;
    const id = req.params.id;
    const data = {...(title && {title}), ...(description && {description})}
    console.log('Issue Updated', {id, ...data});
    try {
      const issueRepository = getRepository(Issue);
      await issueRepository.update(id,{...data});
      res.send({message: 'Issue Updated'});
    } catch (err) {
      console.error(err);
      return res
        .status(500)
        .send({ message: 'Server Error' });
    }
  }

  static deleteIssue = async (req: Request, res: Response) => {
    const id = req.params.id;
    console.log('Issue Deleted', {id});
    try {
      const issueRepository = getRepository(Issue);
      await issueRepository.delete(id);
      res.send({message: 'Issue Deleted'});
    } catch (err) {
      console.error(err);
      return res
        .status(500)
        .send({ message: 'Server Error' });
    }
  }
}

export default IssueController;