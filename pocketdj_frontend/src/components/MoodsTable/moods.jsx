import { useEffect, useState } from 'react';
import axios from 'axios';
import MoodItem from './MoodItem/moodItem';
import './moods.css'

const base_url = process.env.REACT_APP_API_URL

const Moods = () => {
  const [responses, setResponses] = useState([]);

  const token = localStorage.getItem('token');
  const getMoods = async () => {
    try {
      const res = await axios({
        method: 'GET',
        url: `${base_url}/moods`,
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
    getMoods();
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
