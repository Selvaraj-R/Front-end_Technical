import React, { useState } from "react"; 

export default function Todo() {

  const [task, setTask] = useState("");
  const taskFromLocal = JSON.parse(localStorage.getItem("localTasks")) || [];
  const [tasks, setTasks] = useState(taskFromLocal);

  const addTask = (inputTask) => {  // don't need input  
  // params => setstate

  
    if (inputTask) {
      const newTask = { id: new Date().getTime.toString, title: inputTask };
      setTasks([...tasks, newTask]);
      localStorage.setItem("localTasks", JSON.stringify([...tasks, newTask])); //why when what ,do we need it here 
      setTask("");  // it can be a reuseable function so we need to rely on params not on state
    }
  };

  const deleteTask = (taskTobeDeleted)=> {
    const FilteredTask = taskFromLocal.filter((t)=> t !== taskTobeDeleted ) //check id don't itertate full object || delete only this id 
    setTasks(FilteredTask)//go and find and delete || local utility to delte from backend
    localStorage.setItem("localTasks", JSON.stringify(FilteredTask));
  }

  return (
    <React.Fragment>
      <div className="top">
        <h1> Task board</h1>
      </div>
      <div className="flex">
        <input
          name="task"
          type="text"
          value={task}
          placeholder="Add items..."
          className="form-control m-1"
          onChange={(targetedValue) => setTask(targetedValue.target.value)}
        />
        <button className="btn btn-outline-green m-1" onClick={addTask}>
          <i className="bx bxs-add-to-queue"></i>
        </button>
        <button className="btn btn-outline-green m-1">
          <i className="bx bx-search"></i>
        </button>
      </div>

      <div className="icon-holder">
        <div className="badge m-1">
          <i className="bx bxs-notification"></i> &nbsp; You have
          {!taskFromLocal.length
            ? " no tasks"
            : taskFromLocal.length === 1
            ? " 1 task"
            : taskFromLocal.length > 1
            ? ` ${taskFromLocal.length} tasks`
            : null}
        </div>
        <div className="none">
        <h1 className="badge m-1">All</h1>
        <h1 className="badge m-1">Active</h1>
        <h1 className="badge m-1">Completed</h1>
         
        </div>
      </div>
      <div className="list-task  rounded">
        {taskFromLocal.map((e) => (
          <React.Fragment key={e.id}>
            <div className="task-display">
              <i className="bx bx-checkbox"></i>
              <i className='bx bxs-x-square' onClick={()=>deleteTask(e)}></i>
              <span>{e.title}</span>
            </div>
          </React.Fragment>
        ))}
      </div>
    </React.Fragment>
  );
}

