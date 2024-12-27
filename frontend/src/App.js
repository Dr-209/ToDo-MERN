import { useEffect, useState } from "react";
import ToDo from "./components/ToDo";
import { addToDo, getAllToDo, updateToDo, deleteToDo, toggleCompleteToDo } from "./utils/HandleApi";
import { MdSearch } from 'react-icons/md';

function App() {
  const [toDo, setToDo] = useState([])
  const [text, setText] = useState("")
  const [isUpdating, setIsUpdating] = useState(false)
  const [toDoId, setToDoId] = useState("")
  const [search, setSearch] = useState("");

  // For Display Tasks
  useEffect(() => {
    getAllToDo(setToDo)
  }, [])

  // for update task 
  const updateMode = (_id, text) => {
    setIsUpdating(true)
    setText(text)
    setToDoId(_id)
  }

  // For Search task
  const filteredTodos = toDo.filter((todo) =>
    todo.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://png.pngtree.com/thumb_back/fh260/background/20231008/pngtree-d-rendering-of-a-laptop-computer-mockup-on-a-blank-screen-image_13599938.png')",
      }}>

      <div className=" max-w-[600px] m-auto p-6 rounded-lg shadow-md bg-gray-300">
        <h1 className="text-2xl mt-4 font-bold text-center mb-4 text-orange-900">ToDo App</h1>
        <div className="flex items-center mb-4 gap-2">

          <input
            type="text" name="" placeholder="Add Todo.."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className=" px-4 py-2 w-full  border border-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          />

          {/* Button text accroding to update or add state */}
          <div
            className={`ml-2 px-4 py-2 cursor-pointer bg-blue-500 text-white rounded-md hover:bg-blue-600`}
            onClick={isUpdating ?
              () => updateToDo(toDoId, text, setToDo, setText, setIsUpdating)
              : () => addToDo(text, setText, setToDo)}>
            {isUpdating ? "Update" : "Add"}</div>

          {/* Search task functionality */}
          <div className='flex items-center mt-2 mb-3 '>
            <MdSearch className="mr-2" size={24} />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder='Search Task'
              className='px-3 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500'
            />
          </div>
        </div>

        {/* show toDos accroding to state : search, update,delete */}
        <div className="list">
          {filteredTodos.map((todo) => (
            <ToDo
              key={todo._id}
              text={todo.text}
              _id={todo._id}
              isCompleted={todo.isCompleted}
              updateMode={() => updateMode(todo._id, todo.text)}
              deleteToDo={() => deleteToDo(todo._id, setToDo)}
              toggleComplete={(id, isCompleted) => toggleCompleteToDo(id, isCompleted, setToDo)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
