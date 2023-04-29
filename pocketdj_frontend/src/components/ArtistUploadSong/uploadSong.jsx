import Button from "../Button/button";
import Input from "../Input/input";
import './uploadSong.css'

const UploadSong = ({ onChange, onSubmit, onUpload,first_name,bio,image,message}) => {

  return (
    <div className="profile_page">
    <h2 className="profile_title">Hello {first_name}</h2>
    <img className='song_cover' src={image}/>
      <Input name="Song Cover" type ="file" onChange={onUpload} />
      <Input name="Song Name" type ="text" onChange={onUpload} />
      <Input name="Song Audio File" type ="file" onChange={onUpload} />
      <Button className ="button" name ={'Submit'} onClick={onSubmit}/>
      <p className="message">{message}</p>
    
    </div>
  )
}

export default UploadSong;