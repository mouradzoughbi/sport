const mongoose=require("mongoose");
stadiumSchema=mongoose.Schema({
country:String,
name:String,
capacity:Number,
});
const stadium=mongoose.model("Stadium",stadiumSchema);
module.exports=stadium;