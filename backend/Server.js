const express=require('express')
const mongoose=require('mongoose')
const cors =require("cors")

const routes=require('./routes/toDoRoute.js')

require("dotenv").config()

const app=express()
app.use(express.json())
app.use(cors())
const PORT=process.env.PORT || 5000

mongoose.connect("mongodb://localhost:27017/todoApp") 
.then(()=>console.log(`MongoDB connectd..`))
.catch((err)=>console.log(err))

app.use(routes)

app.listen(PORT,()=>console.log(`Listing on:${PORT}`))