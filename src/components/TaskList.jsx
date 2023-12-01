import React, { useState } from "react";
import TaskItem from "./TaskItem";
import TaskForm from "./TaskForm";

const TaskList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Entregar el proyecto final", date: "2023-12-01", completed: false },
    { id: 2, name: "Rendir final", date: "2023-12-11", completed: false },
  ]);

  const addTask = (newTask) => {
    const updatedTask = { ...newTask, id: tasks.length + 1, completed: false };
    setTasks([...tasks, updatedTask]);
  };

  const handleDelete = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <h5>VIEW YOUR TASKS</h5>
      <div className="border-solid border-slate-500 border-2 rounded-md p-5 mt-5">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={() => handleDelete(task.id)}
          />
        ))}
      </div>
      <TaskForm addTask={addTask} />
    </div>
  );
};

export default TaskList;

