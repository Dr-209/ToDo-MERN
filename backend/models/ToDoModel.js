const mongoose=require('mongoose')

const todoSchema= new mongoose.Schema({
    text:{
        type:String,
        require:true
    },
    isCompleted:{
   type: Boolean,
   default:false
    }
})
module.exports=mongoose.model('ToDo',todoSchema)