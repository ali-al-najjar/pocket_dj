import axios from "axios"
import Navigation from "../../../components/Navigation/navigation"
import UploadSong from "../../../components/AdminUploadSong/UploadSong"
import {useState } from "react";
import Button from "../../../components/Button/button";



const UploadSongPage = () => {

return (
    <div className="profile_container">
    <div className="nav_box">
    <Navigation 
    role = "Admin"/>
    </div>
    <div className="page_box">
    <h2 className="heading">Upload a Song</h2>
    <UploadSong/>
    </div>
    
    </div>
);
}

export default UploadSongPage;
