import { useEffect, useState } from 'react';
import axios from 'axios';
import User from './User/user';

const Users = () => {
  const [responses, setResponses] = useState([]);

  const token = localStorage.getItem('token');
  const getUsers = async () => {
    try {
      const res = await axios({
        method: 'GET',
        url: 'http://192.168.1.127:8000/users',
        headers: {
          Authorization: 'Token ' + token,
        },
      });
      console.log(res.data); // log the response data
      setResponses(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCourses();
  }, []);

  return (
  <div className='fetch-users'>
                <div className='fetch'>
                    {responses.map((response) => {
                        return <Course key={response._id} title={response.title} description={response.description} instructor={response.instructor} duration={response.duration}/>
                    })}
                </div>
                </div>)
};

export default Courses;
