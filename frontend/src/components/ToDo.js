import React from 'react'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { BsCircleFill,BsCheckCircleFill, BsFillCheckCircleFill } from "react-icons/bs";

const ToDo = ({ _id,text, updateMode, deleteToDo,isCompleted,toggleComplete }) => {

  const handleToggle=()=>{
    toggleComplete(_id,!isCompleted);
  };

  return (
    <div className='todo relative mt-4 bg-gray-600 text-white px-12 py-5 rounded-md'>
     <div className='checkbox flex gap-2 items-center'> 
      
      <div className='cursor-pointer' onClick={handleToggle}>  
        {isCompleted ? (

         <BsFillCheckCircleFill className='icon text-green-500'></BsFillCheckCircleFill>
        ):
        (
        <BsCircleFill className='icon'/>
        )}
        </div>
      <div className='text text-[18px]'>{text}</div>
     </div>
      <div className='icons absolute top-1/2 right-5 transform -translate-y-1/2 flex gap-4'>
        <AiFillEdit className="icon cursor-pointer text-[20px]" onClick={updateMode} />
        <AiFillDelete className="icon cursor-pointer text-[20px]" onClick={deleteToDo} />
      </div>
    </div>
  )
}

export default ToDo