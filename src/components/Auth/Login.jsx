import React, { useState } from 'react';

const Login = ({handleLogin}) => {
const [input, setInput] = useState("");
const [pass, setPass] = useState("");


const submitHandler = (e)=>{
  e.preventDefault();
  handleLogin(input, pass);
  setInput("")
  setPass("")
}

  return (
    <div className='flex items-center justify-center h-screen '>
      <div className='bg-black h-[60%] flex flex-col justify-between   bg-opacity-30 backdrop-blur-lg  border-white border-2 border-opacity-30 p-10 rounded-lg shadow-lg'>
      <div className='flex gap-1  items-center ml-11'>
        <img className='w-15 h-7  font-semibold'  src="./Screenshot_2024-11-24_195122-removebg-preview-fotor-2024112420233.png" alt="logo" />
        <h3 className='font-semibold text-lg tracking-wide text-[#fff]'>MANAGER</h3>
      </div>
      <form className='flex flex-col items-center'
      onSubmit={submitHandler}
      >
        <h1 className='font-medium text-xl text-red-500 mb-3'>Login Page</h1>
        <input required type="email" placeholder='Enter Your email' className=' focus:border-red-500 border-red-500 focus:outline-none border-2 mb-4 px-4 py-2 rounded-3xl bg-transparent  '
        
        value={input}
        onChange={(e) => setInput(e.target.value)}
        
        />
        <input required type="password" placeholder='Enter Your Password' className=' focus:border-red-500 border-red-500 focus:outline-none border-2 mb-4 px-4 py-2 rounded-3xl bg-transparent'
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        />
        <button type="submit" className='bg-red-700 text-white px-10 py-2 rounded-3xl font-semibold'>Login</button>
      </form>
      </div>
    </div>
  );
};

export default Login;