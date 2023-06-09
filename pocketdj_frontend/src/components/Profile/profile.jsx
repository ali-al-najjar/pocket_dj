import axios from 'axios';
import Button from "../Button/button";
import { useState ,useEffect } from 'react';
import Input from "../Input/input";
import './profile.css'
import { useSelector } from 'react-redux';
const base_url = process.env.REACT_APP_API_URL

const ProfileInput = () => {
const user = useSelector((state) => state.user);
 const token =localStorage.getItem('token');
 const [original_first_name, setOriginalFirstName] = useState();
 const [original_last_name, setOriginalLastName] = useState();
 const [original_username, setOriginalUsername] = useState();
 const [original_profileData, setOriginalProfile] = useState();
 const [first_name, setFirstName] = useState();
 const [last_name, setLastName] = useState();
 const [username, setUsername] = useState();
 const [profileData, setProfile] = useState();
 const [profile,setProfileURL] = useState();
 const [message,setMessage] = useState();

  const getDetails = async() =>{
    try {
    const res = await axios({
      method: 'get',
      url: `http://192.168.1.127:8000/get-details`,
      headers: {
        Authorization: 'Token ' + token,
      },
    });
    setFirstName(res.data.first_name);
    setLastName(res.data.last_name);
    setUsername(res.data.username);
    setProfileURL(res.data.profile);
    setProfile(res.data.profileData);
    setOriginalUsername(res.data.username)
    setOriginalFirstName(res.data.first_name);
    setOriginalLastName(res.data.last_name);
    setOriginalProfile(res.data.profile);
  } catch (err) {
    console.log(err);
  }
  }

  const onSubmit = () =>{
    const data = new FormData();
    if (first_name !== original_first_name) {
      data.append("first_name", first_name);
    }
    if (last_name !== original_last_name) {
      data.append("last_name", last_name);
    }
    if (profileData) {
      data.append("profile", profileData);
    }
    if (username!== original_username) {
      data.append("username", username);
    }

    if (data.has("first_name") || data.has("last_name") || data.has("profile") || data.has("username")) {axios.put(`${base_url}/update/profile`,data,{
      headers: {
        Authorization: 'Token ' + token,
        "Content-Type": "multipart/form-data"
      }
    })
    .then((res)=>{
      setMessage("Succefully Updated")
    })
    .catch((err=>{
      console.log(err.request.response);
    }))}else{
      setMessage("No Changes are made!")
    }
  }

  const updateFirstName = (e) =>{
    setFirstName(e.target.value)
  }
  const updateUsername = (e) =>{
    setUsername(e.target.value)
  }
  const updateLastName = (e) =>{
    setLastName(e.target.value)
  }
  
  const handleProfileData = (event) => {
    const file = event.target.files[0];
    if(file){setProfile(file)};
  }

  const handleProfileDOM = (event) => {
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setProfileURL(imageUrl);
  }
  
  const handleProfile = (event) =>{
    const file = event.target.files[0];
    if (file) {
      handleProfileDOM(event);
      handleProfileData(event);
    }
  }

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <div className="profile_page">
    <div className="cover_image">
    <h2 className="profile_title">Hello {first_name}</h2>
    <img className='user_image' src={profile}/>
      <Input name="Profile Picture" type ="file" onChange={handleProfile} />
    </div>
    <div className="profile_inputs">
      <Input name="Username" type ="text" value={username} onChange={updateUsername} />  
      <Input name="First Name" type ="text" value={first_name} onChange={updateFirstName} />
      <Input name="Last Name" type ="text" value={last_name} onChange={updateLastName} />
      <Button className ={"button"} name ={'Submit'} onSubmit={onSubmit}/>
      <p className="message">{message}</p>
      </div>
    </div>
  )
}

export default ProfileInput;