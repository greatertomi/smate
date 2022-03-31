import { Router } from 'express';
import IssueController from "../controller/IssueController";

const router = Router();

router.get('/', IssueController.fetchIssues);

export default router;
