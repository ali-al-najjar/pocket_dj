import Navigation from "../../../components/Navigation/navigation";
import Songs from "../../../components/SongsTable/songs";
// import './users.css';

const ViewAllSongs = () => {
    return (
        <div className="profile_container">
        <div className="nav_box">
        <Navigation
        role="Admin" />
        </div>
        <div className="page_box">
        <h2 className="heading">View All Songs</h2>
        <Songs/>
        </div>
        
        </div>
    );
}
export default ViewAllSongs;