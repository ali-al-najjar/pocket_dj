import RegisterForm from "../../../components/RegisterForm/registerform";
import Logo from '../../../assets/logo.svg';
import Artist from '../../../assets/artist.svg';
import { Link } from "react-router-dom";
import "./index.css"

const Register = () => {
    return (
        <div className="form_container">
        <div className="left_box">
        <div className="heading_box">
        <img src={Logo} alt="logo" />
        <div className="app_title">Pocket DJAI</div>
        </div>
        <img className="decorative_image" src={Artist} alt="settings"/>
        </div>
        <div className="register_right_box">
        <div className="heading_box">
        <h1 className="page_title">Artist Portal</h1>
        <h2 className="heading">Create your account</h2>
        </div>
        <RegisterForm/>
        </div>
        </div>
    );
}
export default Register;