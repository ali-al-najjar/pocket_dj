import Button from "../Button/button";
import Input from "../Input/input";
import '../AdminUploadSong/UploadSong.css'
import {useEffect, useState } from "react";
import axios from "axios"
import MoodsSelectList from "../MoodsSelectList/moodsSelectList";
import { useSelector } from 'react-redux';

const client = process.env.REACT_APP_CLIENT_KEY
const secret = process.env.REACT_APP_CLIENT_SECRET
const base_url = process.env.REACT_APP_API_URL

const UploadSong = () => {
  const user = useSelector((state) => state.user);
  const [isFirstButtonClicked, setIsFirstButtonClicked] = useState(false);
  const [name, setName] = useState("");
  const [cover, setCover] = useState("");
  const [link, setLink] = useState("");
  const [coverURL,setURL] = useState(" ");
  const [message, setMessage] = useState("");
  const [danceability, setDanceability] = useState("");
  const [duration, setDuration] = useState("");
  const [energy, setEnergy] = useState("");
  const [instrumentalness, setInstrumentalness] = useState("");
  const [key, setKey] = useState("");
  const [liveness, setLiveness] = useState("");
  const [loudness, setLoudness] = useState("");
  const [mode, setMode] = useState("");
  const [speechiness, setSpeechiness] = useState("");
  const [tempo, setTempo] = useState("");
  const [time_signature, setTimeSignature] = useState("");
  const [valence, setValence] = useState("");
  const [camelot, setCamelot] = useState("");
  const[error,setError]=useState("");
  const [selectedArtist, setSelectedArtist] = useState({ id: null, name: "" });
  const [selectedMood, setSelectedMood] = useState({ id: null, name: "" });
  const Usertoken =localStorage.getItem('token');
  const [first_name, setFirstName] = useState();
  const [last_name, setLastName] = useState();
  const [id, setId] = useState();

  const getUserDetails = async() =>{
    try {
    const res = await axios({
      method: 'get',
      url: `http://192.168.1.127:8000/get-details`,
      headers: {
        Authorization: 'Token ' + Usertoken,
      },
    });
    setFirstName(res.data.first_name);
    setLastName(res.data.last_name);
    setId(res.data.id)
  } catch (err) {
    console.log(err);
  }
  }

  const getDetails = async (e) =>{
  e.preventDefault()
  await axios.post("https://accounts.spotify.com/api/token", "grant_type=client_credentials", {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Authorization": "Basic " + btoa(`${client}:${secret}`)
    }
  })
    .then(async response => {
      const token = response.data.access_token
      await axios.get('https://api.spotify.com/v1/search', {
          params: {
            q: `track:${name} artist:${first_name}" "${last_name}`,
            type: 'track',
            market: 'US',
            limit: 1
          },
          headers: {
            'Authorization': 'Bearer ' + token
          }
        })
        .then(async response => {
          const id = response.data.tracks.items[0].id
          await axios.get(`https://api.spotify.com/v1/audio-features/${id}`, {
            headers: {
              'Authorization': 'Bearer ' + token
            }
          })
          .then(async response => {
            setDanceability(response.data.danceability);
            setDuration(parseFloat((response.data.duration_ms/60000).toFixed(2)));
            setEnergy(response.data.energy);
            setInstrumentalness(response.data.instrumentalness);
            setKey(response.data.key);
            setLiveness(response.data.liveness);
            setLoudness(response.data.loudness);
            setMode(response.data.mode);
            setSpeechiness(response.data.speechiness);
            setTempo(response.data.tempo);
            setTimeSignature(response.data.time_signature);
            setValence(response.data.valence);
            handleFirstButtonClick();
            setMessage("You're ready to submit.")
          })
          .catch(error => {
            console.log(error);
          });
        })
        .catch(error => {
          console.log(error);
        });
      })
    .catch(error => {
      console.log(error);
    });}
  
    const camelotArray = {
      'A': { major: '11B', minor: '8A' },
      'Bb': { major: '6B', minor: '3A' },
      'B': { major: '1B', minor: '10A' },
      'C': { major: '8B', minor: '5A' },
      'C#': { major: '3B', minor: '12A' },
      'D': { major: '10B', minor: '7A' },
      'Eb': { major: '5B', minor: '2A' },
      'E': { major: '12B', minor: '9A' },
      'F': { major: '7B', minor: '4A' },
      'F#': { major: '2B', minor: '11A' },
      'G': { major: '9B', minor: '6A' },
      'Ab': { major: '4B', minor: '1A' }
    };

    const KeysArray = {
      '0': 'C',
      '1': 'C#',
      '2': 'D',
      '3': 'Eb',
      '4': 'E',
      '5': 'F',
      '6': 'F#',
      '7': 'G',
      '8': 'Ab',
      '9': 'A',
      '10': 'Bb',
      '11': 'B'
    };
    
    const getCamelot = (key, mode) => {
      const keyName = KeysArray[key];
      const camelot = camelotArray[keyName];
      
      if (camelot) {
        if (mode === 0) {
          return camelot.minor;
        } else if (mode === 1) {
          return camelot.major;
        }
      }
      
      return null;
    };

  const handleFirstButtonClick = () => {
      setIsFirstButtonClicked(true);
    }


  const handleArtistChange = (event) => {
    const selectedId = event.target.value;
    const selectedName = event.target.options[event.target.selectedIndex].text;
    setSelectedArtist({ id: selectedId, name: selectedName });
  };

  const handleMoodChange = (event) => {
    const selectedId = event.target.value;
    const selectedName = event.target.options[event.target.selectedIndex].text;
    setSelectedMood({ id: selectedId, name: selectedName });
  };
  
  const handleCover = (e) => {
    const file = e.target.files[0];
    const data = new FormData();
    data.append("cover", file);
    setCover(file);
    setURL(URL.createObjectURL(file))
  }

  const handleName = (e) =>{
    setName(e.target.value)
  }

  const handleAudio = (e) =>{
    const file = e.target.files[0];
    const data = new FormData();
    data.append("link", file);
    setLink(file);
  }

  const handleSubmit = () =>{
    const camelot = getCamelot(key, mode);
    setCamelot(camelot);
    const token = localStorage.getItem('token');
      const data = {
        "name" : name,
        "cover" : cover,
        "link" : link,
        "mood" : selectedMood.id,
        "artist" : id,
        "danceability" : danceability,
        "duration"  : duration,
        "energy" : energy,
        "instrumentalness" :instrumentalness,
        "key" : key,
        "liveness" :liveness,
        "loudness" : loudness,
        "mode" : mode,
        "speechiness" : speechiness,
        "tempo" : tempo,
        "time_signature" : time_signature,
        "valence" : valence,
        "camelot" : camelot
      }
      axios.post(`${base_url}/song/create`,data,{
        headers: {
          Authorization: 'Token ' + token,
          "Content-Type": "multipart/form-data"
        }
      })
      .then((res)=>{
        setMessage("Succefully Added")
      })
      .catch((err=>{
        console.log(err.request.response);
      }))
      
      
  }
  useEffect(() => {
    getUserDetails();
  }, []);

  return (
    <div className="profile_page">
    <div className="cover_image">
    <img className='song_cover' src={coverURL}/>
      <Input name="Song Cover" type ="file" onChange={handleCover} />
    </div>
    <div className="inputs">
      <Input name="Song Name" type ="text" onChange={handleName} />
      <Input name="Song Audio File" type ="file" onChange={handleAudio} />
      <MoodsSelectList onChange={handleMoodChange} value={selectedMood} />
      <div className = "buttons">
      <Button className ={"button"} name ={'Prepare Song to Upload'} onSubmit={getDetails}/>
      <Button className ={"button"} name ={'Submit'} onSubmit={handleSubmit} isDisabled={!isFirstButtonClicked}/>
      </div>
      <p className="message">{message}</p>
      </div>
    </div>
  )
}

export default UploadSong;