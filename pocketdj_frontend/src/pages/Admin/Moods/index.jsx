import Navigation from "../../../components/Navigation/navigation";
import Moods from "../../../components/MoodsTable/moods";
import './moods.css';
import { useState } from 'react';
import Button from "../../../components/Button/button";
import AddModal from "../../../components/Modal/modal";
import UploadMood from "../../../components/AdminUploadMood/uploadMood";

const ViewAllMoods = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };

    return (
        <div className="profile_container">
        <div className="nav_box">
        <Navigation
        role="Admin" />
        </div>
        <div className="page_box">
        <div className="header">
        <h2 className="heading">View All Moods</h2>
        <Button className ={"button add_song"} name ={'Add Mood'} onSubmit={handleOpenModal}></Button>
        </div>
        <Moods/>
        </div>
        <AddModal
          isModalOpen={isModalOpen}
          onClose={handleCloseModal}
          Component={UploadMood} 
          name={"mood"}/>
        </div>
    );
}
export default ViewAllMoods;