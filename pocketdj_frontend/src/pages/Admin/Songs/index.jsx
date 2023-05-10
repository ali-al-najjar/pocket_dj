import Navigation from "../../../components/Navigation/navigation";
import Songs from "../../../components/SongsTable/songs";
import './songs.css';
import { useState } from 'react';
import Button from "../../../components/Button/button";
import AddModal from "../../../components/Modal/modal";
import UploadSong from "../../../components/AdminUploadSong/UploadSong";

const ViewAllSongs = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
      window.location.reload();
    };

    return (
        <div className="profile_container">
        <div className="nav_box">
        <Navigation
        role="Admin" />
        </div>
        <div className="page_box">
        <div className="header">
        <h2 className="page_heading">All Songs</h2>
        <Button className ={"button add_song"} name ={'Add Song'} onSubmit={handleOpenModal}>Add Song</Button>
        </div>
        <Songs/>
        </div>
        <AddModal
          isModalOpen={isModalOpen}
          onClose={handleCloseModal}
          Component={UploadSong}
          name={"song"} />
        </div>
    );
}
export default ViewAllSongs;