const mongoose=require("mongoose");
const UserSchema=mongoose.Schema({
Email:String,
Password:String,
Name:String,
Type:String
})
const UserModel=mongoose.model("mock-15-users",UserSchema);
module.exports={
    UserModel
}