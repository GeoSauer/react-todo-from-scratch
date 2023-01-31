import { Redirect } from 'react-router-dom';
import { useUserContext } from '../../context/UserContext';
import { signOut } from '../../services/auth';
// import Auth from '../Auth/Auth';
import './Header.css';

export default function Header() {
  const { user, setUser } = useUserContext();

  const handleLogout = async () => {
    try {
      await signOut();
      setUser(null);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      {/* if a user is authenticated show their email and the sign out button */}
      <div className="header">
        <div className="app-name">todoms&apos;t!</div>
        {user && (
          <>
            <div className="welcome">welcome, {user.email}</div>
            <div onClick={handleLogout}>Sign Out</div>
          </>
        )}
        {/* if not authenticated show the links to sign up/in */}
        {/* {!user && (
          <Auth />
          <div className="buttons">
            <Link className="sign-up" to="/auth/sign-up">
              <span>Sign Up</span>
            </Link>
            <Link className="sign-in" to="/auth/sign-in">
              <span>Sign In</span>
            </Link>
          </div>
        )} */}
      </div>
    </>
  );
}
