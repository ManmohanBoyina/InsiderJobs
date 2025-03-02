import Job from '../models/Job.js'
import JobApplication from '../models/JobApplication.js'
import {v2 as cloudinary} from 'cloudinary'

//Get User Data
export const getUserData = async(req,res)=>{
    const userId = req.auth.userId
    try{
        const user = await User.findByID(userId)
        if(!user)
        {
            return res.json({
                success:false,
                message:"User not found"
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
        await JobApplication.create({
            companyId: jobData.companyId,
            userId,
            date: Date.now()
        })
        res.json({
            success: true,
            message: "Aplied Successfully"
        })
    }catch(error){
        res.json({
            succss: false,
            message:error.message
        })
    }
}

//Get user applied applications
export const getUserJobApplications=async(req,res)=>{

    try{

        const userId= req.auth.userId
        const application = await  JobApplication.find({userId})
        .populate('companyId','name email image')
        .populate('jobId','title description location category level salary')
        .exec()

        if(!application){
            res.json({
                success: true,
                message: "No Appplications found"
            })
        }
        res.json({
            success:true,
            application
        })
    }catch(error){
        res.json({
            success: false,
            message: error.message
        })
    }
}

//update user resume
export const updateUserResume = async(req,res)=>{
try{
    const userId = req.auth.userId
    const resumeFile = req.resumeFile
    const userData = await User.findByID(userId)
    if(resumeFile){
        const resumeUpload = await cloudinary.uploader.upload(resumeFile.path)
        userData.resume = resumeUpload.secure_url
    }
    await userData.save()
    return res.json({
        success: true,
        messasge:"Resume Updated"
    })
}catch(error){
    res.json({
        success: false,
        message: error.message
    })
}
}