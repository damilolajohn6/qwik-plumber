"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "What plumbing services do you offer?",
    answer:
      "We offer drain cleaning, leak detection, pipe repair, water heater installation, emergency plumbing, and more.",
  },
  {
    question: "Do you provide emergency plumbing services?",
    answer:
      "Yes! We offer 24/7 emergency plumbing services to ensure your plumbing issues are resolved quickly.",
  },
  {
    question: "How do I know if I have a plumbing leak?",
    answer:
      "Signs of a plumbing leak include high water bills, damp walls, musty odors, or unexplained water pooling.",
  },
  {
    question: "How often should I schedule plumbing maintenance?",
    answer:
      "We recommend annual plumbing maintenance to prevent costly repairs and ensure your system runs efficiently.",
  },
  {
    question: "What should I do if my pipes burst?",
    answer:
      "Turn off the main water supply immediately and call a professional plumber to assess and repair the damage.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-[#0A0A5E] text-center mb-8">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-lg">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-4 py-3 text-left text-gray-800 font-medium focus:outline-none"
            >
              {faq.question}
              <ChevronDown
                className={`w-5 h-5 transition-transform ${
                  openIndex === index ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="px-4 py-2 text-gray-600 border-t border-gray-200">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
