import express from 'express'
import { getJobbyID, getjobs } from '../controllers/jobController.js';

const router = express.Router()

//Route to get all Jobs
router.get('/',getjobs)


//Route to get a single Job by ID
router.get('/:id',getJobbyID)


export default router;