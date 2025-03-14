import Image from "next/image";
import React from "react";

const AboutHero = () => {
  return (
    <section className="w-full bg-white py-12 md:py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8">
        {/* Left Side - Text Content */}
        <div className="w-full bg-white rounded-lg p-6 md:p-10 text-center md:text-left">
          <h1 className="text-2xl md:text-4xl font-extrabold text-[#0A0A5E] leading-tight">
            My Name is Gaius Your trusted Local Plumber
            <br className="hidden md:block" />
            With Over 5years+ of experiences providing reliable{" "}
            <br className="hidden md:block" /> affordable plumbing solutions for
            home owners
          </h1>
          {/* <p className="text-gray-700 mt-4 text-sm md:text-base">
            At PlumbPro Solutions, we provide top-notch plumbing services around
            the clock—24/7. Our expert team is just a call away, ready to tackle
            any emergency with swift and reliable solutions. Experience peace of
            mind knowing that your plumbing is in the hands of professionals
            dedicated to delivering the best service possible.
          </p>
          <Button className="mt-6 bg-[#0A0A5E] text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-[#080847] transition-all">
            Call Us Now
          </Button> */}
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
  );
};

export default AboutHero;
