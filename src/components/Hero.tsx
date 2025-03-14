import Image from "next/image";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section className="w-full bg-white py-12 md:py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Left Side - Text Content */}
        <div className="bg-white shadow-lg rounded-lg p-6 md:p-10 max-w-lg ">
          <h1 className="text-2xl md:text-4xl font-extrabold text-[#0A0A5E] leading-tight">
            We Provide Top Notch Plumbing & Services Repair at Your Door Step
            24/7.
          </h1>
          <p className="text-gray-700 mt-4 text-sm md:text-base">
            At PlumPro solutions, we provide top-notch plumbing services around
            the clock—24/7. Our expert team is just a call away, ready to tackle
            any emergency with swift and reliable solutions. Experience peace of
            mind knowing that your plumbing is in the hands of professionals
            dedicated to delivering the best service possible. Don’t let
            plumbing issues disrupt your day! Contact us now, and let us help
            you get back to what matters most!
          </p>
          <Button className="mt-6 bg-[#0A0A5E] text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-[#080847] transition-all">
            Call Us Now
          </Button>
        </div>

        {/* Right Side - Image Content */}
        <div className="relative w-full md:w-1/2 flex justify-center ">
          <Image
            src="/assets/hero.png"
            alt="Plumbing Tools"
            width={500}
            height={400}
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
