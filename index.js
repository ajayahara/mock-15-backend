const express=require("express");
const cors=require("cors")
require("dotenv").config()
const { connection } = require("./config/db");
const { UserRouter } = require("./router/user.router");
const { JobRouter } = require("./router/job.router");
const app=express();
app.use(express.json());
app.use(cors());
app.get("/",(req,res)=>{
    res.send({"msg":"Home Page"})
})
app.use("/user",UserRouter)
app.use("/jobs",JobRouter)
app.listen(process.env.PORT,async ()=>{
    try {
        await connection
        console.log("Connected to DB")
    } catch (err) {
        console.log(err)
    }
})