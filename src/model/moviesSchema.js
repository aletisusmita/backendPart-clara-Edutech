const mongoose=require("mongoose")

const movieSchema=new mongoose.Schema({

    name:{
        type:String,
        required:true,
        trim:true
    },
    category: {
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
        trim:true
    }
}

)

module.exports=mongoose.model("movies",movieSchema)