import React, { useContext } from 'react'
import ActiveTask from '../../TaskList/ActiveTask'
import CompleteTask from '../../TaskList/CompleteTask'
import FailedTask from '../../TaskList/FailedTask'
import NewTask from '../../TaskList/NewTask'
import { AuthContext } from '../../../context/AuthProvider'



const AllTasks = ({data,idx}, {status}) => {

  const authData = useContext(AuthContext)

  return (
    <div id="card" className=' flex flex-col gap-3 mb-5  justify-start w-full  flex-nowrap overflow-x-auto'>
      <h1 className='text-2xl font-semibold px-5 bg-[#1c1c1c] py-1'>New Tasks</h1>
      <NewTask key={idx} data={data}/>
      <h1 className='text-2xl font-semibold px-5 bg-[#1c1c1c] py-1 '>Completed Tasks</h1>
      <CompleteTask key={idx} data={data}/>
      <h1 className='text-2xl font-semibold px-5 bg-[#1c1c1c] py-1 '>Active Tasks</h1>
      <ActiveTask key={idx} data={data} /> 
      <h1 className='text-2xl font-semibold px-5 bg-[#1c1c1c] py-1 '>Failed Tasks</h1>
      <FailedTask key={idx} data={data}/>

      
      
      
      
      
      
    </div>
  )
}

export default AllTasks
