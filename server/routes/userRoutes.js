import express from "express"
import { applyForJob, getUserData, getUserJobApplications, updateUserResume } from "../controllers/userCoontroller.js"
import upload from '../config/multer.js'

const router=express.Router()

//Get user data
router.get('/user',getUserData)

//Apply for a job
router.post('/apply',applyForJob)

//Get Applied Jobs Data
router.get('/applications',getUserJobApplications)

//Update user Profile
router.post('/update-resume',upload.single('resume') ,updateUserResume)

export default router;