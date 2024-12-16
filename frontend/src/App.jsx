import VideoTrans from "./pages/VideoTrans";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import CreateUser from "./pages/CreateUser";
import CreateUserVerify from "./pages/CreateUserVerify";
import Folder from "./pages/Folder";
import Subscription from "./pages/Subscription";
import Support from "./pages/Support";
import News from "./pages/News";
import Translate from "./pages/Translate";
import SportsTranslation from "./pages/SportsTranslation";
import { TranslationApp } from "./pages/TranslationApp";
export default function App() {
  return (
    <>
    
    <BrowserRouter>
      <Routes>
          <Route index element={<VideoTrans />} />
          <Route path="translate" element={<Translate />} />
          <Route path="login" element={<Login />} />
          <Route path="folder" element={<Folder />} />
          <Route path="subscription" element={<Subscription />} />
          <Route path="support" element={<Support />} />
          <Route path="news" element={<News />} />
          <Route path="sports" element={<TranslationApp />} />
          <Route path="createuser" element={<CreateUser />} />
          <Route path="createuser/verify" element={<CreateUserVerify />} />
          
        
      </Routes>
    </BrowserRouter>
    </>
  )
}