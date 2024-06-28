import { NewsletterBg } from "@/assets";
import React from "react";
import SectionSubheading from "./SectionSubheading";
import SectionHeading from "./SectionHeading";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const NewsletterSection = () => {
  return (
    <section
      className="section-paddings"
      style={{
        background: `url(${NewsletterBg.src}) rgba(0, 0, 0, 0.80)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "multiply",
      }}
    >
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <SectionSubheading>Discover More</SectionSubheading>
          <SectionHeading className={"text-white"}>
            Subscribe To Our Newsletter
          </SectionHeading>
          <p className="text-white/80">
            We offer more than just property selling – it&apos;s a gateway to
            discovering your dreams. From insightful blog articles to
            neighborhood guides, market trends, and expert advice.
          </p>
        </div>
        <div className="mt-10 flex justify-center max-w-xl w-full mx-auto relative">
          <Input
            type="email"
            placeholder="Email address"
            className="w-full rounded-full mr-20"
          />
          <Button className="absolute right-1 top-1/2 -translate-y-1/2 h-[calc(100%-8px)]">
            Subscribe
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
