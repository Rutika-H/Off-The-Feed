import {Link} from "react-router-dom"
import "../css/NavBar.css"

function NavBar(){
    return <nav className="navbar">
        <div >
             <Link to="/"className="navbar-brand">
               <h3 className="off">OFF</h3>
               <h3 className="the">THE</h3>
               <h3 className="feed">FEED</h3>
             </Link>

      </div>
      <div className="navbar-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/Movies" className="nav-link">Movies</Link>
        <Link to="/Others" className="nav-link">Others</Link>
        <Link to="/Favorites" className="nav-link">Favorites</Link>
         
      </div>
    </nav>
}
export default NavBar