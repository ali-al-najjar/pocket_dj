import Input from "../Input/input";
import  './loginform.css';
import Button from "../Button/button";
import {useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/slices/UserDetailSlice';
import { setToken } from '../../redux/slices/UserAuthSlice';
import { setRole } from "../../redux/slices/UserRoleSlice";

const base_url = process.env.REACT_APP_API_URL

const LoginForm = ({role}) => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const[error,setError]=useState("");

const navigator = useNavigate();
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
        if(validatePassword(password)){
          const data = {
            username: username,
            password: password
          };
          axios.post(`${base_url}/login`,data,{
            headers: {
              'Content-Type': 'application/json'
            }
          })
          .then((res)=>{
            setError("");
            if (role === "Artist" && res.data.role === role){
            window.localStorage.setItem('token',res.data.token)
            dispatch(setToken(res.data.token));
            dispatch(setUser(res.data.user));
            dispatch(setRole(res.data.role));
            navigator("/artist/upload")
          }
            else if (role === "Admin" && res.data.role === role){
            dispatch(setToken(res.data.token));
            window.localStorage.setItem('token',res.data.token)
            dispatch(setUser(res.data.user));
            dispatch(setRole(res.data.role));
            navigator("/admin/users")
          }
            else (
              setError(`Access Denied.`)
            )
          })
          .catch((err=>{
            console.log(err.request.response);
            setError("Invalid Credentials")
          }))
      }else(setError("Invalid Password"))

  }
 
    return(
      <>
        <div className="input_box">
        <Input name={"Username"} type={"text"} onChange={handleUsername} />
        <Input name={"Password"} type={"password"} onChange={handlePassword}/>
        </div>
        <div className = "bottom_box">
        <Button className ={"button"} name={"Login"} onSubmit={handleSubmit}/>
        <p className="error"><br/>{error}</p>
        </div>
      </> 
    );}

export default LoginForm;
