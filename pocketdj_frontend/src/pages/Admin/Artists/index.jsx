import Navigation from "../../../components/ArtistNavigation/navigation";
import Artists from "../../../components/ArtistsTable/artists";
import './artists.css';

const ViewAllArtists = () => {
    return (
        <div className="profile_container">
        <div className="nav_box">
        <Navigation />
        </div>
        <div className="page_box">
        <h2 className="heading">View All Artists</h2>
        <Artists />
        </div>
        
        </div>
    );
}
export default ViewAllArtists;