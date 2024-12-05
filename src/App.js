import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);

  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  return (
    <div className="App">
      <h1>Мой список задач</h1>
      {}
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)} 
        placeholder="Введите задачу"
      />
      {}
      <button onClick={addTask}>Добавить задачу</button>

      {}
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
