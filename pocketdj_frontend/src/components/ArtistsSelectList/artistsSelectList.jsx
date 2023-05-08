import { useEffect, useState } from 'react';
import axios from 'axios';

const base_url = process.env.REACT_APP_API_URL

const ArtistsSelectList = ({ value, onChange }) => {
  const [artists, setArtists] = useState([]);
  const [selectedArtist, setSelectedArtist] = useState({ id: null, name: "" });
  const token = localStorage.getItem('token');

  const getArtists = async () => {
    try {
      const res = await axios({
        method: 'GET',
        url: `${base_url}/artists`,
        headers: {
          Authorization: 'Token ' + token,
        },
      });
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
    <div className='select_input'>
      <div className="single_input_label">Select song's Artist</div>
      <select className='select_list' value={value.id} onChange={handleSelect}>
        <option value="">Select An Artist</option>
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
