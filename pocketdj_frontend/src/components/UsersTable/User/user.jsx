import { useState } from 'react';
import axios from "axios";
import Button from '../../Button/button';
import './user.css';

const User = ({user_id, first_name , last_name, email}) => {


  const handleSubmit = () =>{

  }

    return(
        <div className='user'>
        <p>{first_name}</p>
        <p>{last_name}</p>
        <p>{email}</p>
        <Button name={"Delete"} onSubmit={handleSubmit}/>
        </div>
    )
      
      }
export default User