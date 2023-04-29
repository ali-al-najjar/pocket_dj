import LoginForm from "../../components/LoginForm/loginform";
import Logo from '../../assets/logo.svg';
import Settings from '../../assets/settings.svg'

const Login = () => {
    return (
        <>
        <div className="form_container">
        <div className="left_box">
        <img src={Logo} alt="logo" />
        <div className="app_title">Pocket DJAI</div>
        <img src={Settings} alt="settings"/>
        </div>
        <div className="right_box">
        <h1>Admin Portal</h1>
        <LoginForm/>
        </div>
        </div>
       </>
    );
}
export default Login;