import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    userName:{
        type: String,
        required: true
    },
  
    companyName:{
        type : String,
        required : true

    },
    email:{
        type: String
    },
    status:{
        type: String,
        enum: ["Interested","Follow Up","Closed"],
        default: "Interested"
    }
},{timestamps:true})

export default mongoose.model('Contact' , contactSchema)