import { Link } from 'react-router-dom';
import { useUserContext } from '../../context/UserContext';
import './Header.css';

export default function Header() {
  const { user, setUser } = useUserContext();
  //   const user = {
  //     email: 'wow@example.me',
  //   };

  return (
    <>
      {/* if a user is authenticated show their email and the sign out button */}
      <div className="header">
        <div className="app-name">todoms&apos;t list app!</div>
        {user && (
          <>
            <div className="welcome">welcome {user.email}</div>
            <button>Sign Out</button>
          </>
        )}
        {/* if not authenticated show the links to sign up/in */}
        {/* {!user && (
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
