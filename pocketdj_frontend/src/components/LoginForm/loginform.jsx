import Input from "../Input/input";
import  './loginform.css';
import Button from "../Button/button";
import {useState } from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const[error,setError]=useState("");

const handleUsername=(e)=>{
      setUsername(e.target.value)
  }
 const handlePassword=(e)=>{
     setPassword(e.target.value)
  }

  const validatePassword=(password)=> {
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        return passwordRegex.test(password);
      }
      
  
  const handleSubmit=()=>{
    // if (validateEmail(username)){
        if(validatePassword(password)){
          const data = {
            username: username,
            password: password
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
        <Input name={"Username"} type={"text"} onChange={handleUsername} />
        <Input name={"Password"} type={"password"} onChange={handlePassword}/>
        <Button name={"Login"} onSubmit={handleSubmit}/>
        <p className="error"><br/>{error}</p>
        </div>
        <p className="links_p">New to Artists portal? <Link className="links" to ="/artist/register">Sign up</Link></p>
        </> 
    );}

export default LoginForm;
