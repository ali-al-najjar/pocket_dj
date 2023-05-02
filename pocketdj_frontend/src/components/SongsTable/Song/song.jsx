import { useState , useEffect} from 'react';
import axios from "axios";
import Button from '../../Button/button';
import './song.css';

const Song = ({song_id, name , artist_name}) => {
  const token = localStorage.getItem('token');
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
  }, []);

  const handleSubmit = async() =>{
      try {
        const res = await axios({
          method: 'Put',
          url: `http://192.168.1.127:8000/song/delete/${song_id}`,
          headers: {
            Authorization: 'Token ' + token,
          },
        });
        console.log(res.data);
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
        <p>{artist_name}</p>
        <Button className = {"delete_button"} name={"Delete"} onSubmit={handleSubmit}/>
        </div>
    )
      
      }
export default Song;