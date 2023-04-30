import Navigation from "../../../components/ArtistNavigation/navigation";
import Users from "../../../components/UsersTable/users";
import './users.css';

const ViewAllUsers = () => {
    return (
        <div className="profile_container">
        <div className="nav_box">
        <Navigation />
        </div>
        <div className="page_box">
        <h2 className="heading">View All Users</h2>
        <Users/>
        </div>
        
        </div>
    );
}
export default ViewAllUsers;