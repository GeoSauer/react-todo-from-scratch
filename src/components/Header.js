import { useUserContext } from '../context/UserContext';

export default function Header() {
  const { user, setUser } = useUserContext();

  return (
    <nav>
      <header>TODOMS&apos;TS</header>
      {/* if a user is authenticated show their email and the sign out button */}
      <div className="navbar-info">{user && <div>Welcome {user.email}!</div>}</div>
      <button>Sign Out</button>
    </nav>
  );
}
