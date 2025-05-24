import React from "react";

const Contact = () => {
  return (
    <div className="bg-white text-gray-800 min-h-screen py-10 px-4 flex flex-col items-center">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-2 text-[#980404]">Contact Us</h1>
      <p className="text-center mb-8 max-w-2xl text-lg">
        We'd love to hear from you! Please fill out the form below or contact us directly.
      </p>

      {/* Contact Form */}
      <form className="w-full max-w-2xl bg-gray-100 p-8 rounded-2xl shadow-lg space-y-6">
        <div>
          <label className="block font-semibold mb-1">Your Name</label>
          <input
            type="text"
            placeholder="John Doe"
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#980404]"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Your Email</label>
          <input
            type="email"
            placeholder="email@example.com"
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#980404]"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Subject</label>
          <select className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#980404]">
            <option value="">Choose a subject</option>
            <option value="admission">Admission</option>
            <option value="courses">Courses</option>
            <option value="support">Support</option>
          </select>
        </div>

        <div>
          <label className="block font-semibold mb-1">Message</label>
          <textarea
            rows="5"
            placeholder="Write your message here..."
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#980404]"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-[#980404] text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition duration-300"
        >
          Send Message
        </button>
      </form>

      {/* Contact Info */}
      <div className="mt-10 text-center text-base space-y-1">
        <p><strong>📞 Phone:</strong> +8801XXXXXXXXX</p>
        <p><strong>📧 Email:</strong> info@parrotsacademy.com</p>
        <p><strong>📍 Address:</strong> Uchlapara, Kulaura, Moulvibazar</p>
        <p><strong>🕘 Office Hours:</strong> Sun–Thu | 9 AM – 5 PM</p>
      </div>

      {/* Google Map */}
      <div className="w-full max-w-4xl mt-8 rounded-xl overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.7011314777814!2d92.02385217426977!3d24.891689578900972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3751c0ef61a05489%3A0x42e5cb80d994eecf!2sUchlapara%2C%20Kulaura!5e0!3m2!1sen!2sbd!4v1716470303294!5m2!1sen!2sbd"
          className="w-full h-96"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
