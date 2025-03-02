import Job from '../models/Job.js'
import JobApplication from '../models/JobApplication.js'


//Get User Data
export const getUserData = async(req,res)=>{
    const userId = req.auth.userId
    try{
        const user = await User.findByID(userId)
        if(!user)
        {
            return res.json({
                success:false,
                message:"User not found-"
            })
        }
        res.json({
            success:true,
            user
        })
    }catch(error){
        res.json({
            success:false,
            message:error.message
        })
    }
}

//Apply for a Job
export const applyForJob = async(req,res)=>{
    const {jobid} = req.body

    const userId = req.auth.userId

    try{
        const  isAlreadyApplied = await JobApplication.find({jobid,userId})
        if (isAlreadyApplied > 0){
            return res.json({
                success:false,
                message:"Already Applied"
            })
        }
        const jobData = await Job.findById({jobid})
        if(!jobData){
            return res.json({
                success:false,
                message:"Job not found"
            })
        }
    }catch(error){}
}

//Get user applied applications
export const getUserJobApplications=async(req,res)=>{

}

//update user resume
export const updateUserResume = async(req,res)=>{

}