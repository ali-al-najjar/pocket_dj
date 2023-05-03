import Navigation from "../../../components/Navigation/navigation";
import Users from "../../../components/UsersTable/users";
import './users.css';

const ViewAllUsers = () => {
    return (
        <div className="profile_container">
        <div className="nav_box">
        <Navigation
        role="Admin" />
        </div>
        <div className="page_box">
        <h2 className="page_heading">All Users</h2>
        <Users/>
        </div>
        
        </div>
    );
}
export default ViewAllUsers;