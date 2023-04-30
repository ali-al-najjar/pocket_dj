import './navigation.css';
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  const activeClass = "nav_link--active";
    return (
        <div className="navigation">
        <div className="navigation_links">
        <Link to="/artist/profile" className={`nav_link ${location.pathname === "/artist/profile" ? activeClass : ""}`}>Edit Profile</Link>
        <Link to="/artist/upload" className={`nav_link ${location.pathname === "/artist/upload" ? activeClass : ""}`}>Upload a song</Link>
        </div>
        <div>
          <Link to="/artist" className="logout">Log out</Link>
        </div>
        </div>
    );
}
export default Navigation;