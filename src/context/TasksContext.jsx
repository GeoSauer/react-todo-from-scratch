import { useContext, useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { getTasks } from '../services/tasks';
import { useUserContext } from './UserContext';

const TasksContext = createContext();

const TasksProvider = ({ children }) => {
  // set initial state to an empty to be populated by the fetch call
  const [tasks, setTasks] = useState([]);
  // bringing in user from context to add to dependency array
  const { user } = useUserContext();

  useEffect(() => {
    // fetch all tasks for current user
    const fetchTasks = async () => {
      try {
        const data = await getTasks();
        // and store them in the tasks array
        setTasks(data);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchTasks();
  }, [user]);
  return <TasksContext.Provider value={{ tasks, setTasks }}>{children}</TasksContext.Provider>;
};

// create a custom hook to simplify props access
const useTasksContext = () => {
  const context = useContext(TasksContext);

  // setting up a dev error that throws when you try to access UserContext in a component not wrapped in UserProvider
  if (!context) {
    throw new Error('useTaskContext must be wrapped in a TaskProvider');
  }
  return context;
};

export { TasksProvider, useTasksContext };
