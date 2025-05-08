import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  return (
    <section className="bg-black text-white min-h-screen py-20 px-4 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#980404] mb-4">Contact Us</h2>
          <p className="text-lg text-gray-300">
            Have a question, suggestion, or feedback? Reach out and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white text-black rounded-lg p-8 shadow-lg">
            {isSubmitted ? (
              <div className="text-center py-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 text-green-500 mx-auto mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                <p className="text-gray-600 mb-6">
                  Your message has been sent successfully. We'll get back to you soon.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-[#980404] text-white px-6 py-3 rounded font-semibold hover:bg-red-700 transition"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#980404]"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#980404]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="01XXXXXXXXX"
                      className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#980404]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-1">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject of your message"
                    className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#980404]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-1">Message</label>
                  <textarea
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#980404]"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="bg-[#980404] text-white px-6 py-3 rounded font-semibold hover:bg-red-700 transition"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact Info & Map (unchanged) */}
          <div className="space-y-6">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-2">Our Office</h3>
              <p className="text-gray-300">Sure Success Academy, 2nd Floor, Main Road, Kulaura, Sylhet, Bangladesh</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-2">Call Us</h3>
              <p className="text-gray-300">📞 +880 1700 000000</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-2">Email</h3>
              <p className="text-gray-300">📧 info@suresuccess.com</p>
            </div>

            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                title="Our Location"
                className="w-full h-64"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9028401973736!2d90.39118681498287!3d23.750903384589716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b896ccc2d333%3A0xe4736fbd12dc3b55!2sSure%20Success%20Academy!5e0!3m2!1sen!2sbd!4v1640000000000!5m2!1sen!2sbd"
                loading="lazy"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;