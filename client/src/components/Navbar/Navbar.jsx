import { Link } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="flex">
          <a href="/" className="nav-logo">
            Tech<span>Market</span>
          </a>
          <ul className="navbar-nav flex">
            <li className="nav-item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/">Products</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
