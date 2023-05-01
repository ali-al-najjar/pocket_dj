import Button from "../Button/button";
import Input from "../Input/input";
import './profile.css'

const ProfileInput = ({ onChange, onSubmit, onUpload,first_name,bio,image,message}) => {

  return (
    <div className="profile_page">
    <h2 className="profile_title">Hello {first_name}</h2>
    <img className='user_image' src={image}/>
      <Input name="Profile Picture" type ="file" onChange={onUpload} />
      <Input name="First Name" type ="text" onChange={onUpload} />
      <Input name="Last Name" type ="text" onChange={onUpload} />
      <Button className ={"button"} name ={'Submit'} onClick={onSubmit}/>
      <p className="message">{message}</p>
    
    </div>
  )
}

export default ProfileInput;