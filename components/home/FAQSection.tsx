"use client";

import { archivo } from "@/fonts";
import { FAQ } from "@/types/HomeData";
import FadeAnimation from "../FadeAnimation";
import { FaChevronDown } from "react-icons/fa6";
import { useState } from "react";
import { motion } from "framer-motion";

type FAQProps = {
  faqItems: FAQ[];
};

export default function FAQSection({ faqItems }: FAQProps) {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-5 items-start">
        <div className="w-full text-center md:text-start md:mr-10">
          <FadeAnimation animateOnVisibility={true}>
            <h2
              className={`${archivo.className} text-3xl md:text-5xl font-bold mb-4 md:mt-4`}
            >
              Frequently Asked Questions
            </h2>
          </FadeAnimation>
          <FadeAnimation delay={0.2} animateOnVisibility={true}>
            <div className="text-gray-700">
              Find answers to commonly asked questions about our interior design
              and architecture services.
            </div>
          </FadeAnimation>
        </div>
        <div className="space-y-0 w-full">
          {faqItems.map((faq, index) => (
            <FadeAnimation
              key={index}
              delay={0.2 + 0.2 * index}
              overrideDirection="left"
              animateOnVisibility={true}
            >
              <FAQItem
                faq={faq}
                showBottomBorder={index !== faqItems.length - 1}
              />
            </FadeAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}

type FAQItemProps = {
  faq: FAQ;
  showBottomBorder: boolean;
};

function FAQItem({ faq, showBottomBorder }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div
      className={`border-b pt-4 ${
        showBottomBorder ? "border-tertiary pb-3" : "border-transparent"
      }`}
    >
      {/* Question and Chevron */}
      <div
        className="flex justify-between items-center font-bold cursor-pointer"
        onClick={toggleOpen}
      >
        <span>{faq.question}</span>
        <FaChevronDown
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>

      {/* Animated Answer */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden mt-2"
      >
        <div>
          {faq.answer.split("\n").map((line, index) => (
            <p key={index} className="text-base text-gray-700">
              {line}
            </p>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

