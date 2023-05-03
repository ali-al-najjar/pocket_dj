import './navigation.css';
import { Link, useLocation } from "react-router-dom";
import logo from '../../assets/logo.svg'

const Navigation = ({role}) => {
  const location = useLocation();
  const activeClass = "nav_link--active";
  if (role == "Artist"){
    return (
        <div className="navigation">
        <div className="navigation_links">
        <Link to="/artist/profile" className={`nav_link ${location.pathname === "/artist/profile" ? activeClass : ""}`}>Edit Profile</Link>
        <Link to="/artist/upload" className={`nav_link ${location.pathname === "/artist/upload" ? activeClass : ""}`}>Upload your song</Link>
        </div>
        <div>
          <Link to="/artist" className="logout">Log out</Link>
        </div>
        </div>
    );}
    else {
      return (
        <div className="navigation">
        <div className="navigation_links">
        <div ><img className= "logo" src = {logo}></img></div>
        <Link to="/admin/users" className={`nav_link ${location.pathname === "/admin/users" ? activeClass : ""}`}>All Users</Link>
        <Link to="/admin/artists" className={`nav_link ${location.pathname === "/admin/artists" ? activeClass : ""}`}>All Artists</Link>
        <Link to="/admin/songs" className={`nav_link ${location.pathname === "/admin/songs" ? activeClass : ""}`}>All Songs</Link>
        <Link to="/admin/mood" className={`nav_link ${location.pathname === "/admin/mood" ? activeClass : ""}`}>Upload a Mood</Link>
        <Link to="/admin/song" className={`nav_link ${location.pathname === "/admin/song" ? activeClass : ""}`}>Upload a Song</Link>
        </div>
        <div>
          <Link to="/admin" className="logout">Log out</Link>
        </div>
        </div>
    );
    }
}
export default Navigation;