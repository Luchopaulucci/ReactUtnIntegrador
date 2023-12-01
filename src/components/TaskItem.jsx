const TaskItem = ({ task, onDelete }) => {

  const handleDelete = () => {
    onDelete(task);
  };

  return (
    <div className="flex flex-row items-center mt-5">
      <div className="border-solid border-slate-500 border-2 rounded-md p-5 sm:w-96 w-64 flex flex-row place-content-between">
        <div>
          <h2>{task.name}</h2>
          <h4>{task.date}</h4>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="scales"
            name="scales"
            className="form-checkbox h-5 w-5 text-primary border-primary rounded"
          />
        </div>
      </div>
      <button className="btn" onClick={handleDelete}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
      </button>
    </div>
  );
};

export default TaskItem;
