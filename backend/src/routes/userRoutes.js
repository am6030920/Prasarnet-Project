const express= require ("express");
const usercontroller= require ("../controllers/userController");
const userRoutes=express.Router();

userRoutes.post("/register",usercontroller.registerUser);
userRoutes.post("/login",usercontroller.logIn);


module.exports=userRoutes;