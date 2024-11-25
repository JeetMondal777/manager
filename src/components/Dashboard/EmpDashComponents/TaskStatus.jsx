import React, { useContext } from 'react'
import { AuthContext } from '../../../context/AuthProvider'

const TaskStatus = ({data}) => {

  const authData = useContext(AuthContext)
  return (
    <div className='flex justify-between gap-5 p-5'>
      <div className='w-1/2 bg-yellow-400 rounded-xl p-5'>
      <h2 className='text-3xl font-semibold'>{data.taskCounts.newTask}</h2>
      <h4 className='text-xl font-lg'>New Tasks</h4>
      </div>
      <div className=' w-1/2 bg-blue-600 rounded-xl p-5'>
      <h2 className='text-3xl font-semibold'>{data.taskCounts.completed}</h2>
      <h4 className='text-xl font-lg'>Tasks Completed</h4>
      </div>
      <div className=' w-1/2 bg-green-600 rounded-xl p-5'>
      <h2 className='text-3xl font-semibold'>{data.taskCounts.activeTask}</h2>
      <h4 className='text-xl font-lg'>Active Tasks</h4>
      </div>
      <div className=' w-1/2 bg-red-600 rounded-xl p-5'>
      <h2 className='text-3xl font-semibold'>{data.taskCounts.failed}</h2>
      <h4 className='text-xl font-lg'>Tasks Failed</h4>
      </div>
      
    </div>
  )
}

export default TaskStatus
