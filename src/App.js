import React, { useState } from "react";
import { TaskProvider, useTasks } from "./TaskContext";
import TaskList from "./TaskList";
import AddTask from "./AddTask";

function App() {
  const [newTask, setNewTask] = useState(""); 
  const { tasks, addTask } = useTasks(); 

  const handleAddTask = () => {
    if (newTask.trim()) {
      addTask(newTask);
      setNewTask(""); 
    }
  };

  return (
    <div className="App">
      <h1>Мой список задач</h1>
      {}
      <AddTask newTask={newTask} setNewTask={setNewTask} addTask={handleAddTask} />
      {}
      <TaskList tasks={tasks} />
    </div>
  );
}

function AppWrapper() {
  return (
    <TaskProvider>
      <App />
    </TaskProvider>
  );
}

export default AppWrapper;
