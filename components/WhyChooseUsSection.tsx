import React from "react";
import SectionSubheading from "./SectionSubheading";
import SectionHeading from "./SectionHeading";
import { Icons } from "./Icons";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const WhyChooseUsSection = () => {
  return (
    <section className="section-paddings">
      <div className="container flex gap-x-20 gap-y-10 flex-col md:flex-row">
        <div className="md:w-1/2 flex flex-col justify-between gap-10">
          <div>
            <SectionSubheading>Why Choose Us?</SectionSubheading>
            <SectionHeading>
              Your Trusted & Dedicated Partner in Land Business
            </SectionHeading>
            <ul className="list-disc px-5 text-sm space-y-5">
              <li>
                Where innovation meets tradition in the world of land selling.
                We are a forward-thinking platform that combines cutting-edge
                technology with a deep commitment to trust and transparency.
              </li>
              <li>
                Our mission is to revolutionize the way people sell land, making
                the process simple, secure, and rewarding for everyone involved.
              </li>
            </ul>
            <Button asChild className="mt-5">
              <Link href={"/about"}>Learn More</Link>
            </Button>
          </div>
          <div className="relative w-full pb-[56.25%]">
            <Image
              src={"/images/preview.jpg"}
              alt="hero-image"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="md:w-1/2 flex md:flex-col justify-between gap-10 flex-col-reverse">
          <div className="relative w-full pb-[56.25%]">
            <Image
              src={"/images/preview.jpg"}
              alt="hero-image"
              fill
              className="object-cover"
            />{" "}
            <div className="absolute  top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/80 rounded-full flex items-center justify-center">
              <Icons.play size={24} />
            </div>
          </div>
          <div>
            <SectionSubheading>Our Journey</SectionSubheading>
            <SectionHeading>A Trending Land Selling Platform</SectionHeading>
            <ul className=" text-sm space-y-5">
              <li>
                We&apos;re more than just a land selling platform – we&apos;re
                architects of dreams and facilitators of possibilities. Our
                story is one of passion, innovation, and a relentless commitment
                to changing lives through exceptional land selling experiences.
              </li>
              <li>
                Founded by a group of real estate enthusiasts with a shared
                vision, Sundial Lands was born from the desire to reshape the
                way people engage with property.
              </li>
            </ul>{" "}
            <Button asChild className="mt-5">
              <Link href={"/about"}>Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
