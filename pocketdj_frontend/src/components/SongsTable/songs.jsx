import { useEffect, useState } from 'react';
import axios from 'axios';
import Song from './Song/song';
import './songs.css'

const Songs = () => {
  const [responses, setResponses] = useState([]);

  const token = localStorage.getItem('token');
  const getSongs = async () => {
    try {
      const res = await axios({
        method: 'GET',
        url: 'http://192.168.1.127:8000/songs',
        headers: {
          Authorization: 'Token ' + token,
        },
      });
      console.log(res.data);
      setResponses(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getSongs();
  }, []);

  return (
  <div className='fetch_users'>
                <div className='fetch'>
                    {responses.map((response) => {
                        return <Song key={response.id} song_id={response.id} name={response.name} artist_name={response.artist_name + ' ' + response.artist_last_name}/>
                    })}
                </div>
                </div>)
};

export default Songs;
