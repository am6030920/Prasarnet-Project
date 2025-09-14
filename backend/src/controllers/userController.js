const UserSchema=require("../models/userModel");
const bcrypt=require("bcrypt");

const RegisterUser=async(req,res)=>{
    const {name,email,phone,password}=req.body;
    try{
        const existingUser=await UserSchema.findOne({email:email});
        if(existingUser){
            return res.status(409).json({statusCode:409,message:"User account already exists with this email"});
        };
        const encryptedPassword= bcrypt.hash(password,10);
        const newUser=new UserSchema({
            name:name,
            email:email,
            phone:phone,
            password:encryptedPassword,
        });

        const savedUser=await newUser.save()
        return res.status(200).json({statusCode:200,message:"User account created sucessfully"});
        
    }catch(error){
        console.error("error in register user",error);
        return res.status(500).json({statusCode:500,message:"Internal server error",error:error.message});

    }
    
}