import { useState } from 'react';
import axios from "axios";
import Button from '../../Button/button';
import './artist.css';

const Artist = ({user_id, first_name , last_name, email}) => {


  const handleSubmit = () =>{

  }

    return(
        <div className='user'>
        <p>{first_name}</p>
        <p>{last_name}</p>
        <p>{email}</p>
        <Button className = {"delete_button"} name={"Delete"} onSubmit={handleSubmit}/>
        </div>
    )
      
      }
export default Artist