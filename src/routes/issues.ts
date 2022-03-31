import { Router } from 'express';
import IssueController from "../controller/IssueController";

const router = Router();

router.get('/', IssueController.fetchIssues);

router.post('/', IssueController.createIssues);

router.put('/:id', IssueController.updateIssue);

router.delete('/:id', IssueController.deleteIssue);

export default router;
