import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

function Header() {
  const { user } = useSelector(state => state.user)
  const { logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = async (e) =>{
    e.preventDefault();
    try {
      await logout();
      navigate("/");
    } catch (err) {
      console.error("Error during logout:", err.message);
    }
  }
  
  return (
    <>
      <nav className="headerNav">
        <div></div>
        <ul className="menu">
          <Link className="listItem" to={'/'}>Home</Link>
          <Link className="listItem" to={'/login'}>Login</Link>
          <Link className="listItem" to={'/protected'}>Protected</Link>
        </ul>
        <p className="logout">{user ? <a href="" onClick={handleLogout}>Logout</a> : ''}</p>
      </nav>      
    </>    
  );
}

export default Header;