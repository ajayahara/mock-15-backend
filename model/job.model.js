const mongoose = require("mongoose");
const JobSchema = mongoose.Schema({
    company_name:String, location:String, contract:String, position:String
})
const JobModel = mongoose.model("jobs", JobSchema);
module.exports = {
    JobModel
}