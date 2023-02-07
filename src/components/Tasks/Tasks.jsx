import { Redirect } from 'react-router-dom';
import { useUserContext } from '../../context/UserContext';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

export default function Tasks() {
  const { user } = useUserContext();
  // quick auth check
  if (!user) {
    return <Redirect to="/auth/sign-in" />;
  }
  return (
    <div>
      <TaskForm />
      <TaskList />
    </div>
  );
}
