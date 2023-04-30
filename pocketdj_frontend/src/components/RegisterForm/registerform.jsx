import Input from "../Input/input";
import  '../LoginForm/loginform.css';
import Button from "../Button/button";
import {useState } from "react";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setConfirmPassword] = useState("");
  const [profile, setProfile] = useState("");
  const[error,setError]=useState("");

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
const handleProfile = (e)=>{
  const picture = e.target.files[0];
  const reader = new FileReader();
  reader.onload = () => {
    const base64String = reader.result;
    setProfile(base64String);
  };
  reader.readAsDataURL(picture);
  setProfile(e.target.value)
}


  const validatePassword=(password)=> {
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        return passwordRegex.test(password);
      }
      
  
  const handleSubmit=()=>{
    // if (validateEmail(username)){
        if(validatePassword(password)){
          const data = {
            first_name: first_name,
            last_name: last_name,
            email: email,
            username: username,
            password: password,
            password2: password2,
            profile: profile
          };
          console.log(data)
//     axios.post("http://127.0.0.1:8000/api/v0.0.1/auth/login",data).then((res) => {
//         console.log(res)
//         localStorage.setItem('token',res.data.authorisation.token);
//         localStorage.setItem('email',res.data.user.email);
//         window.location.href="http://localhost:3000/code_editor"  
// }
//     ).catch((err) => {
//         console.log(err);
//     })
// }else(setError("Invalid credentials"))
// }else(setError("Invalid credentials"))

  }}
 
    return(
      <>
        <div className="input_box">
        <Input name={"First Name"} type={"text"} onChange={handleFirstName} />
        <Input name={"Last Name"} type={"text"} onChange={handleLastName} />
        <Input name={"Email"} type={"email"} onChange={handleEmail} />
        <Input name={"Username"} type={"text"} onChange={handleUsername} />
        <Input name={"Password"} type={"password"} onChange={handlePassword}/>
        <Input name={"Confirm Password"} type={"password"} onChange={handleConfirmPassword}/>
        <Input name={"Profile Picture"} type={"file"} onChange={handleProfile}/>
        <Button name={"Register"} onSubmit={handleSubmit}/>
        <p className="error"><br/>{error}</p>
        </div>
        <p className="links_p">Already have an account? <Link className="links" to ="/artist">Login instead</Link></p>
        </> 
    );}

export default RegisterForm;
