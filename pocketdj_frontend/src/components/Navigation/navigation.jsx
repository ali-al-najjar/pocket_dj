import './navigation.css';
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="navigation">
        <div className="navigation_links">
        <Link className="nav_link">Edit Profile</Link>
        <Link className="nav_link">Upload a song</Link>
        </div>
        <div>
          <Link className="logout">Log out</Link>
        </div>
        </div>
    );
}
export default Navigation;