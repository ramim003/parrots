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
       
         
      </Route>
    </Routes>
  );
};

export default App;
