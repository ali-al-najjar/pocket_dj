import { useEffect, useState } from 'react';
import axios from 'axios';
import MoodItem from './MoodItem/moodItem';
import './moods.css'

const Moods = () => {
  const [responses, setResponses] = useState([]);

  const token = localStorage.getItem('token');
  const getSongs = async () => {
    try {
      const res = await axios({
        method: 'GET',
        url: 'http://192.168.1.127:8000/moods',
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
                        return <MoodItem key={response.id} mood_id={response.id} name={response.name}/>
                    })}
                </div>
                )
};

export default Moods;
