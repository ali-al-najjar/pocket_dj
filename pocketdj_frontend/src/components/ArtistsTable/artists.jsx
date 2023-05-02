import { useEffect, useState } from 'react';
import axios from 'axios';
import Artist from './Artist/artist';
import './artists.css'

const Artists = () => {
  const [responses, setResponses] = useState([]);

  const token = localStorage.getItem('token');
  const getArtists = async () => {
    try {
      const res = await axios({
        method: 'GET',
        url: 'http://192.168.1.127:8000/artists',
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
    getArtists();
  }, []);

  return (
                <div className='fetch'>
                    {responses.map((response) => {
                        return <Artist key={response.id} user_id = {response.id} first_name={response.first_name} last_name={response.last_name} email={response.email}/>
                    })}
                </div>
                )
};

export default Artists;
