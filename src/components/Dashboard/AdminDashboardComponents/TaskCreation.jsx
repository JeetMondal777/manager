import React, { useContext, useState } from 'react'
import { AuthContext } from '../../../context/AuthProvider';

const TaskCreation = () => {

  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [assign, setAssign] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [newTask, setNewTask] = useState({});
  
  const authData = useContext(AuthContext)
  const data = authData.employees
  

  
  
  

    const submitHandler=(e)=>{
        e.preventDefault();
        setNewTask({title: task,date,category,description,newTask:true, activeTask:false, completed:false, failed:false})
        // console.log(newTask);
        
        //const data = JSON.parse(localStorage.getItem('employees'))
        if(Object.keys(newTask).length !== 0){
        (data.forEach(function(e){
          if(e.firstName === assign){
            
            
          e.tasks.newTask.push(newTask)
          e.taskCounts.newTask = e.taskCounts.newTask+1
          console.log(e);
            }
        
        return e;
        
    })
  )
}
    localStorage.setItem('employees', JSON.stringify(data));

    

        setTask("")
        setDate("")
        setAssign("")
        setCategory("")
        setDescription("")
        
    }


    

  return (
    <div >
        <form className='flex items-start justify-between h-1/2 w-full '
        onSubmit={submitHandler}>
      <div className='flex flex-col ml-3 w-[47%]'>
        <h3 className='m-1 font-semibold'>Task Title</h3>
        <input required
        value={task}
        onChange={(e) => setTask(e.target.value)}
        type="text" placeholder='e.g - make a ui design'
        className='bg-transparent border-2 rounded-xl px-3 py-2 m-1' />
        <h3 className='m-1 font-semibold'>Date</h3>
        <input required
        value={date}
        onChange={(e) => setDate(e.target.value)}
        type="date" className='bg-transparent border-2 rounded-xl px-3 py-2 m-1' />
        <h3 className='m-1 font-semibold'>Assign To</h3>
        <input required
        value={assign}
        onChange={(e) => setAssign(e.target.value)}
        type="text" className='bg-transparent border-2 rounded-xl px-3 py-2 m-1' placeholder='employee name' />
        <h3 className='m-1 font-semibold'>Category</h3>
        <input required
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        type="text" className='bg-transparent border-2 rounded-xl px-3 py-2 m-1' placeholder='e.g - designer, devoloper etc' />
      </div>

      <div className='flex flex-col gap-2 mr-3 w-[47%]'>
        <h3 className='m-1 font-semibold'>Description</h3>
        <textarea required
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className='bg-transparent border-2 rounded-xl px-3 py-2 m-1' placeholder='write a description of the task' rows={9}></textarea>
        <button  className='bg-red-700 rounded-xl px-3 py-2 text-sm font-medium'>Create Task</button>
      </div>
      </form>
    </div>
  )
}

export default TaskCreation
