"use client";

import { useState } from "react";

const GetAQuote = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    serviceType: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <section className="bg-[#020248] text-white py-12 px-6 md:px-12">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold">Get a Quote</h2>
        <p className="text-gray-300 mt-2">
          When it’s plumbing, we are the real deal - just solutions!
        </p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border-b border-white bg-transparent p-2 focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-sm">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border-b border-white bg-transparent p-2 focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-sm">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border-b border-white bg-transparent p-2 focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-sm">Location Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full border-b border-white bg-transparent p-2 focus:outline-none"
              required
            />
          </div>
        </div>

        <div className="mt-4">
          <label className="block text-sm">Select your Service Type</label>
          <select
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            className="w-full border-b text-blue-800 border-white bg-transparent p-2 focus:outline-none"
            required
          >
            <option value="" disabled>
              Select Service
            </option>
            <option value="plumbing">Plumbing</option>
            <option value="heating">Heating System</option>
            <option value="drainCleaning">Drain Cleaning</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="mt-4">
          <label className="block text-sm">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full border-b border-white bg-transparent p-2 focus:outline-none"
            rows={3}
            required
          />
        </div>

        <button
          type="submit"
          className="mt-6 bg-white text-[#020248] font-bold py-2 px-6 rounded hover:bg-gray-300 transition"
        >
          Call Us Now
        </button>
      </form>
    </section>
  );
};

export default GetAQuote;
