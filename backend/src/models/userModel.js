const mongoose=require("mongoose");
const{ Schema}=mongoose;
const UserSchema = new Schema({
    name:{type:String,require:true},
    email:{type:String,require:true,unique:true,index:true},
    phone:{type:String,},
    password:{type:String,require:true}

},{timestamps:true});

module.exports=mongoose.model("Users",UserSchema)
