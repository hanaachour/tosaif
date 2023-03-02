const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const dotenv=require("dotenv");

mongoose.set("strictQuery",false);

const app=express();
dotenv.config();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.DBURL,()=>{
console.log("DB is connected")
})

app.listen(process.env.URL,()=>{
    console.log(`Server is connected on${process.env.URL}` )
})