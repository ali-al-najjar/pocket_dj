import { useState ,useEffect } from 'react';
import axios from "axios";
import Button from '../../Button/button';
import './user.css';

const User = ({user_id, first_name , last_name, email}) => {
  const token = localStorage.getItem('token');
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
  }, []);

  const handleSubmit = async() =>{
      try {
        const res = await axios({
          method: 'Put',
          url: `http://192.168.1.127:8000/user/delete/${user_id}`,
          headers: {
            Authorization: 'Token ' + token,
          },
        });
        setDeleted(true);
      } catch (err) {
        console.log(err);
      }
    };

    if (deleted) {
      return null;
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
export default User