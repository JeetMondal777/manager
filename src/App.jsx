import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import Header from './components/Dashboard/EmpDashComponents/Header'
import TaskStatus from './components/Dashboard/EmpDashComponents/TaskStatus'
import AllTasks from './components/Dashboard/EmpDashComponents/AllTasks'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {
  setLocalStorage()

  const authData = useContext(AuthContext)


  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  

  useEffect(() => {
   
    const loggedInUser = localStorage.getItem('loggedInUser')
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
  }, []);
  
  

const handleLogin = (email, password) => {

   if (authData) {
    const admin = authData.admin.find((e)=> e.email===email && e.password === password)
    if(admin){
      setUser ('admin');
      setLoggedInUserData(admin)
      localStorage.setItem('loggedInUser', JSON.stringify({role:'admin', data:admin}))
    }
    const employee = authData.employees.find((e)=>e.email === email && e.password === password)
      if(employee){
        setUser ('employee');
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({role:'employee', data:employee}))
      }
    
  }

  else{
    alert('Invalid Credentials')
  }
}

  

return (
  <div>
    {user ? (
      user === 'admin' ? (
        <AdminDashboard changeUser = {setUser} data={loggedInUserData} />
      ) : user === 'employee' ? (
        <EmployeeDashboard changeUser = {setUser} data={loggedInUserData} />
      ) : null
    ) : (
      <Login handleLogin={handleLogin} />
    )}
  </div>
)
}


export default App
