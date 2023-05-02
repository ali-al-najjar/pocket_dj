import { useEffect, useState } from 'react';
import axios from 'axios';

const MoodsSelectList = ({ value, onChange }) => {
  const [moods, setMoods] = useState([]);
  const [selectedMood, setSelectedMood] = useState("");

  const token = localStorage.getItem('token');

  const getMoods = async () => {
    try {
      const res = await axios({
        method: 'GET',
        url: 'http://192.168.1.127:8000/moods',
        headers: {
          Authorization: 'Token ' + token,
        },
      });
      setMoods(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMoods();
  }, []);

  const handleSelect = (event) => {
    setSelectedMood(event.target.value);
    onChange(event);
  };

  return (
    <div>
      <select className='select_list' value={value.id} onChange={handleSelect}>
        <option value="">Select a Mood</option>
        {moods.map((mood) => (
          <option key={mood.id} value={mood.id}>
            {mood.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MoodsSelectList;
