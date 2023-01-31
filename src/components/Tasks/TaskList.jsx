import { useTasksContext } from '../../context/TasksContext';
import { toggleTaskCompleted } from '../../services/tasks';

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
  return (
    <>
      {tasks.map((task) => (
        <div key={task.id}>
          <label className="checkbox">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleCompleted(task)}
            />
          </label>
          {task.description}
        </div>
      ))}
    </>
  );
}
