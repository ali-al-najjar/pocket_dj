import Navigation from "../../../components/Navigation/navigation";
import Artists from "../../../components/ArtistsTable/artists";
import './artists.css';

const ViewAllArtists = () => {
    return (
        <div className="profile_container">
        <div className="nav_box">
        <Navigation
        role ="Admin" />
        </div>
        <div className="page_box">
        <h2 className="page_heading">All Artists</h2>
        <Artists />
        </div>
        
        </div>
    );
}
export default ViewAllArtists;