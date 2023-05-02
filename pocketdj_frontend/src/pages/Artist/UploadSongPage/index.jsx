import axios from "axios"
import Navigation from "../../../components/Navigation/navigation"
import UploadSong from "../../../components/ArtistUploadSong/uploadSong"
import {useState } from "react";
import Button from "../../../components/Button/button";

const client = process.env.REACT_APP_CLIENT_KEY
const secret = process.env.REACT_APP_CLIENT_SECRET

const UploadSongPage = () => {
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
  const[message,setMessage]=useState("");


  const getDetails = async (e) =>{
  e.preventDefault()
  await axios.post("https://accounts.spotify.com/api/token", "grant_type=client_credentials", {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Authorization": "Basic " + btoa(`${client}:${secret}`)
    }
  })
    .then(async response => {
      console.log(response.data);
      const token = response.data.access_token
      await axios.get('https://api.spotify.com/v1/search', {
          params: {
            q: 'track:Namet Nenna artist:Ruby',
            type: 'track',
            market: 'US',
            limit: 1
          },
          headers: {
            'Authorization': 'Bearer ' + token
          }
        })
        .then(async response => {
          console.log(response.data.tracks.items[0].id);
          const id = response.data.tracks.items[0].id
          console.log(token)
          await axios.get(`https://api.spotify.com/v1/audio-features/${id}`, {
            headers: {
              'Authorization': 'Bearer ' + token
            }
          })
          .then(response => {
            console.log(response.data);
            setDanceability(response.data.danceability);
            setDuration(response.data.duration_ms);
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
    
    const getCamelot = (key) => {
      const keyName = key.replace("b", "♭");
      const camelotObj = camelotArray[keyName];
      
      if (camelotObj) {
        return {
          major: camelotObj.major,
          minor: camelotObj.minor
        };
      } else {
        return null;
      }
    };


return (
    <div className="profile_container">
    <div className="nav_box">
    <Navigation 
    role = "Artist"/>
    </div>
    <div className="page_box">
    <h2 className="heading">Upload your Song</h2>
    <UploadSong
      danceability = {danceability}
      duration = {duration}
      energy = {energy}
      instrumentalness = {instrumentalness}
      key = {key}
      liveness = {liveness}
      loudness = {loudness}
      mode = {mode}
      speechiness = {speechiness}
      tempo = {tempo}
      time_signature = {time_signature}
      valence = {valence}
      camelot = {camelot}
    />
    </div>
    
    </div>
);
}

export default UploadSongPage;
