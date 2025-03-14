import Image from "next/image";
import { Button } from "./ui/button";

const WhoWeAre = () => {
  return (
    <section className="w-full py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">
        {/* Left Side - 40% */}
        <div className="w-full lg:w-2/5">
          <h2 className="text-3xl font-bold text-[#020248]">Who we Are</h2>
          <p className="text-[#020248] mt-4 leading-relaxed">
            Your trusted plumbing service dedicated to providing top-quality
            solutions for all your plumbing needs. With years of experience in
            the plumbing industry, we pride ourselves in delivering reliable,
            affordable, and professional services for homeowners and businesses
            alike.
          </p>
          <button className="mt-6 bg-[#020248] text-white font-semibold px-6 py-2 rounded-md hover:bg-gray-200">
            See More
          </button>

          {/* Subscription Box */}
          <div className="mt-8 bg-white rounded-md px-4 py-4 w-full max-w-md">
            <p className="text-[#020248] text-md text-center">
              We will like to keep you updated on how to effectively handle
              maintenance.
            </p>
            <div className="flex items-center border border-gray-300 rounded-md mt-3 px-2 py-1">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 outline-none bg-transparent text-[#020248] px-2"
              />
              <Button className="text-[#020248] font-semibold">➝</Button>
            </div>
          </div>
        </div>

        {/* Right Side - 60% */}
        <div className="w-full lg:w-3/5 bg-[#020248] grid grid-cols-1 sm:grid-cols-3 py-24 px-[20px] gap-6 rounded-tl-[2rem]">
          {/* Card 1 */}
          <div className="rounded-lg shadow-lg overflow-hidden">
            <div className="bg-white">

                <Image
                src="/assets/trust.jpg"
                alt="Trust & Credibility"
                className="w-full h-40 object-cover"
                width={300}
                height={200}
                />
                <p className="text-center py-3 text-[#020248] font-semibold">
                Trust & Credibility
                </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-lg shadow-lg overflow-hidden">
            <div className="bg-white">
              <Image
                src="/assets/trust.jpg"
                alt="Certified Worker"
                className="w-full h-40 object-cover"
                width={300}
                height={200}
              />
              <p className="text-center py-3 text-[#020248] font-semibold">
                Certified Worker
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded-lg shadow-lg overflow-hidden">
            <div className="bg-white">
                <Image
                src="/assets/plumber.jpg"
                alt="License card"
                className="w-full h-40 object-cover"
                width={300}
                height={200}
                />
                <p className="text-center py-3 text-[#020248] font-semibold">
                License card
                </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
