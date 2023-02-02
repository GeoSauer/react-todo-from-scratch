import { useTasksContext } from '../../context/TasksContext';
import { deleteTask, toggleTaskCompleted } from '../../services/tasks';
import './Tasks.css';

export default function TaskList() {
  const { tasks, setTasks } = useTasksContext();

  const handleCompleted = async (task) => {
    try {
      const completedTask = await toggleTaskCompleted(task);
      setTasks((prevTasks) =>
        prevTasks.map((prevTask) => (prevTask.id === task.id ? completedTask : prevTask))
      );
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleDelete = async (task) => {
    try {
      const deletedTask = await deleteTask(task);
      setTasks((prevTasks) => prevTasks.filter((prevTask) => prevTask.id !== deletedTask.id));
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <div key={task.id}>
          <input type="checkbox" checked={task.completed} onChange={() => handleCompleted(task)} />
          {task.description}
          <button onClick={() => handleDelete(task.id)}>deyeet</button>
        </div>
      ))}
    </div>
  );
}
