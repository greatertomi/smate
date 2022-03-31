import {body} from "express-validator";

export const validateIssue = [
  body('title', 'Title is required').notEmpty(),
  body('description', 'Description is required').notEmpty(),
];