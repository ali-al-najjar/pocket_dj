import { useEffect, useState } from 'react';
import axios from 'axios';
import Song from './Song/song';
import './songs.css'

const base_url = process.env.REACT_APP_API_URL

const Songs = () => {
  const [responses, setResponses] = useState([]);

  const token = localStorage.getItem('token');
  const getSongs = async () => {
    try {
      const res = await axios({
        method: 'GET',
        url: `${base_url}/songs`,
        headers: {
          Authorization: 'Token ' + token,
        },
      });
      setResponses(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getSongs();
  }, []);

  return (
                <div className='fetch'>
                    {responses.map((response) => {
                        return <Song key={response.id} song_id={response.id} name={response.name} artist_name={response.artist_name + ' ' + response.artist_last_name}/>
                    })}
                </div>
                )
};

export default Songs;
