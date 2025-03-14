import Image from "next/image";

const WeAre = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Side - Text Content */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0A0A5E] mb-4">
            Who We Are
          </h2>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            Gaius plumbing services—your trusted local plumbing service
            dedicated to providing top-quality solutions for all your plumbing
            needs. With years of experience serving.
          </p>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed mt-3">
            We pride ourselves on delivering reliable, affordable, and
            professional services for homeowners and businesses alike.
          </p>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed mt-3">
            Our mission is simple: to keep your plumbing running smoothly so you
            can focus on what matters most. We combine expertise with
            cutting-edge tools to ensure every project is handled with care and
            precision.
          </p>

          {/* Newsletter Subscription */}
          <div className="mt-6">
            <p className="text-gray-800 font-medium mb-2">
              We’d like to keep you updated on effective maintenance
            </p>
            <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 outline-none"
              />
              <button className="bg-[#0A0A5E] text-white px-4 py-2 hover:bg-[#080847] transition-all">
                →
              </button>
            </div>
          </div>
        </div>

        {/* Right Side - Image Section */}
        <div className="relative flex gap-4">
          <div className="w-full">
            <Image
              src="/assets/about.jpg"
              alt="Plumbing Tools"
              width={500}
              height={500}
              className="rounded-lg object-cover rounded-tl-[2rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeAre;
