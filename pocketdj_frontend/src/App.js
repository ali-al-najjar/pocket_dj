import { Routes, Route, Navigate } from "react-router-dom"
import AdminLoginPage from "./pages/Admin/LoginPage";
import ArtistLoginPage from "./pages/Artist/LoginPage";
import ArtistRegisterPage from "./pages/Artist/RegisterPage";
import ArtistProfilePage from "./pages/Artist/EditProfilePage";
import ArtistUploadPage from "./pages/Artist/UploadSongPage";   
import AdminUploadPage from "./pages/Admin/UploadSongPage";   
import AdminUploadMoodPage from "./pages/Admin/UploadMoodPage";   
import ViewAllUsers from "./pages/Admin/Users";
import ViewAllArtists from "./pages/Admin/Artists";
import ViewAllSongs from "./pages/Admin/Songs";
import LandingPage  from "./pages/LandingPage"
import { store } from "../src/redux/store.jsx";
import { Provider, useSelector} from "react-redux";
import ViewAllMoods from "./pages/Admin/Moods";

function App() {
  // const role = useSelector((state) => state.role);
  // const isAdmin = () => role === 'Admin';
  // const isArtist = () => role === 'Artist';
    return (
      <Provider store={store}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/admin" element={<AdminLoginPage />} />
            <Route path="/admin/users" element={<ViewAllUsers />} />
            <Route path="/admin/artists" element={<ViewAllArtists />} />
            <Route path="/admin/songs" element={<ViewAllSongs />} />
            <Route path="/admin/song" element={<AdminUploadPage />} />
            <Route path="/admin/mood" element={<AdminUploadMoodPage />} />
            <Route path="/admin/moods" element={<ViewAllMoods />} />
            <Route path="/artist" element={<ArtistLoginPage />} />
            <Route path="/artist/register" element={<ArtistRegisterPage />} />
            <Route path="/artist/profile" element={<ArtistProfilePage/>} />
            <Route path="/artist/upload" element={<ArtistUploadPage />} />

          </Routes> 
          </Provider>
  );
}

export default App;
