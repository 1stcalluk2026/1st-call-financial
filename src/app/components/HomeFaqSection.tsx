"use client";

import { useState } from "react";
import { HOME_FAQS } from "@/lib/home-faqs";

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-5">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left font-bold text-[#2d459c] text-lg hover:text-blue-800 transition-colors"
      >
        <span>{question}</span>
        <span className="text-2xl ml-4">{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && (
        <div className="mt-4 text-gray-700 leading-relaxed text-base animate-fade-in">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function HomeFaqSection() {
  return (
    <section className="bg-white py-20 px-6 border-t border-gray-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#2d459c] mb-10 text-left">
          Frequently Asked Questions
        </h2>

        <div className="space-y-2">
          {HOME_FAQS.map((faq) => (
            <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
