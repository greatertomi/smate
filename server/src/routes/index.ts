import { Router } from 'express';
import issues from "./issues";

const index = Router();

index.use('/issues', issues);

export default index;
