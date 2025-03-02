// Gt all jobs

import Job from "../models/Job.js"

export const getjobs  = async(req,res)=>{
    try{
        const Jobs = await Job.find({visisble:true})
        .populate({path:'companyId',select:'-password'})

        res.json({
            success:true,
            Jobs
        })
    } catch(error){
        res.json({
            success:false,
            message:error.message
        })
    }
}

//Get single job by ID

export const getJobbyID = async(req,res)=>{
        const {id} = req.params
try{
            const Job = await Job.findById(id)
            .populate({path:'companyId',select:'-password'})
            if(!Job){
                res.json({
                    success:false,
                    message: "No Job Found"
                })
            }
            res.json({
                success:true,
                Job
            })
        }catch(error){
            res.json({
                success:false,
                message:error.message
            })
        }
    
}