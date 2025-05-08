import React from "react";

// Importing images
import ieltsImg from "../assets/ielts.jpg";
import spokenImg from "../assets/spokjen.jpg";
import lifeskillImg from "../assets/english.png";
import academicImg from "../assets/ielts.jpg";
import esolImg from "../assets/ielts.jpg";
import duolingoImg from "../assets/spokjen.jpg";
import grammarImg from "../assets/spokjen.jpg";
import privateImg from "../assets/english.png";

// Services Data
const servicesData = [
  {
    title: "IELTS Preparation",
    image: ieltsImg,
    description: `Our IELTS program began in early 2024 with the aim to bridge the gap for Bangladeshi students seeking global education. Over the months, we've refined our curriculum based on student feedback, Cambridge updates, and real exam trends. We provide mock tests, time management strategies, and personal evaluations to ensure band score improvement.

    This course is ideal for both Academic and General Training candidates. Our instructors, trained by British Council resources, bring clarity and confidence to your preparation journey.`,
    reviews: [
      "“I improved from Band 5.5 to 7 in just 2 months. Truly grateful!” – Rakib Hossain",
      "“Their speaking module mock tests felt like the real exam.” – Nusrat Jahan"
    ]
  },
  {
    title: "Spoken English Masterclass",
    image: spokenImg,
    description: `We launched this course in response to the communication gap seen in local learners, even among graduates. With the rise of online freelancing and global remote jobs, spoken fluency is now essential.

    This program is not just grammar—it includes voice modulation, public speaking, group discussion practice, and situation-based dialogues. Whether you're preparing for interviews or want to be confident in meetings, this course is built for you.`,
    reviews: [
      "“Now I can speak fluently in front of 50+ people without fear.” – Rafiul",
      "“Their conversation club changed my life.” – Tamanna Akter"
    ]
  },
  {
    title: "Life Skills English",
    image: lifeskillImg,
    description: `Life Skills English was introduced mid-2024 to serve those preparing to migrate or settle abroad. It's focused on practical English used in banks, hospitals, grocery stores, and government offices.

    Students learn how to fill out forms, describe symptoms to doctors, or resolve issues at the municipality. This real-world focus sets us apart from textbook-based programs.`,
    reviews: [
      "“Before flying to Canada, I finished this course. It helped everywhere!” – Asif Mia",
      "“I now understand how to respond in daily life situations abroad.” – Rozina Khatun"
    ]
  },
  {
    title: "Academic English",
    image: academicImg,
    description: `Designed for university students and researchers, our Academic English program trains you in formal essay writing, research reports, referencing, summaries, and critiques.

    From paraphrasing to cohesion, we follow the UK university standards. This course is perfect for undergrad and master's students, especially those pursuing higher education abroad.`,
    reviews: [
      "“I stopped using Google Translate because now I can write academic papers myself.” – Mahfuz Hasan",
      "“Even my thesis supervisor appreciated the improvement in my English.” – Juthi"
    ]
  },
  {
    title: "ESOL (English for Speakers of Other Languages)",
    image: esolImg,
    description: `ESOL at Parrots Academy is designed for individuals seeking a long-term improvement in English fluency for both personal and professional reasons.

    Students receive a certificate accepted by many visa programs and universities. We use real-world dialogues, newspaper-based reading, and audio listening to ensure immersion.`,
    reviews: [
      "“It helped me secure a student visa to Ireland.” – Monira Alam",
      "“Best training I received for immigration.” – Jewel Rana"
    ]
  },
  {
    title: "Duolingo English Test Training",
    image: duolingoImg,
    description: `With Duolingo becoming widely accepted, especially in the USA and Canada, we created a smart-paced course that covers question types like 'Read and Complete', 'Listen and Write', 'Speak about the image', etc.

    We focus on both language mastery and test strategy, including live simulations.`,
    reviews: [
      "“Scored 125 within 10 days of this course!” – Abid",
      "“They made the whole exam feel predictable.” – Rini"
    ]
  },
  {
    title: "English Grammar Clinic",
    image: grammarImg,
    description: `This course is a deep dive into English grammar—from basic to advanced. We explain concepts through storytelling, examples, quizzes, and real sentence applications.

    Every class includes writing and speaking tasks to practice the learned grammar in context.`,
    reviews: [
      "“Grammar is no longer boring, thanks to Ramim Sir’s methods.” – Shohan",
      "“I finally understand conditionals and modal verbs.” – Mitu"
    ]
  },
  {
    title: "Private & Elite Batch",
    image: privateImg,
    description: `Our Private Batch is custom-designed for professionals, busy students, or international test-takers who need flexible scheduling and one-on-one attention.

    Lessons are customized based on student goals: IELTS, fluency, academic writing, job interviews, etc. You choose your own pace.`,
    reviews: [
      "“Flexible timing and individual coaching helped me manage my job and study.” – Sayeed",
      "“Felt like learning from a personal mentor.” – Joya"
    ]
  }
];

const OurServices = () => {
  return (
    <section className="bg-gray-100 py-20 px-6 md:px-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-[#980404] mb-4 animate-fade-down">
          Our Services at Parrots Academy
        </h1>
        <p className="text-gray-800 text-lg max-w-4xl mx-auto">
          Since launching on <strong>April 25, 2024</strong>, Parrots Academy has trained over <strong>400+ students</strong> and earned a strong reputation across Kulaura for professional English training. With a student-focused mission, we continue to expand our offerings to fit modern needs—academic, professional, and migration-based.
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 p-6 transform hover:-translate-y-1"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-64 object-cover rounded-xl mb-4"
            />
            <h2 className="text-2xl font-semibold text-[#980404] mb-3">
              {service.title}
            </h2>
            <p className="text-gray-700 text-justify whitespace-pre-line mb-4">
              {service.description}
            </p>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h4 className="text-[#980404] font-semibold mb-2">Student Reviews</h4>
              <ul className="list-disc list-inside text-gray-600">
                {service.reviews.map((review, idx) => (
                  <li key={idx}>{review}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
