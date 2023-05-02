import axios from 'axios';
import Button from "../Button/button";
import { useState ,useEffect } from 'react';
import Input from "../Input/input";
import './profile.css'

const ProfileInput = () => {
 const token =localStorage.getItem('token');
 const [first_name, setFirstName] = useState();
 const [last_name, setLastName] = useState();
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
    console.log(res.data);
    setFirstName(res.data.first_name);
    setLastName(res.data.last_name);
    setProfileURL(res.data.profile);
  } catch (err) {
    console.log(err);
  }
  }


  const onSubmit = () =>{
    const data = new FormData();
    data.append("first_name", first_name);
    data.append("last_name", last_name);
    data.append("profile", profileData);

    axios.put("http://192.168.1.127:8000/update/profile",data,{
      headers: {
        Authorization: 'Token ' + token,
        "Content-Type": "multipart/form-data"
      }
    })
    .then((res)=>{
      console.log(res.data);
      setMessage("Succefully Updated")
    })
    .catch((err=>{
      console.log(err.request.response);
    }))
  }

  const updateFirstName = (e) =>{
    setFirstName(e.target.value)
  }
  const updateLastName = (e) =>{
    setLastName(e.target.value)
  }
  
  const handleProfileData = (event) => {
    const file = event.target.files[0];
    // const data = new FormData();
    // data.append("profile", file);
    setProfile(file);
  }

  const handleProfileDOM = (event) => {
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setProfileURL(imageUrl);
    console.log(profile);
  }
  
  const handleProfile = (event) =>{
    handleProfileDOM(event);
    handleProfileData(event);
  }

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <div className="profile_page">
    <h2 className="profile_title">Hello {first_name}</h2>
    <img className='user_image' src={profile}/>
      <Input name="Profile Picture" type ="file" onChange={handleProfile} />
      <Input name="First Name" type ="text" value={first_name} onChange={updateFirstName} />
      <Input name="Last Name" type ="text" value={last_name} onChange={updateLastName} />
      <Button className ={"button"} name ={'Submit'} onSubmit={onSubmit}/>
      <p className="message">{message}</p>
    
    </div>
  )
}

export default ProfileInput;