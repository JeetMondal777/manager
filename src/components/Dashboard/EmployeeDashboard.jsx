import React from 'react'
import Header from './EmpDashComponents/Header'
import TaskStatus from './EmpDashComponents/TaskStatus'
import AllTasks from './EmpDashComponents/AllTasks'

const EmployeeDashboard = ({data, changeUser}) => {
  
  
  return (
    <div>
      
      <Header data={data} changeUser={changeUser}/>
      <TaskStatus data={data}/>
      <AllTasks  data={data}/>
    </div>
  )
}

export default EmployeeDashboard
