import {
  FaToilet,
  FaWrench,
  FaTint,
  FaFire,
  FaTools,
  FaShower,
} from "react-icons/fa";

const services = [
  {
    title: "Drain Cleaning",
    description:
      "Clearing clogged drains in sinks, tubs, showers, and toilets. Use of tools like drain snakes or hydro-jetting to remove blockages.",
    icon: <FaWrench className="text-2xl" />,
    bgColor: "bg-gray-100",
  },
  {
    title: "Heating System",
    description:
      "Fast and reliable installation and repair of water heaters, boilers, and heating systems for domestic or business use.",
    icon: <FaFire className="text-2xl" />,
    bgColor: "bg-gray-100",
  },
  {
    title: "Renovation & Remodeling",
    description:
      "Updated and efficient plumbing installations during home renovations or new constructions. Ensuring compliance with current standards.",
    icon: <FaTools className="text-2xl" />,
    bgColor: "bg-yellow-400",
  },
  {
    title: "Toilet Repair & Installation",
    description:
      "Fixing running, leaking, or clogged toilets. Replacing or installing new toilets and components.",
    icon: <FaToilet className="text-2xl" />,
    bgColor: "bg-yellow-400",
  },
  {
    title: "Water Supply System",
    description:
      "Installation of pipes, fixtures, and appliances that provide water to homes and buildings. Ensuring proper water pressure.",
    icon: <FaTint className="text-2xl" />,
    bgColor: "bg-gray-100",
  },
  {
    title: "Fixture Installation",
    description:
      "Installation of faucets, sinks, toilets, bathtubs, showers, and other plumbing fixtures. Ensuring proper connections.",
    icon: <FaShower className="text-2xl" />,
    bgColor: "bg-gray-100",
  },
];

const Services = () => {
  return (
    <section className="w-full py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <h2 className="text-3xl font-bold text-[#020248]">
          Explore our Services
        </h2>
        <p className="text-gray-600  mt-2">
          Delivery world class services
        </p>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-md ${service.bgColor}`}
            >
              <div className="flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold text-center mt-4">
                {service.title}
              </h3>
              <p className="text-center mt-2 text-gray-700">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Discount Message */}
        <p className="text-[#020248]  font-bold text-lg mt-8">
          GET 25% DISCOUNT ON YOUR FIRST BOOKING
        </p>
      </div>
    </section>
  );
};

export default Services;
