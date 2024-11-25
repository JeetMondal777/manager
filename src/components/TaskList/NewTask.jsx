import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const NewTask = ({ data, idx }) => {

  const authData = useContext(AuthContext)
  console.log(data);
  console.log(authData);
  

  return (
    <div key={idx} className='flex gap-5 w-full px-5 '>
      
      
      {data.tasks.newTask.length === 0 ? (
        <h1>No Tasks Found</h1>
      ) : (
        
        
        data.tasks.newTask.map((e, index) => (
          <div id="cardMain"
            key={index}
            className="flex-shrink-0 p-6  w-1/4 h-40 rounded-xl bg-[#3d3d3d]  overflow-auto">
            <div className="mb-2 flex flex-col">
              <div className="flex items-center justify-between">
                <h3 className="bg-yellow-400 font-semibold rounded-xl px-3 py-1">New Task</h3>
                <h4 className="font-medium">{e.date}</h4>
              </div>
              <h1 className="text-xl font-bold">{e.title}</h1>
              <h3 className="font-medium text-sm">{e.description}</h3>
              <button className='bg-green-600 mt-3 font-semibold rounded-xl px-3 py-1'>Accept</button>
              {/* <button className='bg-[#3d3d3d] text-xl font-semibold rounded-xl px-3 py-1 opacity-1 h-10 w-40 absolute inset-0 m-auto '>Accept</button> */}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default NewTask;