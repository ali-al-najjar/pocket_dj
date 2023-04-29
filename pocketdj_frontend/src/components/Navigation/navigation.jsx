import './navigation.css';
import { Link } from "react-router-dom";

const Navigation = ({name,onSubmit}) => {
    return (
        <div className="navigation">
        <div className="navigation_links">
        <div className="user_name">Ali Najjar</div>
        <Link>Edit Profile</Link>
        <Link>Upload a song</Link>
        </div>
        <div>
          <Link className="logout">Log out</Link>
        </div>
        </div>
    );
}
export default Navigation;