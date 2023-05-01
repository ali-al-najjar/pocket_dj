import Button from "../Button/button";
import Input from "../Input/input";
import './uploadSong.css'
import {useState } from "react";
import axios from "axios"

const UploadSong = ({danceability,duration,energy,instrumentalness,key,liveness,loudness,mode,speechiness,tempo,time_signature,valence,camelot}) => {

  const [name, setName] = useState("");
  const [cover, setCover] = useState("");
  const [link, setLink] = useState("");

  const handleCover = (event) => {
    const file = event.target.files[0];
    const data = new FormData();
    data.append("cover", file);
    setCover(file);
  }

  const handleName = (e) =>{
    setName(e.target.value)
  }

  const handleAudio = (e) =>{

  }

  const handleSubmit = () =>{

  }


  return (
    <div className="profile_page">
    <img className='song_cover'/>
      <Input name="Song Cover" type ="file" onChange={handleCover} />
      <Input name="Song Name" type ="text" onChange={handleName} />
      <Input name="Song Audio File" type ="file" onChange={handleAudio} />
      <Input name="Mood" type ="file" onChange={handleAudio} />
      <Button className ={"button"} name ={'Submit'} onClick={handleSubmit}/>
    
    </div>
  )
}

export default UploadSong;