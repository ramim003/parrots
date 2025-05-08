import React from "react";

// Importing local images as variables
import ieltsImg from "../assets/ielts.jpg";
import spokenImg from "../assets/spokjen.jpg";
import lifeskillImg from "../assets/english.png";
import academicImg from "../assets/ielts.jpg";
import esolImg from "../assets/ielts.jpg";
import duolingoImg from "../assets/spokjen.jpg";
import grammarImg from "../assets/spokjen.jpg";
import privateImg from "../assets/english.png";

// Services data using imported image variables
const services = [
  {
    title: "IELTS Preparation",
    image: ieltsImg,
    description: `Our IELTS program began in early 2024...`,
  },
  {
    title: "Spoken English Masterclass",
    image: spokenImg,
    description: `We launched this course in response to the communication gap...`,
  },
  {
    title: "Life Skills English",
    image:  lifeskillImg,
    description: `Life Skills English was introduced mid-2024...`,
  },
  {
    title: "Academic English",
    image: academicImg,
    description: `Designed for university students and researchers...`,
  },
  {
    title: "ESOL (English for Speakers of Other Languages)",
    image: esolImg,
    description: `ESOL at Parrots Academy is designed for long-term improvement...`,
  },
  {
    title: "Duolingo English Test Training",
    image: duolingoImg,
    description: `With Duolingo becoming widely accepted...`,
  },
  {
    title: "English Grammar Clinic",
    image: grammarImg,
    description: `This course is a deep dive into English grammar...`,
  },
  {
    title: "Private & Elite Batch",
    image: privateImg,
    description: `Our Private Batch is custom-designed for professionals...`,
  }
];

const Ourservice = () => {
  return (
    <div className="services-container py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-black mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(service => (
            <div
              key={service.title}
              className="service-card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-black mb-2">{service.title}</h3>
              <p className="text-gray-700 text-justify whitespace-pre-line">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ourservice;
