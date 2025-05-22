import React from 'react';

const ContactHero = () => {
  return (
    <section className="bg-white py-16 px-6 font-poppins max-w-7xl mx-auto">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-[#980404]">
        Contact Us
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Contact Info */}
        <div className="space-y-6 text-gray-800">
          <h3 className="text-2xl font-semibold text-[#980404]">Get in Touch</h3>
          <p>
            We'd love to hear from you! Whether you have a question about our courses,
            need help, or just want to give feedback—feel free to contact us.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg shadow-md space-y-2">
            <div>
              <p className="font-semibold">📍 Address:</p>
              <p>Parrots Academy, Kulaura, Sylhet, Bangladesh</p>
            </div>
            <div>
              <p className="font-semibold">📞 Phone:</p>
              <p>+880 1700 000000</p>
            </div>
            <div>
              <p className="font-semibold">📧 Email:</p>
              <p>info@parrotsacademy.com</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
          <h3 className="text-xl font-semibold mb-4 text-[#980404]">Send us a Message</h3>
          <form className="space-y-4">
            <div>
              <label className="block mb-1 font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#980404]"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#980404]"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700">Message</label>
              <textarea
                rows="5"
                placeholder="Your message here..."
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#980404]"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#980404] text-white py-2 rounded-md hover:bg-black transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
