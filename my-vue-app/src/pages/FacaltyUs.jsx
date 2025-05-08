import React from "react";

// Image placeholders – replace with your own
import faculty1 from "../assets/faculty.jpg";
import faculty2 from "../assets/faculty.jpg";
import faculty3 from "../assets/faculty.jpg";
import faculty4 from "../assets/facultyv 2.jpg";
import faculty5 from "../assets/facultyv 2.jpg";
import faculty6 from "../assets/facultyv 2.jpg";

const facultyMembers = [
  {
    name: "SM Nasir",
    image: faculty1,
    description:
      "A senior IELTS instructor with 8+ years of experience. Her interactive techniques and in-depth grammar sessions help students grasp language nuances quickly.",
  },
  {
    name: "Ramim sir",
    image: faculty2,
    description:
      "An English language specialist focusing on spoken fluency and pronunciation. He brings a dynamic classroom experience with real-world speaking practice.",
  },
  {
    name: "Istiak sir",
    image: faculty3,
    description:
      "Expert in academic writing and vocabulary enhancement. Her well-structured sessions help learners improve clarity and coherence in their essays.",
  },
  {
    name: "Nuha Madam ",
    image: faculty4,
    description:
      "Cambridge-certified trainer passionate about building students’ confidence in communication. Uses humor and logic to engage learners effectively.",
  },
  {
    name: "Poli madam",
    image: faculty5,
    description:
      "Specialist in grammar correction and test preparation. Loved by students for her patience, clarity, and consistent support throughout the course.",
  },
  {
    name: "Jamil sir",
    image: faculty6,
    description:
      "Technology-integrated English trainer, expert in using digital tools to enhance classroom learning. Always updated with modern teaching strategies.",
  },
];

const FacaltyUs = () => {
  return (
    <section className="bg-black text-white py-20 px-4 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto text-center mb-14">
        <h2 className="text-4xl font-bold mb-4 text-[#980404]">Meet Our Faculty</h2>
        <p className="text-lg text-gray-300">
          Highly qualified, experienced, and passionate instructors who make learning English inspiring and effective.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {facultyMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white text-black rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6 space-y-3">
              <h3 className="text-2xl font-bold text-[#980404]">{member.name}</h3>
              <p className="text-gray-700">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FacaltyUs;
