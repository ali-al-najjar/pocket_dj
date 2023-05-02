import { useEffect, useState } from 'react';
import axios from 'axios';

const ArtistsSelectList = ({ value, onChange }) => {
  const [artists, setArtists] = useState([]);
  const [selectedArtist, setSelectedArtist] = useState({ id: null, name: "" });
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
      console.log(res.data);
      setArtists(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getArtists();
  }, []);

const handleSelect = (event) => {
  setSelectedArtist(event.target.value);
  onChange(event);
};


  return (
    <div>
      <select className='select_list' value={value.id} onChange={handleSelect}>
        <option value="">Select an artist</option>
        {artists.map((artist) => (
          <option key={artist.id} value={artist.id}>
            {artist.first_name} {artist.last_name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ArtistsSelectList;
