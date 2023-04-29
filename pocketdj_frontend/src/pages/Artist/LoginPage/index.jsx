import LoginForm from "../../../components/LoginForm/loginform";
import Logo from '../../../assets/logo.svg';
import Artist from '../../../assets/artist.svg'
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="form_container">
        <div className="left_box">
        <div className="heading_box">
        <img src={Logo} alt="logo" />
        <div className="app_title">Pocket DJAI</div>
        </div>
        <img className="decorative_image" src={Artist} alt="settings"/>
        </div>
        <div className="right_box">
        <div className="heading_box">
        <h1 className="page_title">Artist Portal</h1>
        <h2 className="heading">Log in to your account</h2>
        </div>
        <LoginForm/>
        <p className="links_p">New to Artists portal? <Link className="links" to ="/artist/register">Sign up</Link></p>
        </div>

        </div>
    );
}
export default Login;