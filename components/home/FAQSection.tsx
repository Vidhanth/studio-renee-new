"use client";

import { archivo } from "@/fonts";
import { FAQ } from "@/types/HomeData";
import FadeAnimation from "../FadeAnimation";

type FAQProps = {
  faqItems: FAQ[];
};

export default function FAQSection({ faqItems }: FAQProps) {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-5">
        <div className="w-full text-center md:text-start">
          <FadeAnimation animateOnVisibility={true}>
            <h2 className={`${archivo.className} text-3xl font-bold my-4`}>
              Frequently Asked Questions
            </h2>
          </FadeAnimation>
          <FadeAnimation
            delay={0.2}
            animateOnVisibility={true}
          >
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
              <FAQItem question={faq.question} answer={faq.answer} />
            </FadeAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer }: FAQ) {
  return (
    <div className="border-b border-tertiary py-4">
      <div className=" font-bold">{question}</div>
      <p className="text-base text-gray-700">{answer}</p>
    </div>
  );
}
