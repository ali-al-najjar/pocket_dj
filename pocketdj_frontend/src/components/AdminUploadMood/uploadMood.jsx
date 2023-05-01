import Button from "../Button/button";
import Input from "../Input/input";
import './uploadMood.css'
import {useState } from "react";
import axios from "axios"

const UploadMood = () => {

  const [name, setName] = useState("");
  const [cover, setCover] = useState("");

  const handleCover = (event) => {
    const file = event.target.files[0];
    const data = new FormData();
    data.append("cover", file);
    setCover(file);
  }

  const handleName = (e) =>{
    setName(e.target.value)
  }

  const handleSubmit = () =>{

  }


  return (
    <div className="profile_page">
    <img className='song_cover'/>
      <Input name="Mood Cover" type ="file" onChange={handleCover} />
      <Input name="Mood Name" type ="text" onChange={handleName} />
      <Button className ={"button"} name ={'Submit'} onClick={handleSubmit}/>
    
    </div>
  )
}

export default UploadMood;