import React from 'react';

const CompleteTask = ({ data, idx }) => {
  return (
    <div key={idx} className="flex gap-5 w-full px-5">
      {data.tasks.completed.map((e, index) => (
        <div
          key={index} // Moved key here
          id="cardMain"
          className="flex-shrink-0 w-1/4 h-40 rounded-xl bg-[#3d3d3d] p-3 overflow-y-auto"
        >
          <div className="mb-2 flex flex-col">
            <div className="flex items-center justify-between">
              <h3 className="bg-blue-600 font-semibold rounded-xl px-3 py-1">Completed</h3>
              <h4 className="font-medium">{e.date}</h4>
            </div>
            <h1 className="text-xl font-bold">{e.title}</h1>
            <h3 className="font-medium text-sm">{e.description}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CompleteTask;
