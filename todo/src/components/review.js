import React, { useState } from "react"; 

export default function Todo() {

  const [task, setTask] = useState("");
  // const taskFromLocal = JSON.parse(localStorage.getItem("localTasks"));
  const [tasks, setTasks] = useState([]);
  const [searchList,setSearchList] = useState([]);

  const clear =() => {
    localStorage.clear();
    setTasks([])
  }
  // const mode = '';


  
   

  const addTask = (e) => {
    setSearchList([])
    if (task) {
      const newTask = { id: new Date() , title: task };

      setTasks([...tasks, newTask]);
      localStorage.setItem("localTasks", JSON.stringify([...tasks, newTask]));
      setTask("");


    }
  };

  const deleteTask = (e)=> {
    const deleted = tasks.filter((t)=> t !== e )
    setTasks(deleted)
    setSearchList([])
    localStorage.setItem("localTasks", JSON.stringify(deleted));
  }

// const searchTask = tasks.filter((searchTask) => {
//   return  searchTask.title.includes(task)
// })
// console.log(searchTask);

  const search = () => {
    // if (tasks === []) {console.log("its empty")}
   
    if (task){

      const searchTasks = tasks.filter((tasks)=> {
        console.log(tasks.title.includes(task))
        return tasks.title.includes(task);
      })
      console.log(searchTasks);
      setSearchList(searchTasks);
      // return searchTask;
      // setTasks([searchTask])
    } else {
      return <React.Fragment> <p>no items found</p></React.Fragment>
    }

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
          onChange={(e) => setTask(e.target.value)}
          onKeyPress={event => {
                if (event.key === 'Enter') {
                  addTask()
                }
              }}
        />
        <button className="btn btn-outline-green m-1" onClick={addTask}>
          <i className="bx bxs-add-to-queue"></i>
        </button>
        <button className="btn btn-outline-green m-1" onClick={search}>
          <i className="bx bx-search"></i>
        </button>
      </div>

      <div className="icon-holder">
        <div className="badge m-1">
          <i className="bx bxs-notification"></i> &nbsp; You have
          {!tasks.length
            ? " no tasks"
            : tasks.length === 1
            ? " 1 task"
            : tasks.length > 1
            ? ` ${tasks.length} tasks`
            : null}
        </div>
        <div className="none">
        <h1 className="badge m-1">All</h1>
        <h1 className="badge m-1">Active</h1>
        <h1 className="badge m-1">Completed</h1>
        <button className="clear badge m-1" onClick={clear}>Clear</button>

         
        </div>
      </div>

      

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
       

      
    </React.Fragment>
  );
}

