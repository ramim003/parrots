import React from "react";

// Import images
import nasirImg from "../assets/faculty.jpg";
import ramimImg from "../assets/facultyv 2.jpg";
import istiakImg from "../assets/faculty.jpg";
import jamilImg from "../assets/facultyv 2.jpg";
import nuhaImg from "../assets/facultyv 2.jpg";
import joliImg from "../assets/facultyv 2.jpg";

// Faculty Data
const facultyData = [
  {
    name: "SM Nasir",
    role: "Managing Director",
    image: nasirImg,
  },
  {
    name: "Ramim Sir",
    role: "Lead Instructor",
    image: ramimImg,
  },
  {
    name: "Istiak Sir",
    role: "Instructor",
    image: istiakImg,
  },
  {
    name: "Jamil Sir",
    role: "Instructor",
    image: jamilImg,
  },
  {
    name: "Nuha Madam",
    role: "Instructor",
    image: nuhaImg,
  },
  {
    name: "poli Madam",
    role: " Manager",
    image: joliImg,
  },
];

const Faculty = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#980404] mb-4">Meet Our Faculty</h2>
          <p className="text-lg md:text-xl text-black">Our team of dedicated professionals is here to guide you to success.</p>
        </div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {facultyData.map((member) => (
            <div
              key={member.name}
              className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-[#980404]">{member.name}</h3>
              <p className="text-lg text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faculty;
