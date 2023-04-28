import axios from "axios"

const UploadSong = () => {

  const getDetails = async (e) =>{
  e.preventDefault()
  
  await axios.post("https://accounts.spotify.com/api/token", "grant_type=client_credentials", {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Authorization": "Basic " + btoa("9047ddd2f2a047e18fb78c8c62585c8c:8fe2b6521eb04d748be2beb2469a532d")
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
    });
  
 
  
  
  }


return (
    <button className = "btn submit_button" type="submit" onClick={getDetails}>Get Details</button>
);
}

export default UploadSong;
