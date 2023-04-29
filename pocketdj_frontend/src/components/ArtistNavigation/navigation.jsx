import './navigation.css';
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="navigation">
        <div className="navigation_links">
        <Link to="/artist/profile" className="nav_link">Edit Profile</Link>
        <Link to="/artist/upload" className="nav_link">Upload a song</Link>
        </div>
        <div>
          <Link to="/artist" className="logout">Log out</Link>
        </div>
        </div>
    );
}
export default Navigation;