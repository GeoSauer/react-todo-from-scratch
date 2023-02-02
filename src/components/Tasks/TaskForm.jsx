import { useState } from 'react';
import { useTasksContext } from '../../context/TasksContext';
import { createTask } from '../../services/tasks';
import './Tasks.css';

export default function TaskForm() {
  const [description, setDescription] = useState('');
  const { setTasks } = useTasksContext();

  const handleNewTask = async () => {
    try {
      const task = await createTask(description);
      // spread the current tasks into an array and add the newly created one to the end
      setTasks((prev) => [...prev, task]);
      // reset the input
      setDescription('');
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <div className="task-form">
      <input
        type="text"
        placeholder="what to doms't?"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button onClick={handleNewTask}>Add</button>
    </div>
  );
}
