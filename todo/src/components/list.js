import React,{useState} from 'react'
class list {

 <div>
{!!searchList.length ? (
  <div className="list-task  rounded">
    {searchList.map((tasks,index) => (
      <React.Fragment key={index}>
      
      <div className="task-display">
          <i className="bx bx-checkbox"></i>
          <i className='bx bxs-x-square' onClick={()=>deleteTask(tasks)}></i>
          <span>{tasks.title}</span>
        </div>
      </React.Fragment>
    ))}
  </div>
) : (
  <div className="list-task  rounded">
    {tasks.map((tasks,index) => (
      
      <React.Fragment key={index}>
      
      <div className="task-display">
          <i className="bx bx-checkbox"></i>
          <i className='bx bxs-x-square' onClick={()=>deleteTask(tasks)}></i>
          <span>{tasks.title}</span>
        </div>
      </React.Fragment>
    ))}
  </div>
)}



}