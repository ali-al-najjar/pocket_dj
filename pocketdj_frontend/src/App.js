import { Routes, Route } from "react-router-dom"
import AdminLoginPage from "./pages/Admin/LoginPage";
import ArtistLoginPage from "./pages/Artist/LoginPage";
import ArtistRegisterPage from "./pages/Artist/RegisterPage";
import ArtistProfilePage from "./pages/Artist/EditProfilePage";
import ArtistUploadPage from "./pages/Artist/UploadSongPage";   
import AdminUploadPage from "./pages/Admin/UploadSongPage";   
import ViewAllUsers from "./pages/Admin/Users";
import ViewAllArtists from "./pages/Admin/Artists";
import ViewAllSongs from "./pages/Admin/Songs";


function App() {
  return (
    <Routes>

      <Route path="/admin" element={<AdminLoginPage />} />
      <Route path="/admin/users" element={<ViewAllUsers />} />
      <Route path="/admin/artists" element={<ViewAllArtists />} />
      <Route path="/admin/songs" element={<ViewAllSongs />} />
      <Route path="/admin/song" element={<AdminUploadPage />} />
      <Route path="/admin/mood" element={<ViewAllSongs />} />
      <Route path="/artist" element={<ArtistLoginPage />} />
      <Route path="/artist/register" element={<ArtistRegisterPage />} />
      <Route path="/artist/profile" element={<ArtistProfilePage/>} />
      <Route path="/artist/upload" element={<ArtistUploadPage />} />

    </Routes> 
  );
}

export default App;
