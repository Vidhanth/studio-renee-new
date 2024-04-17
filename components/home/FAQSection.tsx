"use client";

import { archivo } from "@/fonts";
import { FadeInLeftWhenVisible } from "@/transitions/FadeInLeftWhenVisible";
import { FAQ } from "@/types/HomeData";

type FAQProps = {
  faqItems: FAQ[];
};

export default function FAQSection({ faqItems }: FAQProps) {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-5">
        <div className="w-full text-center md:text-start">
          <FadeInLeftWhenVisible>
            <h2 className={`${archivo.className} text-3xl font-bold my-4`}>
              Frequently Asked Questions
            </h2>
          </FadeInLeftWhenVisible>
          <FadeInLeftWhenVisible delay={0.2}>
            <div className="text-gray-700">
              Find answers to commonly asked questions about our interior design
              and architecture services.
            </div>
          </FadeInLeftWhenVisible>
        </div>
        <div className="space-y-0 w-full">
          {faqItems.map((faq, index) => (
            <FadeInLeftWhenVisible key={index} delay={0.2 + (0.2 * index)}>
              <FAQItem                
                question={faq.question}
                answer={faq.answer}
              />
            </FadeInLeftWhenVisible>
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
