import VideoTrans from "./pages/VideoTrans";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <>
    
    <BrowserRouter>
      <Routes>
          <Route index element={<VideoTrans />} />
          {/* <Route path="blogs" element={<Blogs />} /> */}
          
        
      </Routes>
    </BrowserRouter>
    </>
  )
}