import React from 'react';
import Hero from '../hero/Hero';
import CoursesHero from '../Courses/CoursesHero';
import Review from '../review/review';
import Faculty from '../Faculty/Faculty';
import ContactHero from '../contact/ContactHero';
import Faq from '../faq/Faq';
import About from '../about/About';

const Home = () => {
  return (
    <div>
      <Hero />
      <CoursesHero />
      <Review/>
      <Faculty/>
      <Faq/>
      <About/>
      <ContactHero/>
    </div>
  );
};

export default Home;
