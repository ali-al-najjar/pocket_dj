import { useState , useEffect} from 'react';
import axios from "axios";
import Button from '../../Button/button';
import './moodItem.css';
const base_url = process.env.REACT_APP_API_URL

const MoodItem = ({mood_id, name}) => {
  const token = localStorage.getItem('token');
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
  }, []);

  const handleSubmit = async() =>{
      try {
        const res = await axios({
          method: 'Put',
          url: `${base_url}/mood/delete/${mood_id}`,
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
        <div className='mood'>
        <div className="mood_name">{name}</div>
        <Button className = {"delete_button"} name={"Delete"} onSubmit={handleSubmit}/>
        </div>
    )
      
      }
export default MoodItem;