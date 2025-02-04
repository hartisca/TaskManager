import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { format } from "@formkit/tempo";

function Header() {
  const { user } = useSelector(state => state.user)
  const { logout } = useAuth()
  const navigate = useNavigate()
  const date = new Date()  

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
        <div>{format(date, "long")}</div>
        <ul className="menu">
          <Link className="listItem" to={'/'}>Home</Link>          
          <Link className="listItem" to={'/protected'}>Protected</Link>
        </ul>
        <p className="logout">{user ? <a href="" onClick={handleLogout}>Logout</a> : <Link className="listItem" to={'/login'}>Login</Link>}</p>
      </nav>      
    </>    
  );
}

export default Header;