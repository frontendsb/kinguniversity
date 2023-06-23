
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
import About from './View/About/Index';
import Whychoose from './View/About/Whychoose';
import History from './View/About/History';
import Admission from './View/About/Admission';
import Courses from './View/Courses/Index';
import OurCourse from './View/Courses/OurCourse';
import Course1 from './View/Courses/SubCourses/Course1';
import Course2 from './View/Courses/SubCourses/Course2';
import Course3 from './View/Courses/SubCourses/Course3';
import Blog from './View/Blog/Index';
import BlogContent from './View/Blog/BlogContent';
import Page1 from './View/Blog/Page1';
import Page2 from './View/Blog/Page2';
import Page3 from './View/Blog/Page3';
import Contact from './View/Contact/Index';
import Appointment from './View/Contact/Appointment';
import ContactForm from './Component/ContactForm';
import ApplyForm from './Component/ApplyForm';

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
        <Route path='/study' element={<Study />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/whychoose' element={<Whychoose />}/>
        <Route path='/history' element={<History />}/>
        <Route path='/admission' element={<Admission />}/>
        <Route path='/courses' element={<Courses />}/>
        <Route path='/ourcourse' element={<OurCourse />}/>
        <Route path='/course1' element={<Course1 />}/>
        <Route path='/course2' element={<Course2 />}/>
        <Route path='/course3' element={<Course3 />}/>
        <Route path='/blog' element={<Blog />}/>
        <Route path='/blogcontent' element={<BlogContent />}/>
        <Route path='/page1' element={<Page1 />}/>
        <Route path='/page2' element={<Page2 />}/>
        <Route path='/page3' element={<Page3 />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/appointment' element={<Appointment />}/>
        <Route path='/contactform' element={<ContactForm />}/>
        <Route path='/ApplyForm' element={<ApplyForm />}/>
      </Route>
    </Routes>
   </Router>
   </>
  );
}

export default App;
