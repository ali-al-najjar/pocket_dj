import { useEffect, useState } from 'react';
import axios from 'axios';
import User from './User/user';
import './users.css'

const base_url = process.env.REACT_APP_API_URL

const Users = () => {
  const [responses, setResponses] = useState([]);
  console.log(base_url)
  const token = localStorage.getItem('token');
  const getUsers = async () => {
    console.log(base_url)
    try {
      const res = await axios({
        method: 'GET',
        url: `${base_url}/users`,
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
    getUsers();
  }, []);

  return (
                <div className='fetch'>
                    {responses.map((response) => {
                        return <User key={response.id} user_id={response.id} first_name={response.first_name} last_name={response.last_name} email={response.email}/>
                    })}
                </div>
                )
};

export default Users;
