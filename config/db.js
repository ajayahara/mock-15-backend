const mongoose=require("mongoose");
require("dotenv").config();
const connection=mongoose.connect(`mongodb+srv://ajaya:${process.env.PASSWORD}@cluster0.tygvghs.mongodb.net/mock15?retryWrites=true&w=majority`)
module.exports={
    connection
}