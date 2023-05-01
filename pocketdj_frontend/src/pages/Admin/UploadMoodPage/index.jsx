import axios from "axios"
import Navigation from "../../../components/Navigation/navigation"
import UploadMood from "../../../components/AdminUploadMood/uploadMood"
import {useState } from "react";
import Button from "../../../components/Button/button";


const UploadMoodPage = () => {


return (
    <div className="profile_container">
    <div className="nav_box">
    <Navigation 
    role = "Admin"/>
    </div>
    <div className="page_box">
    <h2 className="heading">Upload new Mood</h2>
    <UploadMood/>
    </div>
    
    </div>
);
}

export default UploadMoodPage;
