import { useUserContext } from '../../context/UserContext';
import { signOut } from '../../services/auth';
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
      </div>
    </>
  );
}
