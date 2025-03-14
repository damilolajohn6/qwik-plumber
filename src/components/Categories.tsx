"use client";
import { useState } from "react";
import { FaWrench } from "react-icons/fa";

const categories = [
  {
    id: 1,
    title: "Drain Cleaning",
    description:
      "Clearing clogged drains in sinks, tubs, showers, and toilets. Use of tools like drain snakes or hydro-jetting to remove blockages.",
  },
  {
    id: 2,
    title: "Heating System",
    description:
      "Fast and reliable installation and repair of water heaters, boilers, and heating systems that supply hot water for domestic or business use.",
    highlighted: true,
  },
  {
    id: 3,
    title: "Water Supply System",
    description:
      "Installation of pipes, fixtures, and appliances that provide water to homes and buildings. Ensuring proper water pressure and flow rates.",
  },
  {
    id: 4,
    title: "Renovation & Remodeling",
    description:
      "Updated and efficient plumbing installations during home renovations or new constructions. Ensuring plumbing meets current codes and standards.",
  },
  {
    id: 5,
    title: "Toilet Repair & Installation",
    description:
      "Fixing running, leaking, or clogged toilets. Replacing or installing new toilets and components.",
  },
  {
    id: 6,
    title: "Maintenance & Inspection",
    description:
      "Regular maintenance is vital for the longevity of plumbing systems. Cleaning drains, checking for leaks, and inspecting pipes for signs of wear or corrosion.",
  },
  {
    id: 7,
    title: "Emergency Services",
    description:
      "Emergency services for urgent issues like burst pipes or severe leaks. Quick response can prevent significant damage and costly repairs.",
  },
  {
    id: 8,
    title: "Fixture Installation",
    description:
      "Installation of faucets, sinks, toilets, bathtubs, showers, and other plumbing fixtures. Ensuring proper connections and functionality.",
    highlighted: true,
  },
];

const Categories = () => {
  const [selectedService, setSelectedService] = useState("");

  return (
    <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex justify-between items-center py-0 md:py-10">

            <h2 className="text-2xl font-bold text-[#0A0A5E] mb-4">Top Categories</h2>

            {/* Dropdown Filter */}
            <div className="mb-6">
                <select
                className="w-full md:w-auto px-4 py-2 border border-gray-300 rounded-md bg-yellow-200 text-black"
                onChange={(e) => setSelectedService(e.target.value)}
                >
                <option value="">Choose Services</option>
                {categories.map((cat) => (
                    <option key={cat.id} value={cat.title}>
                    {cat.title}
                    </option>
                ))}
                </select>
            </div>
        </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories
          .filter((cat) => !selectedService || cat.title === selectedService)
          .map((category) => (
            <div
              key={category.id}
              className={`p-6 rounded-lg shadow-md flex flex-col gap-2 ${
                category.highlighted
                  ? "bg-yellow-400 text-black"
                  : "bg-gray-100"
              }`}
            >
              <FaWrench className="text-3xl mx-auto" />
              <h3 className="text-lg font-bold">{category.title}</h3>
              <p className="text-sm">{category.description}</p>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Categories;
