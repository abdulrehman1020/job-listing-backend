import express from 'express';
import * as jobController from '../controllers/job.controller';

const router = express.Router();

router.post('/', jobController.createJob);
router.get('/', jobController.getAllJobs);
router.get('/:id', jobController.getJobById);

export default router;
