import { useEffect, useState } from 'react';
import axios from 'axios';
import User from './User/user';
import './users.css'

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
    getUsers();
  }, []);

  return (
  <div className='fetch_users'>
                <div className='fetch'>
                    {responses.map((response) => {
                        return <User key={response.id} user_id={response.id} first_name={response.first_name} last_name={response.last_name} email={response.email}/>
                    })}
                </div>
                </div>)
};

export default Users;
