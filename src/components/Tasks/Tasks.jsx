import React from 'react';
import { Redirect } from 'react-router-dom';
import { useUserContext } from '../../context/UserContext';

export default function Tasks() {
  const { user } = useUserContext();
  if (!user) {
    return <Redirect to="/auth/sign-in" />;
  }
  return <div>Tasks</div>;
}
