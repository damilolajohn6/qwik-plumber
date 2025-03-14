"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const contacts = [
  {
    icon: <FaPhone className="text-white text-lg" />,
    title: "CONTACT US",
    detail: "2347088990026",
  },
  {
    icon: <FaMapMarkerAlt className="text-white text-lg" />,
    title: "LOCATION",
    detail: "2347088990026",
  },
  {
    icon: <FaEnvelope className="text-white text-lg" />,
    title: "EMAIL",
    detail: "Exampleemailinfo.com",
  },
];

const ContactPage = () => {


     const [formData, setFormData] = useState({
       name: "",
       email: "",
       phone: "",
       comment: "",
     });

     const [loading, setLoading] = useState(false);
     const [message, setMessage] = useState("");

     // Handle input change
     const handleChange = (
       e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
     ) => {
       setFormData({ ...formData, [e.target.name]: e.target.value });
     };

     // Handle form submission
     const handleSubmit = async (e: React.FormEvent) => {
       e.preventDefault();
       setLoading(true);
       setMessage("");

       const response = await fetch("/api/contact", {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(formData),
       });

       const data = await response.json();
       setLoading(false);
       setMessage(data.message);

       if (response.ok) {
         setFormData({ name: "", email: "", phone: "", comment: "" });
       }
     };

  return (
    <div>
      <section className=" bg-[#000053] py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8">
          {/* Left Side - Text Content */}
          <div className="w-full  rounded-lg p-6 md:p-10 text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-extrabold text-[#ffffff] leading-tight">
              Explore Our Publications to Stay on The Lastest Trends
            </h1>
          </div>

          {/* Right Side - Image Content */}
          <div className="w-full md:w-1/3 flex justify-center">
            <Image
              src="/assets/handy.png"
              alt="Plumbing Tools"
              width={600}
              height={500}
              className="object-contain max-w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>
      {/* Cards */}
      <div className="flex flex-col md:flex-row justify-center items-center py-10 gap-6 mt-6">
        {contacts.map((contact, index) => (
          <div
            key={index}
            className="flex items-center bg-gray-200 p-6 rounded-2xl w-80 shadow-md"
          >
            {/* Icon Section */}
            <div className="bg-yellow-500 w-12 h-12 flex justify-center items-center rounded-full">
              {contact.icon}
            </div>

            {/* Text Section */}
            <div className="ml-4">
              <p className="text-black font-semibold">{contact.title}</p>
              <p className="text-gray-600 text-sm">{contact.detail}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Forms */}
      <div className="w-full py-20 px-20 mx-auto mt-10 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-black">
          Send Us A Message
        </h2>

        {message && (
          <p
            className={`text-center p-2 rounded-md ${
              message.includes("success") ? "text-green-600" : "text-red-600"
            }`}
          >
            {message}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="p-3 border border-gray-400 rounded-md w-full bg-white focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="p-3 border border-gray-400 rounded-md w-full bg-white focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="p-3 border border-gray-400 rounded-md w-full bg-white focus:outline-none focus:ring-2 focus:ring-gray-500"
          />

          <textarea
            name="comment"
            placeholder="Comment"
            rows={4}
            value={formData.comment}
            onChange={handleChange}
            className="p-3 border border-gray-400 rounded-md w-full bg-white focus:outline-none focus:ring-2 focus:ring-gray-500"
          ></textarea>

          <Button
            type="submit"
            className="w-full bg-[#000053] text-white py-3 rounded-md hover:bg-blue-950 transition"
            disabled={loading}
          >
            {loading ? "Sending..." : "Submit"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
