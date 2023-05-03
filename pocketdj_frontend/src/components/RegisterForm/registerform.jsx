import Input from "../Input/input";
import  '../LoginForm/loginform.css';
import './registerform.css'
import Button from "../Button/button";
import {useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setConfirmPassword] = useState("");
  const [profile, setProfile] = useState("");
  const[error,setError]=useState("");
  const navigator = useNavigate();

const handleFirstName=(e)=>{
      setFirstName(e.target.value)
  }
const handleLastName=(e)=>{
      setLastName(e.target.value)
  }
const handleEmail=(e)=>{
      setEmail(e.target.value)
  }
const handleUsername=(e)=>{
      setUsername(e.target.value)
  }
const handlePassword=(e)=>{
     setPassword(e.target.value)
  }
const handleConfirmPassword=(e)=>{
     setConfirmPassword(e.target.value)
  }

const handleProfile = (event) => {
  const file = event.target.files[0];
  const data = new FormData();
  data.append("profile", file);
  setProfile(file);
}


  const validateEmail=(email) =>{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);}


  const validatePassword=(password)=> {
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        return passwordRegex.test(password);
      }
      
  
  const handleSubmit=()=>{
    if (validateEmail(email)){
        if(validatePassword(password)){
          const data = new FormData();
          data.append("first_name", first_name);
          data.append("last_name", last_name);
          data.append("email", email);
          data.append("username", username);
          data.append("password", password);
          data.append("password2", password2);
          data.append("role", "Artist");
          data.append("profile", profile);
          
          axios.post("http://192.168.1.127:8000/register",data,{
            headers: {
              "Content-Type": "multipart/form-data"
            }
          })
          .then((res)=>{
            setError("");
            navigator("/artist")
          })
          .catch((err=>{
            console.log(err.request.response);
          }))

  }}
}
 
    return(
      <>
        <div className="register_input_box">
        <div className="name_inputs">
        <Input name={"First Name"} type={"text"} onChange={handleFirstName} />
        <Input name={"Last Name"} type={"text"} onChange={handleLastName} />
        </div>
        <Input name={"Email"} type={"email"} onChange={handleEmail} />
        <Input name={"Username"} type={"text"} onChange={handleUsername} />
        <Input name={"Password"} type={"password"} onChange={handlePassword}/>
        <Input name={"Confirm Password"} type={"password"} onChange={handleConfirmPassword}/>
        <Input name={"Profile Picture"} type={"file"} onChange={handleProfile}/>
        <Button className = {"button"} name={"Register"} onSubmit={handleSubmit}/>
        <p className="error"><br/>{error}</p>
        </div>
        <p className="links_p">Already have an account? <Link className="links" to ="/artist">Login instead</Link></p>
        </> 
    );}

export default RegisterForm;
