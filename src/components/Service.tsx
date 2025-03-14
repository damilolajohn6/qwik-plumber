"use client";


import { WashingMachine } from "lucide-react";

const services = [
  {
    title: "Drain Cleaning",
    description:
      "Clearing clogged drains in sinks, tubs, showers, and toilets. Use of tools like drain snakes or hydro-jetting to remove blockages.",
    isActive: false,
  },
  {
    title: "Water Heater Repair",
    description:
      "Clearing clogged drains in sinks, tubs, showers, and toilets. Use of tools like drain snakes or hydro-jetting to remove blockages.",
    isActive: false,
  },
  {
    title: "Toilet Repair & Installation",
    description:
      "Fixing running, leaking, or clogged toilets. Replacing or installing new toilets and components.",
    isActive: true,
  },
];

const Service = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-[#0A0A5E] mb-2">
        Explore our Services
      </h2>
      <p className="text-gray-600 mb-8">Delivery world-class services</p>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-md transition-all ${
              service.isActive
                ? "bg-yellow-400 text-black"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            <div className="flex flex-col items-center text-center">
              <WashingMachine size={32} className="mb-2" />
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="text-sm mt-2">{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Discount Message */}
      <h3 className="mt-10  text-xl md:text-2xl font-bold text-[#0A0A5E]">
        GET 25% DISCOUNT ON YOUR FIRST BOOKING
      </h3>
    </section>
  );
};

export default Service;
