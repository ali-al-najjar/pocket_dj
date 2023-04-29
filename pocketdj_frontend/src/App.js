import { Routes, Route } from "react-router-dom"
import AdminLoginPage from "./pages/Admin/LoginPage";
import ArtistLoginPage from "./pages/Artist/LoginPage";
import ArtistRegisterPage from "./pages/Artist/RegisterPage";
import ArtistProfilePage from "./pages/Artist/EditProfilePage";
import UploadPage from "./pages/UploadPage";


function App() {
  return (
    <Routes>

      <Route path="/admin" element={<AdminLoginPage />} />
      <Route path="/artist" element={<ArtistLoginPage />} />
      <Route path="/artist/register" element={<ArtistRegisterPage />} />
      <Route path="/artist/profile" element={<ArtistProfilePage/>} />
      <Route path="/upload" element={<UploadPage />} />

    </Routes> 
  );
}

export default App;
