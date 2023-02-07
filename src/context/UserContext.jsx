import { useState } from 'react';
import { useContext } from 'react';
import { createContext } from 'react';
import { getUser } from '../services/auth';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  // get current user from supabase client
  const currentUser = getUser();
  // define initial user state as currentUser
  const [user, setUser] = useState(currentUser);

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};

// create a custom hook to simplify props access
const useUserContext = () => {
  const context = useContext(UserContext);

  // setting up a dev error that throws when you try to access UserContext in a component not wrapped in UserProvider
  if (!context) {
    throw new Error('useUserContext must be wrapped in a UserProvider');
  }
  return context;
};

export { UserProvider, useUserContext };
