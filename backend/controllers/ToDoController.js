const ToDoModel = require('../models/ToDoModel')

// Get all task
module.exports.getToDo = async (req, res) => {
    const toDo = await ToDoModel.find()
    res.send(toDo)
}

// Add task
module.exports.saveToDo = async (req, res) => {
    const { text } = req.body
    ToDoModel
        .create({ text })
        .then((data) => {
            console.log("Add Successfully...");
            // console.log(data);
            res.send(data)
        })
}

// update task
module.exports.updateToDo = async (req, res) => {
    const { _id, text } = req.body
    ToDoModel
        .findByIdAndUpdate(_id, { text })
        .then((data) => {
            res.send("Updated Suceessfully..")
            // console.log(data);
        })
        .catch((err) => console.log(err))
}

//Delete task
module.exports.deleteToDo = async (req, res) => {
    const { _id } = req.body
    ToDoModel
        .findByIdAndDelete(_id)
        .then((data) => {
            res.send("Delete Successfully..")
            console.log(data);
        })
        .catch((err) => console.log(err))
}

//Handle task status
module.exports.toggleCompleteToDo=async(req,res)=>{
    const {_id,isCompleted}=req.body;
    ToDoModel
    .findByIdAndUpdate(_id,{isCompleted},{new:true})
    .then((data)=>{
        res.send("Task completion status update.")
        console.log(data);
    })
    .catch((err)=>console.log(err));

}