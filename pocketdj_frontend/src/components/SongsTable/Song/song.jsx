import { useState } from 'react';
import axios from "axios";
import Button from '../../Button/button';
import './song.css';

const Song = ({song_id, name , artist_name}) => {


  const handleSubmit = () =>{

  }

    return(
        <div className='user'>
        <p>{name}</p>
        <p>{artist_name}</p>
        {/* <p>{email}</p> */}
        <Button className = {"delete_button"} name={"Delete"} onSubmit={handleSubmit}/>
        </div>
    )
      
      }
export default Song;