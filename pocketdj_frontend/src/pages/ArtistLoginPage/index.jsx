import LoginForm from "../../components/LoginForm/loginform";
import Logo from '../../assets/logo.svg';
import Artist from '../../assets/artist.svg'

const Login = () => {
    return (
        <div className="form_container">
        <div className="left_box">
        <img src={Logo} alt="logo" />
        <div className="app_title">Pocket DJAI</div>
        <img src={Artist} alt="settings"/>
        </div>
        <div className="right_box">
        <h1>Artist Portal</h1>
        <LoginForm/>
        </div>
        </div>
    );
}
export default Login;