import { useTasksContext } from '../../context/TasksContext';

export default function TaskList() {
  const { tasks, setTasks } = useTasksContext();

  return (
    <>
      {tasks.map((task) => (
        <div key={task.id}>{task.description}</div>
      ))}
    </>
  );
}
