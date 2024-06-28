import React from "react";
import SectionSubheading from "./SectionSubheading";
import SectionHeading from "./SectionHeading";
import { faqs } from "@/config/site";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const FaqsSections = () => {
  return (
    <section className="section-paddings ">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <SectionSubheading>faq</SectionSubheading>
          <SectionHeading>Frequently Asked Questions</SectionHeading>
          <p>
            Explore our comprehensive FAQ section to find answers to common
            questions about RockMould&apos;s services, the real estate process,
            and more. If you don&apos;t see your question listed, feel free to
            reach out to our team for personalized assistance.
          </p>
        </div>
        <div className="shadow-box p-5 md:p-10 rounded-2xl mt-10">
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-primary font-bold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-popins">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqsSections;
