import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../../../context/AuthProvider'


const CreatedTask = ({data}) => {

  const authData = useContext(AuthContext)
  //console.log(authData.employees);


  

  return (
    <div className='mt-4 f'>
        <div className='flex flex-col items-center justify-center bg-[#1c1c1c] py-1 px-3 w-full   '>
            <h1 className=' text-3xl font-bold  px-2 py-1 w-full '>Your Created Tasks</h1>
        </div>
        <div className='flex justify-between items-center w-full py-2 px-5 bg-[#1c1c1c] mt-2 '>
      <h2 className='w-1/5 font-semibold'>Employee Name</h2>
      <h3 className='w-1/5 font-medium'>New Task</h3>
      <h3 className='w-1/5 font-medium'>Completed</h3>
      <h3 className='w-1/5 font-semibold'>Active</h3>
      <h3 className='w-1/5 font-semibold'>Failed</h3>
      </div> 

      <div className=''>
        { 
            authData.employees.map((elem,idx)=>{
              return (<div key={idx} className='flex justify-center items-center  w-full rounded-lg py-2 px-5 mt-2 border-[#3d3d3d] border-2  '>
              <h2 className='w-1/5  font-semibold'>{elem.firstName}</h2>
              <h3 className='w-1/5 text-yellow-400 font-medium'>{elem.taskCounts.newTask}</h3>
              <h3 className='w-1/5 text-blue-400 font-medium'>{elem.taskCounts.completed}</h3>
              <h3 className='w-1/5 text-green-600 font-medium'>{elem.taskCounts.activeTask}</h3>
              <h3 className='w-1/5 text-red-600 font-medium'>{elem.taskCounts.failed}</h3>
              </div> 
              )
            })
        }
      </div>
    
    
    </div>
  )
}

export default CreatedTask
