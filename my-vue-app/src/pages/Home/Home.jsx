import React from 'react';
import Hero from '../hero/Hero';
import CoursesHero from '../Courses/CoursesHero';
import Review from '../review/review';
import Faculty from '../Faculty/Faculty';
import ContactHero from '../contact/ContactHero';

const Home = () => {
  return (
    <div>
      <Hero />
      <CoursesHero />
      <Review/>
      <Faculty/>
      <ContactHero/>
    </div>
  );
};

export default Home;
