import { useState } from 'react';
import axios from "axios";
import Button from '../../Button/button';

const User = ({user_id, first_name , last_name, email}) => {
  // const [feedback, setFeedback] = useState("");

  const token = localStorage.getItem('token');


    return(
        <div className='user'>
        <p>{first_name}</p>
        <p>{last_name}</p>
        <p>{email}</p>
        {
        <Button className="btn submit_button">Delete</Button>
        }
        </div>
    )
      
      }
export default User