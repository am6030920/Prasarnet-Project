require("dotenv").config();

const mongoose = require("mongoose");
const MONGO_URL = process.env.MONGO_URL;

const connectDB =async() =>{
  try {
    const conection = await mongoose.connect(MONGO_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    });
    console.log("monogoDB connected succesfully",conection.connection.host)
  } catch (error) {
    console.error("error in mongodb conection: " , error);
    process.exit(1);
  }
};

module.exports = connectDB;
