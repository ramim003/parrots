import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Home from './pages/Home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';

import ReviewMain from './pages/review/ReviewMain';
import FacultyMain from './pages/Faculty/FacultyMain';
import Courses from './Courses';
import Blog from './pages/Blog/Blog';
import BuyCourse from './pages/buyCourse/BuyCourse';
import InstructorRamim from './pages/instructor/InstructorRamim';
import InstructorNasir from './pages/instructor/InstructorNasir';
import InstructorIstiak from './pages/instructor/InstructorIstiak';
import InstructorNuha from './pages/instructor/InstructorNuha';
import InstructorJamil from './pages/instructor/InstructorJamil';
import InstructorPoli from './pages/instructor/InstructorPoli';
import InstructorJoli from './pages/instructor/InstructorJoli';
import InstructorHujur from './pages/instructor/InstructorHujur';
import BlogOne from './pages/Blog/Blogone';
import BlogTwo from './pages/Blog/BlogTwo';
import BlogThree from './pages/Blog/BlogThree';
import BlogFour from './pages/Blog/BlogFour';
import BlogFive from './pages/Blog/BlogFive';
import BlogSix from './pages/Blog/BlogSix';
import Aboutus from './pages/about/Aboutus';





const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path ="reviews" element = {<ReviewMain/>} />
        <Route path ="faculty" element = {<FacultyMain/>} />
        <Route path ="Courses" element = {<Courses/>} />
        <Route path ="blog" element = {<Blog/>} />
        <Route path ="BuyCourse" element = {<BuyCourse/>} />
        <Route path ="InstructorRamim" element = {<InstructorRamim/>} />
        <Route path ="InstructorNasir" element = {<InstructorNasir/>} />
            <Route path ="InstructorIstiak" element = {<InstructorIstiak/>} />
                <Route path ="InstructorNuha" element = {<InstructorNuha/>} />
                    <Route path ="InstructorJamil" element = {<InstructorJamil/>} />
                        <Route path ="InstructorPoli" element = {<InstructorPoli/>} />
                            <Route path ="InstructorJoli" element = {<InstructorJoli/>} />
                                <Route path ="InstructorHujur" element = {<InstructorHujur/>} />

<Route path ="BlogOne" element = {<BlogOne/>} />
<Route path ="BlogTwo" element = {<BlogTwo/>} />
<Route path ="BlogThree" element = {<BlogThree/>} />
<Route path ="BlogFour" element = {<BlogFour/>} />
<Route path ="BlogFive" element = {<BlogFive/>} />
<Route path ="BlogSix" element = {<BlogSix/>} />
<Route path ="aboutus" element = {<Aboutus/>} />


       
         
      </Route>
    </Routes>
  );
};

export default App;
