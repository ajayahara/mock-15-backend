const express=require("express");
const { JobModel } = require("../model/job.model");
const JobRouter=express.Router();
JobRouter.get("/get",async (req,res)=>{
    if(req.query.fil==undefined){

        const jobs=await JobModel.find();
        res.send(jobs)
    }else{
        const jobs=await JobModel.find({contract:req.query.fil});
        res.send(jobs)
    }
})
JobRouter.post("/add",async (req,res)=>{
    try {
        const new_job=new JobModel(req.body);
       await new_job.save()
        res.send({"msg":"Success"})
    } catch (err) {
        res.send({err})
    }
})
JobRouter.delete("/delete/:id",async (req,res)=>{
    const _id=req.params.id
    try {
        await JobModel.findByIdAndDelete({_id:_id});
        res.send({"msg":"Job Deleted"})
    } catch (err) {
        res.send({err})
    }
})
JobRouter.patch("/patch/:id",async (req,res)=>{
    const _id=req.params.id
    try {
        await JobModel.findByIdAndUpdate({_id:_id},req.body)
        res.send({"msg":"Updated Success"})
    } catch (err) {
        res.send({err})
    }
})
module.exports={
    JobRouter
}