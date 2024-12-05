import { useContext } from "react";
import { TaskContext } from "./TaskContext";

export const useTaskDispatcher = () => {
  const { tasks, addTask } = useContext(TaskContext);

  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks); 
  };

  return { tasks, addTask, removeTask };
};
