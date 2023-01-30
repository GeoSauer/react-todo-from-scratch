import { Link } from 'react-router-dom';
import { useUserContext } from '../context/UserContext';

export default function Header() {
  const { user, setUser } = useUserContext();
  //   const user = {
  //     email: 'wow@example.me',
  //   };

  return (
    <nav>
      <header>TODOMS&apos;TS</header>
      {/* if a user is authenticated show their email and the sign out button */}
      <div className="navbar-info">
        {user && (
          <>
            <div>Welcome {user.email}!</div>
            <button>Sign Out</button>
          </>
        )}
        {!user && (
          <div className="buttons">
            <Link className="sign-up" to="/auth/sign-up">
              <span>Sign Up</span>
            </Link>
            <Link className="sign-in" to="/auth/sign-in">
              <span>Sign In</span>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
