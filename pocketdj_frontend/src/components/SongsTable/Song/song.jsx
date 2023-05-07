import { useState , useEffect} from 'react';
import axios from "axios";
import Button from '../../Button/button';
import './song.css';

const base_url = process.env.REACT_APP_API_URL

const Song = ({song_id, name , artist_name}) => {
  const token = localStorage.getItem('token');
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
  }, []);

  const handleSubmit = async() =>{
      try {
        const res = await axios({
          method: 'Put',
          url: `${base_url}/song/delete/${song_id}`,
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
        <div className='song'>
        <div className="song_name">{name}</div>
        <div className="artist_name">{artist_name}</div>
        <Button className = {"delete_button"} name={"Delete"} onSubmit={handleSubmit}/>
        </div>
    )
      
      }
export default Song;