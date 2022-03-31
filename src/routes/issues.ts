import { Router } from "express";
import IssueController from "../controller/IssueController";
import validationChecker from "../middleware/validators";
import { validateIssue } from "../middleware/validators/requestValidator";

const router = Router();

router.get("/", IssueController.fetchIssues);

router.post(
  "/",
  [...validateIssue, validationChecker],
  IssueController.createIssues
);

router.put("/:id", IssueController.updateIssue);

router.delete("/:id", IssueController.deleteIssue);

export default router;
