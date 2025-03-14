"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const testimonials = [
  {
    id: 1,
    name: "Agatha Yunshi",
    image: "/assets/avatar.jpg",
    review:
      "PlumbPro provided excellent service! The technician was punctual and explained everything clearly. My faucet has been working perfectly ever since. Highly recommend them!",
  },
  {
    id: 2,
    name: "David Green",
    image: "/assets/avatar.jpg",
    review:
      "Great customer service and fair pricing. The plumber was professional and fixed my issue efficiently. No hidden fees at all. Will call them again!",
  },
  {
    id: 3,
    name: "Sophia Lee",
    image: "/assets/avatar.jpg",
    review:
      "Highly transparent and skilled professionals. They fixed my leaking toilet within an hour. A trustworthy company I will always use!",
  },
  {
    id: 4,
    name: "James Carter",
    image: "/assets/avatar.jpg",
    review:
      "PlumbPro exceeded my expectations! They handled my heating system installation seamlessly. Fantastic service, and the pricing was reasonable.",
  },
];

const Testimonial = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-10">
      {/* Title */}
      <h2 className="text-2xl font-bold text-[#020248] mb-6 text-center">
        Testimonials
      </h2>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 1 },
        }}
        className="pb-8"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center text-center">
              {/* Profile Image */}
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={64}
                height={64}
                className="rounded-full mb-4"
              />
              {/* Review Text */}
              <p className="text-gray-700 mb-3">{testimonial.review}</p>
              {/* Name */}
              <p className="font-bold text-gray-800">{testimonial.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
