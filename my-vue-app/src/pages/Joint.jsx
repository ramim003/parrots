import React, { useState } from "react";
import { Link } from "react-router";
const Joint = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    fatherName: "",
    motherName: "",
    classLevel: "",
    dob: "",
    gender: "",
    phone: "",
    email: "",
    address: "",
    paymentMethod: "",
    transactionId: "",
    guardianConsent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send formData to a backend or database
    console.log("Form submitted:", formData);
    alert("Thank you for joining! We'll contact you soon.");
  };

  return (
    <section className="bg-gray-100 min-h-screen py-12 px-6">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-[#980404] mb-6">Join Us</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block font-medium mb-1">Full Name</label>
            <input
              type="text"
              name="fullName"
              required
              className="w-full p-2 border border-gray-300 rounded"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>

          {/* Father & Mother */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium mb-1">Father's Name</label>
              <input
                type="text"
                name="fatherName"
                className="w-full p-2 border border-gray-300 rounded"
                value={formData.fatherName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Mother's Name</label>
              <input
                type="text"
                name="motherName"
                className="w-full p-2 border border-gray-300 rounded"
                value={formData.motherName}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Class & DOB */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium mb-1">Class</label>
              <select
                name="classLevel"
                className="w-full p-2 border border-gray-300 rounded"
                required
                value={formData.classLevel}
                onChange={handleChange}
              >
                <option value="">Select Class</option>
                <option value="8">Class 8</option>
                <option value="9">Class 9</option>
                <option value="10">Class 10</option>
                <option value="11">Class 11</option>
                <option value="12">Class 12</option>
                <option value="others">Others</option>
              </select>
            </div>
            <div>
              <label className="block font-medium mb-1">Date of Birth</label>
              <input
                type="date"
                name="dob"
                required
                className="w-full p-2 border border-gray-300 rounded"
                value={formData.dob}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Gender */}
          <div>
            <label className="block font-medium mb-1">Gender</label>
            <div className="flex space-x-6">
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={formData.gender === "Male"}
                  onChange={handleChange}
                />{" "}
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={formData.gender === "Female"}
                  onChange={handleChange}
                />{" "}
                Female
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Other"
                  checked={formData.gender === "Other"}
                  onChange={handleChange}
                />{" "}
                Other
              </label>
            </div>
          </div>

          {/* Contact */}
          <div>
            <label className="block font-medium mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              required
              className="w-full p-2 border border-gray-300 rounded"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              required
              className="w-full p-2 border border-gray-300 rounded"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          {/* Address */}
          <div>
            <label className="block font-medium mb-1">Present Address</label>
            <textarea
              name="address"
              required
              rows={3}
              className="w-full p-2 border border-gray-300 rounded"
              value={formData.address}
              onChange={handleChange}
            ></textarea>
          </div>

          {/* Payment Section */}
          <div>
            <label className="block font-medium mb-1">Payment Method</label>
            <select
              name="paymentMethod"
              required
              className="w-full p-2 border border-gray-300 rounded"
              value={formData.paymentMethod}
              onChange={handleChange}
            >
              <option value="">Choose Method</option>
              <option value="Bkash">Bkash</option>
              <option value="Nagad">Nagad</option>
              <option value="Rocket">Rocket</option>
              <option value="Cash">Cash (Offline)</option>
            </select>
          </div>

          <div>
            <label className="block font-medium mb-1">Transaction ID</label>
            <input
              type="text"
              name="transactionId"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="If paid via Bkash/Nagad/Rocket"
              value={formData.transactionId}
              onChange={handleChange}
            />
          </div>

          {/* Guardian Consent */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="guardianConsent"
              checked={formData.guardianConsent}
              onChange={handleChange}
              required
            />
            <label className="text-sm">
              I confirm my guardian is aware of my joining this course.
            </label>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-[#980404] text-white px-6 py-3 rounded font-semibold hover:bg-red-700 transition duration-300"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Joint;
