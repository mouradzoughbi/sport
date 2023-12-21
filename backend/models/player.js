// import mongoose module
const mongoose=require("mongoose"); 
// create player schema
const playerSchema=mongoose.Schema({
    name:String,
    number:Number,
    age:Number,
    position:String,
    team:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Team"
    }


});
// create Match Model
const player =mongoose.model("Player",playerSchema);
// export player
module.exports=player;