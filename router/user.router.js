const express=require("express");
const UserRouter=express.Router();
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const { UserModel } = require("../model/user.model");
UserRouter.get("/",async (req,res)=>{
    const users=await UserModel.find();
    res.send(users)
})
UserRouter.post("/login",async (req,res)=>{
    const {Email,Password}=req.body;
    try {
    const users=await UserModel.find({Email:Email});
    const flag= bcrypt.compareSync(Password,users[0].Password);
        if(flag==true){
            const token=jwt.sign({user_id:users[0]._id},"mock-14");
            res.send({"msg":"Login Successfull",token,Type:users[0].Type})
        }else{
            res.send({"err":"Invalid Credential"})
        }
    } catch (err) {
        res.send({err})
    }
})
UserRouter.post("/register",async (req,res)=>{
    const {Email,Password,Name,Type}=req.body;
    try {
    const users=await UserModel.find({Email:Email});
    if(users.length>0){
        res.send({"msg":"Already Register.Please Login"})
    }else{
        const hash_pass=await bcrypt.hash(Password,5);
        const new_user=new UserModel({Email:Email,Password:hash_pass,Name:Name,Type:Type});
        await new_user.save()
        res.send({"msg":"Registered"})
    }
    } catch (err) {
        res.send({err})
    }
})
module.exports={
    UserRouter
}