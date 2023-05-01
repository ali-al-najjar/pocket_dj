import Navigation from "../../../components/Navigation/navigation";
import "./profilePage.css"
import ProfileInput from "../../../components/Profile/profile";

const ProfilePage = () => {
    return (
        <div className="profile_container">
        <div className="nav_box">
        <Navigation
        role ="Artist" />
        </div>
        <div className="page_box">
        <h2 className="heading">Edit your profile</h2>
        <ProfileInput/>
        </div>
        
        </div>
    );
}
export default ProfilePage;