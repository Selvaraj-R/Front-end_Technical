import React, { useSta, useState } from "react";

export default function Todo() {

  localStorage.setItem("localTasks", JSON.stringify([{ id: new Date().getTime.toString, title: "Learn Cycling" },{ id: new Date().getTime.toString, title: "Learn React" },{ id: new Date().getTime.toString, title: "Finish topics on time" }]));

  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const taskFromLocal = JSON.parse(localStorage.getItem("localTasks"));
  console.log(taskFromLocal);

  const addTask = (e) => {
    if (task) {
      const newTask = { id: new Date().getTime.toString, title: task };
      setTasks([...tasks, newTask]);
      localStorage.setItem("localTasks", JSON.stringify([...tasks, newTask]));
      setTask("");
    }
  };

  return (
    <React.Fragment>
      <div className="top">
        <h1> Todo App</h1>
      </div>
      <div className="flex">
        <input
          name="task"
          type="task"
          value={task}
          placeholder="Add items..."
          className="form-control m-1"
          onChange={(e) => setTask(e.target.value)}
        />
        <button className="btn btn-outline-green m-1" onClick={addTask}>
          <i className="bx bxs-add-to-queue"></i>
        </button>
        <button className="btn btn-outline-green m-1">
          <i className="bx bxs-search"></i>
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
            ? ` ${.length} tasks`
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
              <span>{e.title}</span>
            </div>
          </React.Fragment>
        ))}
      </div>
    </React.Fragment>
  );
}
