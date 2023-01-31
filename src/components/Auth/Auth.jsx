import { useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useUserContext } from '../../context/UserContext';
import { authUser } from '../../services/auth';
import './Auth.css';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { type } = useParams();
  const { user, setUser } = useUserContext();

  const submitAuth = async () => {
    // call authUser with email, password, and type
    try {
      const newUser = await authUser(email, password, type);
      // if successful setUser in context
      setUser(newUser);
    } catch (error) {
      // else display error
      console.error(error);
    }
  };

  return (
    <div className="auth">
      <h1>Welcome to TODOMS&apos;T!</h1>
      <div className="sign-btns">
        <NavLink to="/auth/sign-in">Sign In</NavLink>
        <NavLink to="/auth/sign-up">Sign Up</NavLink>
      </div>
      <div className="input-form">
        <div className="field">
          <label>Email</label>
          <input
            className="input"
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="field">
          <label>Password</label>
          <input
            className="input"
            type="password"
            placeholder="********"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
      </div>
      <button onClick={submitAuth}>Submit</button>
    </div>
  );
}
