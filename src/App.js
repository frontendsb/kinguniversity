
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from './Layout/MainLayout';
import Home from './View/Home/Index';
import BannerSlide from './View/Home/BannerSlide';
import Event from './View/Home/Event';
import Apply from './View/Home/Apply';
import Video from './View/Home/Video';
import Testimonial from './View/Home/Testimonial';
import Study from './View/Home/Study';
import ApplyForm from './Component/ApplyForm'

function App() {
  return (
   <>
      <Router>
    <Routes>
      <Route element={<MainLayout />}>
        <Route path='/' element={<Home />}/> 
        <Route path='/bannerslide' element={<BannerSlide />}/> 
        <Route path='/event' element={<Event />}/> 
        <Route path='/apply' element={<Apply />}/> 
        <Route path='/video' element={<Video />}/> 
        <Route path='/testimonial' element={<Testimonial />}/> 
        <Route path='/ApplyForm' element={<ApplyForm />}/>
        <Route path='/study' element={<Study />}/>
      </Route>
    </Routes>
   </Router>
   </>
  );
}

export default App;
