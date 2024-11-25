import React, { useContext, useState } from 'react'
import { AuthContext } from '../../../context/AuthProvider'

const Header = ({data, changeUser}) => {
  const authData= useContext(AuthContext)




  const logOutUser = ()=>{
    const empData = authData.employees
    const emp = JSON.parse(localStorage.getItem('employees'));

    
    localStorage.removeItem('loggedInUser');

    changeUser('')


  }
  return (
    <div className='flex bg-[#1c1c1c] items-center justify-between p-5'>
    <h3 className='text-lg font-medium'>Hello , <br /><span className='text-2xl font-semibold'>{data.firstName} 👋</span></h3>
    <h1 className='text-4xl font-bold'>Your Personal Dashboard</h1>
    <button onClick={logOutUser} className='bg-red-700 text-sm rounded-3xl px-5 py-2'>Log Out</button>
    
    </div>
  )
}

export default Header
