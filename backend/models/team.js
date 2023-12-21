// import mongoose module
const mongoose=require("mongoose"); 
// create team schema
const teamSchema=mongoose.Schema({
    name:String,
    foundation:Number,
    studuim:String,
    owner:String,
    players: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Player'
        }
        ]
        


});
// create Team Model
const team =mongoose.model("Team",teamSchema);
// export team
module.exports=team;