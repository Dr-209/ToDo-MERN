import axios from 'axios'

const baseUrl = "http://localhost:5000"

// +++++++  Retrieve all tasks  ++++
const getAllToDo = (setToDo) => {
    axios
        .get(baseUrl)
        .then(({ data }) => {
            console.log('data --->', data);
            setToDo(data)
        })
}

// ++++++++ Add a new task ++++++
const addToDo = (text, setText, setToDo) => {
    axios
        .post(`${baseUrl}/save`, { text })
        .then((data) => {
            console.log(data);
            setText("")
            getAllToDo(setToDo)
        })
        .catch((err) => console.log(err))
}

// +++++  Update a task’s details +++++
const updateToDo = (toDoId, text, setToDo, setText, setIsUpdating) => {
    axios
        .post(`${baseUrl}/update`, { _id: toDoId, text })
        .then((data) => {
            setText("")
            setIsUpdating(false)
            getAllToDo(setToDo)
        })
        .catch((err) => console.log(err))
}

// ++++++ Delete Task+++++
const deleteToDo = (_id, setToDo) => {
    axios
        .post(`${baseUrl}/delete`, { _id })
        .then((data) => {
            console.log(data)
            getAllToDo(setToDo)
        })
        .catch((err) => console.log(err))
}

// ++++++ Task status +++++
const toggleCompleteToDo = (_id, isCompleted, setToDo) => {
    axios
        .post(`${baseUrl}/toggleComplete`, { _id, isCompleted })
        .then(() => {
            getAllToDo(setToDo);
        })
        .catch((err) => console.log(err));
}

export { getAllToDo, addToDo, updateToDo, deleteToDo, toggleCompleteToDo }