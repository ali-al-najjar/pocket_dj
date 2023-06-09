import LoginForm from "../../../components/LoginForm/loginform";
import Logo from '../../../assets/logo.svg';
import Admin from '../../../assets/admin.svg'

const Login = () => {
    return (
        <div className="form_container">
        <div className="left_box">
        <div className="heading_box">
        <img src={Logo} alt="logo" />
        <div className="app_title">Pocket DJAI</div>
        </div>
        <img className="decorative_image" src={Admin} alt="settings"/>
        </div>
        <div className="right_box">
        <div className="heading_box">
        <h1 className="page_title">Admin Portal</h1>
        <h2 className="heading">Log in to your account</h2>
        </div>
        <LoginForm
        role = "Admin" />
        </div>
        </div>
    );
}
export default Login;