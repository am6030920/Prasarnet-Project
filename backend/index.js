const axios = require("axios");
const express = require("express");
const body_parser = require("body-parser");
const http = require("http");
const morgan = require ("morgan");
const cors = require ("cors");
const connectDB = require("./src/db/config");

require("dotenv").config();
connectDB();


const PORT = process.env.PORT;
const BASE_URL = process.env.BASE_URL;
const BASE_API = process.env.BASE_API;
const BASE_API_URL= process.env.BASE_API_URL;
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN;
const ALLOWED_METHODS  = process.env.ALLOWED_METHODS;
const ALLOWED_HEADERS  = process.env.ALLOWED_HEADERS;

const app = express();

app.use(cors({
    origin : ALLOWED_ORIGIN,
    methods : ALLOWED_METHODS,
    allowedHeaders : ALLOWED_HEADERS
}));

app.use (express.json());
app.use (morgan('dev'));
const server = http.createServer(app);
server.listen(PORT,()=>console.log(`this project is running on port : ${PORT}\n and the url is : ${BASE_URL}`))