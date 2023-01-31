import { useState } from 'react';
import { useTasksContext } from '../../context/TasksContext';
import { createTask } from '../../services/tasks';

export default function TaskForm() {
  const [description, setDescription] = useState('');
  const { setTasks } = useTasksContext();

  const handleNewTask = async () => {
    try {
      const task = await createTask(description);
      setTasks((prev) => [...prev, task]);
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
