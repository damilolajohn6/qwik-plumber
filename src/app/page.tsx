import Blog from "@/components/Blog";
import GetAQuote from "@/components/GetAQuote";
import HeroSection from "@/components/Hero";
import Services from "@/components/Services";
import StatsSection from "@/components/Stats";
import Testimonial from "@/components/Testimonial";
import WhoWeAre from "@/components/WhoWeAre";

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <StatsSection />
      <WhoWeAre />
      <Services />

      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-center gap-6">
        <div className="w-full md:w-1/2">
          <GetAQuote />
        </div>
        <div className="w-full md:w-1/2">
          <Testimonial />
        </div>
      </div>

      <Blog />
    </div>
  );
}
