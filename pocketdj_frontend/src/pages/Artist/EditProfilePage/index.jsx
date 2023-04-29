import LoginForm from "../../../components/LoginForm/loginform";
import Navigation from "../../../components/Navigation/navigation";
import "./index.css"

const ProfilePage = () => {
    return (
        <div className="profile_container">
        <div className="nav_box">
        <Navigation />
        </div>
        <div className="page_box">
        <h2 className="heading">Edit your profile</h2>
        <LoginForm/>
        </div>
        
        </div>
    );
}
export default ProfilePage;