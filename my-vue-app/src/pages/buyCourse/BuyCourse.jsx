import React, { useState } from 'react';

const courseTypes = [
  'IELTS Preparation Course',
  'Spoken English Mastery',
  'Grammar & Writing Skills',
  'Life Skills & Communication',
  'Academic English Mentorship',
];

const BuyCourse = () => {
  const [form, setForm] = useState({
    name: '',
    course: '',
    type: '',
    mobile: '',
    payment: '',
    trxId: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.course || !form.type || !form.mobile || !form.payment) {
      alert('Please fill in all required fields.');
      return;
    }
    console.log('Submitted:', form);
    alert('Thank you for your order. Our team will contact you soon.');
  };

  return (
    <section className="bg-white py-16 px-6 max-w-2xl mx-auto font-poppins">
      {/* Title */}
      <h2 className="text-3xl font-bold text-center mb-8 text-[#980404]">Buy a Course</h2>

      {/* Benefits */}
      <div className="mb-10 bg-gray-50 p-4 rounded-lg border-l-4 border-[#980404]">
        <h3 className="text-xl font-bold text-[#980404] mb-2">Why Join Our Courses?</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Boost confidence and fluency with real-world practice</li>
          <li>Learn from expert instructors with years of experience</li>
          <li>Weekly mock tests, speaking sessions, and writing feedback</li>
          <li>Flexible payment options and 24/7 student support</li>
          <li>Offline + Online options with recorded classes</li>
        </ul>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-1 font-semibold">Full Name *</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full border rounded-md px-4 py-2"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Course Name *</label>
          <input
            type="text"
            name="course"
            value={form.course}
            onChange={handleChange}
            placeholder="e.g. Spoken English Mastery"
            className="w-full border rounded-md px-4 py-2"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Select Course Type *</label>
          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            className="w-full border rounded-md px-4 py-2"
            required
          >
            <option value="">-- Select Course Type --</option>
            {courseTypes.map((type, idx) => (
              <option key={idx} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-1 font-semibold">Mobile Number *</label>
          <input
            type="tel"
            name="mobile"
            value={form.mobile}
            onChange={handleChange}
            className="w-full border rounded-md px-4 py-2"
            placeholder="e.g. 017XXXXXXXX"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Payment Method *</label>
          <select
            name="payment"
            value={form.payment}
            onChange={handleChange}
            className="w-full border rounded-md px-4 py-2"
            required
          >
            <option value="">-- Choose Payment Method --</option>
            <option value="Cash">Cash</option>
            <option value="bKash">bKash</option>
            <option value="Nagad">Nagad</option>
            <option value="Rocket">Rocket</option>
            <option value="Card">Debit/Credit Card</option>
          </select>
        </div>

        {(form.payment === 'bKash' || form.payment === 'Nagad' || form.payment === 'Rocket') && (
          <div>
            <label className="block mb-1 font-semibold">Transaction ID *</label>
            <input
              type="text"
              name="trxId"
              value={form.trxId}
              onChange={handleChange}
              className="w-full border rounded-md px-4 py-2"
              placeholder="e.g. TX12345AB"
              required
            />
          </div>
        )}

        <button
          type="submit"
          className="bg-[#980404] hover:bg-red-700 text-white px-6 py-2 rounded-md transition"
        >
          Confirm Order
        </button>
      </form>

      {/* Conclusion */}
      <div className="mt-12 text-center border-t pt-6">
        <h3 className="text-xl font-semibold text-[#980404] mb-2">Start Your Journey Today</h3>
        <p className="text-gray-700">
          Whether you're preparing for IELTS, improving communication, or mastering grammar —
          Parrots Academy has the right course for you. Let's build your English skills together.
        </p>
      </div>
    </section>
  );
};

export default BuyCourse;
