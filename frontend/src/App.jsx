import VideoTrans from "./pages/VideoTrans";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import CreateUser from "./pages/CreateUser";
import CreateUserVerify from "./pages/CreateUserVerify";
export default function App() {
  return (
    <>
    
    <BrowserRouter>
      <Routes>
          <Route index element={<VideoTrans />} />
          <Route path="login" element={<Login />} />
          <Route path="createuser" element={<CreateUser />} />
          <Route path="createuser/verify" element={<CreateUserVerify />} />
          
        
      </Routes>
    </BrowserRouter>
    </>
  )
}