import React from 'react';

const ActiveTask = ({ data,idx }) => {
  return (
    <div key={idx} className='flex gap-5 w-full px-5 '>
      {data.tasks.activeTask.map((e, index) => (
        <div id="cardMain" key={index}
        className="flex-shrink-0 w-1/4 h-40 rounded-xl bg-[#3d3d3d] p-3 overflow-y-auto">
        
          
          
          <div className="flex items-center justify-between">
            <h3 className="bg-green-600 font-semibold rounded-xl px-3 py-1">Active</h3>
            <h4 className="font-medium">{e.date}</h4>
          </div>
          <h1 className="text-xl font-bold">{e.title}</h1>
          <h3 className="font-medium text-sm">{e.description}</h3>
          <div className='flex align-end gap-3'>
          <button className='bg-blue-500 mt-3 w-1/2 font-medium rounded-xl px-3 py-1'>Completed</button>
          <button className='bg-red-600 mt-3 w-1/2 font-medium rounded-xl px-3 py-1'>Failed</button>

          </div>
          
        </div>
      ))}
    </div>
  );
};

export default ActiveTask;
