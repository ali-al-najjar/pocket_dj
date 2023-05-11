import Button from "../Button/button";
import Input from "../Input/input";
import './uploadMood.css'
import {useState } from "react";
import axios from "axios"

const base_url = process.env.REACT_APP_API_URL

const UploadMood = () => {
  const token = localStorage.getItem('token');
  const [name, setName] = useState("");
  const [cover, setCover] = useState("");
  const [coverURL,setURL] = useState(" ");
  const [low_danceability, setLowValue] = useState("");
  const [high_danceability, setHighValue] = useState("");
  const [message, setMessage] = useState("");

  const handleCover = (event) => {
    const file = event.target.files[0];
    const data = new FormData();
    data.append("cover", file);
    setCover(file);
    setURL(URL.createObjectURL(file));
  }

  const handleName = (e) =>{
    setName(e.target.value)
  }

  const handleLowChange = (e) => {
    const { value } = e.target;
    const regex = /^[0-9]*\.?[0-9]{0,2}$/;
    if (regex.test(value) && Number(value) <= Number(high_danceability)) {
      setLowValue(value);
    }
  };

  const handleHighChange = (e) => {
    const { value } = e.target;
    const regex = /^[0-9]*\.?[0-9]{0,2}$/;
    if (regex.test(value) && Number(value) >= Number(low_danceability)) {
      setHighValue(value);
    }
  };

  const handleSubmit = () =>{
            const data = new FormData();
            data.append("name", name);
            data.append("cover", cover);
            data.append("isDeleted" , true);
            data.append("low_danceability", low_danceability);
            data.append("high_danceability", high_danceability);
            
            axios.post(`${base_url}/mood/create`,data,{
              headers: {
                Authorization: 'Token ' + token,
                "Content-Type": "multipart/form-data"
              }
            })
            .then((res)=>{
              console.log(res.data);
              setMessage("Succefully Added")
              setCover("")
              setName("")
            })
            .catch((err=>{
              console.log(err.request.response);
            }))
  
    }


  return (
    <div className="mood_page">
    <img className='song_cover'src={coverURL}/>
      <Input name="Mood Cover" type ="file" onChange={handleCover} />
      <Input name="Mood Name" type ="text" onChange={handleName} />
      <Input name="Low Danceability" type ="text" onChange={handleLowChange} />
      <Input name="High Danceability" type ="text" onChange={handleHighChange} />
      <Button className ={"button"} name ={'Submit'} onSubmit={handleSubmit}/>
      <p className="message">{message}</p>
    
    </div>
  )
}

export default UploadMood;