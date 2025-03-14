import { ShieldCheck } from "lucide-react";

const StatsSection = () => {
  return (
    <section className="w-full py-12 px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
        {/* Stat 1 */}
        <div className="bg-[#FAEBC8] shadow-md rounded-lg p-8 text-center">
          <h3 className="text-2xl font-semibold text-gray-900">10k</h3>
          <p className="text-gray-700 text-md">Complete Freedom</p>
        </div>

        {/* Stat 2 */}
        <div className="bg-[#FAEBC8] shadow-md rounded-lg p-8 text-center flex flex-col items-center">
          <ShieldCheck className="w-6 h-6 text-gray-800 mb-2" />
          <h3 className="text-2xl font-semibold text-gray-900">
            Satisfied Customer
          </h3>
        </div>

        {/* Stat 3 */}
        <div className="bg-[#FAEBC8] shadow-md rounded-lg p-8 text-center">
          <h3 className="text-2xl font-semibold text-gray-900">5k+</h3>
          <p className="text-gray-700 text-md">Years of Experience</p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
