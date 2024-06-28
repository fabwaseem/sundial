import React from "react";
import SectionSubheading from "./SectionSubheading";
import SectionHeading from "./SectionHeading";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { Icons } from "./Icons";

const HowItWorksSections = () => {
  return (
    <section className="section-paddings">
      <div className="container relative flex items-center gap-20 flex-col md:flex-row">
        <div className="bg-[linear-gradient(270deg,_#219531_0%,_#0A622D_100%)] p-5 md:p-10 rounded-xl absolute  md:w-[80%] hidden md:block h-full -z-10"></div>
        <div className="p-5 md:p-10 md:w-[70%] max-md:bg-[linear-gradient(270deg,_#219531_0%,_#0A622D_100%)]  rounded-xl">
          <SectionSubheading>how it works</SectionSubheading>
          <SectionHeading className="text-white">
            Simplifying Your Land Selling Journey
          </SectionHeading>
          <ul className="list-disc px-5 text-sm space-y-5 text-white/80">
            <li>
              Research: Provide us with basic pieces of information using our
              "Cash Offer Form", and we conduct a research on your property.
            </li>
            <li>
              Offer Presentation: After research is complete and your property
              meets our buying criteria, we contact you with a cash offer.
            </li>
            <li>
              Agreement: When all parties come to agreement with the terms, we
              prepare a purchase agreement and present to you.
            </li>
            <li>
              Open Escrow: Once we receive your signed agreement, we begin our
              title examination on the property.
            </li>
            <li>
              Get Paid: Once our examination is complete and we establish there
              is a title to the landed property, we process your payment.
            </li>
          </ul>
          <div className="flex gap-5 flex-wrap mt-5">
            <Button asChild className="text-primary bg-white hover:bg-white/85">
              <Link href={"/evaluate"}>Get An Offer</Link>
            </Button>
            <Button asChild variant={"outline"} className="text-white">
              <Link href={"/about"}>Learn More</Link>
            </Button>
          </div>
        </div>
        <div className=" hidden md:block md:w-[35%] ">
          <div className="relative w-full pb-[100%]">
            <Image
              src={"/images/how-it-works.jpg"}
              alt="hero-image"
              layout="fill"
              className="object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSections;
