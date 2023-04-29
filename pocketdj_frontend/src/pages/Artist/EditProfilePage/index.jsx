import LoginForm from "../../../components/LoginForm/loginform";
import Navigation from "../../../components/Navigation/navigation";

const ProfilePage = () => {
    return (
        <div className="form_container">
        <div className="nav_box">
        <div className="heading_box">
        <Navigation />
        </div>
        <div className="page_box">
        <h2 className="heading">Edit your profile</h2>
        <LoginForm/>
        </div>
        </div>
        </div>
    );
}
export default ProfilePage;