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
            <h2 className={`${archivo.className} text-3xl font-bold mb-4 md:mt-4`}>
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
  return (
    <div
      className={`border-b pt-4 ${
        showBottomBorder ? "border-tertiary pb-3" : "border-transparent"
      }`}
    >
      <div className=" font-bold">{faq.question}</div>
      <p className="text-base text-gray-700">{faq.answer}</p>
    </div>
  );
}
