import { Link } from "react-router-dom"
import { useState } from "react"
import "../css/NavBar.css"

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <h3 className="off">OFF</h3>
          <h3 className="the">THE</h3>
          <h3 className="feed">FEED</h3>
        </Link>

        
        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        
        <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link to="/Movies" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Movies
          </Link>
          <Link to="/Others" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Others
          </Link>
          <Link to="/Favorites" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Favorites
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;