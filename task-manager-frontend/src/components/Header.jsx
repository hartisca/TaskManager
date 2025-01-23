import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'

function Header() {
  const { user } = useSelector(state => state.user)

  console.log(user)

  return ( 
    <nav className="headerNav">
        <ul>
          <Link className="listItem" to={'/'}>Home</Link>
          <Link className="listItem" to={'/login'}>Login</Link>
          <Link className="listItem" to={'/protected'}>Protected</Link>
        </ul>
        <p></p>
     </nav>
  );
}

export default Header;