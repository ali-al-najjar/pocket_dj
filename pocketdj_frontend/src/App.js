import { Routes, Route } from "react-router-dom"
import LoginPage from "./pages/AdminLoginPage";
import UploadPage from "./pages/UploadPage";


function App() {
  return (
    <Routes>

      <Route path="/" element={<LoginPage />} />
      <Route path="/upload" element={<UploadPage />} />

    </Routes> 
  );
}

export default App;
