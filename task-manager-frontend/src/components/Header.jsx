import { Link } from "react-router-dom";

function Header() {
  return ( 
    <nav>
        <ul>
          <Link className="listItem" to={'/'}>Home</Link>
          <Link className="listItem" to={'/login'}>Login</Link>
          <Link className="listItem" to={'/protected'}>Protected</Link>
        </ul>
     </nav>
  );
}

export default Header;