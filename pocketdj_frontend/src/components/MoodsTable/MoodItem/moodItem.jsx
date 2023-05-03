import { useState , useEffect} from 'react';
import axios from "axios";
import Button from '../../Button/button';
import './moodItem.css';

const MoodItem = ({mood_id, name}) => {
  const token = localStorage.getItem('token');
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
  }, []);

  const handleSubmit = async() =>{
      try {
        const res = await axios({
          method: 'Put',
          url: `http://192.168.1.127:8000/mood/delete/${mood_id}`,
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
        <p>{name}</p>
        <Button className = {"delete_button"} name={"Delete"} onSubmit={handleSubmit}/>
        </div>
    )
      
      }
export default MoodItem;