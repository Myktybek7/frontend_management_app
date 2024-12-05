import React from "react";

function AddTask({ newTask, setNewTask, addTask }) {
  return (
    <div>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Введите задачу"
      />
      <button onClick={addTask}>Добавить задачу</button>
    </div>
  );
}

export default AddTask;
