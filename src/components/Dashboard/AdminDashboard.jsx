import React from 'react'
import Header from './EmpDashComponents/Header'
import TaskCreation from './AdminDashboardComponents/TaskCreation'
import CreatedTask from './AdminDashboardComponents/CreatedTask'

const AdminDashboard = ({data, changeUser}) => {
  return (
    <div>
      <Header data={data} changeUser = {changeUser}/>
      <TaskCreation data={data}/>
      <CreatedTask data={data}/>
    </div>
  )
}

export default AdminDashboard
