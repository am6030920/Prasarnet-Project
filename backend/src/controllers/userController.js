const UserSchema=require("../models/userModel");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const JWT_EXPRIER = process.env.JWT_EXPRIER;
const JWT_SECRET  = process.env.JWT_SECRET ;

const registerUser=async(req,res)=>{
    const {name,email,phone,password}=req.body;
    console.log(req.body);
    try{
        const existingUser=await UserSchema.findOne({email:email});
        if(existingUser){
            return res.status(409).json({statusCode:409,message:"User account already exists with this email"});
        };
        const encryptedPassword=await bcrypt.hash(password,10);
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
    
};
const logIn =async (req,res)=>{
  const {email,password}=req.body;
    try{
        const existingUser=await UserSchema.findOne({email:email})
        if(!existingUser){
            return res.status(400).json({statusCode:400,message:"user account not found"});
        };
        const isMatchedPassword=await bcrypt.compare(password,existingUser.password);
        if(!isMatchedPassword){
            return res.status(400).json({statusCode:400,message:"invalid password"});
        };
        existingUser.password=undefined;
        const token = await jwt.sign({data:existingUser},JWT_SECRET,{expiresIn:JWT_EXPRIER});
        return res.status(200).json({statusCode:200,message:"logIn sucessfull",token:`Bearer ${token}`});
    }catch(error){
        console.error("error in logIn user",error);
        return res.status(500).json({statusCode:500,message:"enternal server error",error:error,message});
    }
}
module.exports={registerUser,logIn};