import React, { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [taskName, setTaskName] = useState("");
  const [taskDate, setTaskDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { name: taskName, date: taskDate };
    addTask(newTask);
    setTaskName("");
    setTaskDate("");
    document.getElementById('my_modal_1').close();
  };

  return (
    <div className="mt-5">
      <button className="btn btn-active btn-accent" onClick={() => document.getElementById('my_modal_1').showModal()}>open modal</button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Add New Task</h3>
          <form onSubmit={handleSubmit} className="py-4">
            <input
              type="text"
              placeholder="Task Name"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              className="block w-full p-2 border border-gray-300 rounded mb-4"
            />
            <input
              type="date"
              placeholder="Task Date"
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className="block w-full p-2 border border-gray-300 rounded mb-4"
            />
            <div className="flex justify-end">
              <button type="submit" className="btn btn-active btn-accent">
                Add Task
              </button>
            </div>
          </form>
          <button className="btn" onClick={() => document.getElementById('my_modal_1').close()}>
            Close
          </button>
        </div>
      </dialog></div>

  );
};

export default TaskForm;
