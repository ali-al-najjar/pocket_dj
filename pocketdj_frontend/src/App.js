import { Routes, Route } from "react-router-dom"
import AdminLoginPage from "./pages/AdminLoginPage";
import ArtistLoginPage from "./pages/ArtistLoginPage";
import ArtistRegisterPage from "./pages/ArtistRegisterPage";
import UploadPage from "./pages/UploadPage";


function App() {
  return (
    <Routes>

      <Route path="/admin" element={<AdminLoginPage />} />
      <Route path="/artist" element={<ArtistLoginPage />} />
      <Route path="/artist/register" element={<ArtistRegisterPage />} />
      <Route path="/upload" element={<UploadPage />} />

    </Routes> 
  );
}

export default App;
