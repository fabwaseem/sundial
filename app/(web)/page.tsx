import { HeroBg } from "@/assets";
import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import SectionSubheading from "@/components/SectionSubheading";
import SectionHeading from "@/components/SectionHeading";
import { features, stats } from "@/config/site";
import NewsletterSection from "@/components/NewsletterSection";
import EmblaCarousel from "@/components/EmblaCarousel";
import StatsSection from "@/components/StatsSection";
import HowItWorksSections from "@/components/HowItWorksSections";
import FaqsSections from "@/components/FaqsSections";

const page = () => {
  return (
    <>
      <section
        className=""
        style={{
          background: `url(${HeroBg.src}) rgba(0, 0, 0, 0.68)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="min-h-screen container text-white flex flex-col lg:flex-row items-center h-full justify-between gap-20 pt-32 pb-20 lg:pt-20">
          <div className="text-white space-y-6 lg:w-[55%]">
            <h1 className="text-3xl lg:text-[64px] font-bold leading-tight">
              Your <span className="text-secondary">One-Stop</span> Shop for
              Selling Lands
            </h1>
            <p className="text-lg text-[#D9D9D9] lg:text-[20px]">
              We specialize in helping landowners like you unlock the value of
              their lands- connecting you with high-value buyers and giving you
              a cash offer within days.
            </p>
            <div className="flex gap-5 flex-wrap">
              <Button asChild>
                <Link href={"/contact"}>Contact Us</Link>
              </Button>
              <Button asChild variant={"outline"}>
                <Link href={"/about"}>Learn MOre</Link>
              </Button>
            </div>
          </div>
          <div className="w-full lg:w-[30%]">
            <div className="border w-full p-5 rounded-3xl border-border/50 bg-black bg-opacity-30 backdrop-blur-lg flex flex-col items-center">
              <h3 className="text-center text-xl max-w-64 font-bold">
                Get INSTANT & FAST Property Evaluation Now
              </h3>
              <div className="relative w-full pb-[56.25%] mt-5 cursor-pointer">
                <Image
                  src="/images/preview.jpg"
                  alt="hero-image"
                  fill
                  className="object-cover"
                />
                <div className="absolute  top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/80 rounded-full flex items-center justify-center">
                  <Icons.play size={24} />
                </div>
              </div>
              <form
                action="/evaluate"
                method="get"
                className="w-full mt-5 space-y-5 font-popins"
              >
                <Select name="state" required>
                  <SelectTrigger icon={<Icons.pin />}>
                    <SelectValue placeholder="Enter Property State" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="apple">Apple</SelectItem>
                      <SelectItem value="banana">Banana</SelectItem>
                      <SelectItem value="blueberry">Blueberry</SelectItem>
                      <SelectItem value="grapes">Grapes</SelectItem>
                      <SelectItem value="pineapple">Pineapple</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Select name="county" required>
                  <SelectTrigger icon={<Icons.planeBoxed />}>
                    <SelectValue placeholder="Enter Property County" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="apple">Apple</SelectItem>
                      <SelectItem value="banana">Banana</SelectItem>
                      <SelectItem value="blueberry">Blueberry</SelectItem>
                      <SelectItem value="grapes">Grapes</SelectItem>
                      <SelectItem value="pineapple">Pineapple</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Input
                  name="apn"
                  type="text"
                  required
                  placeholder="Enter APN"
                  icon={<Icons.target />}
                />
                <Button type="submit" className="w-full">
                  Evaluate Your Property Now
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="section-paddings">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <SectionSubheading>about us</SectionSubheading>
            <SectionHeading>
              Endless Horizons, Endless Potentials
            </SectionHeading>
            <p>
              Our platform is designed to make selling land simple, transparent,
              and rewarding. If you&apos;re looking for a platform that empowers
              individuals and investors to unlock the full potential of their
              properties, Sundial Lands is here to help you every step of the
              way.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 gap-20">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-3 text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center bg-[linear-gradient(270deg,_#219531_0%,_#0A622D_100%)] text-white">
                  <feature.icon />
                </div>
                <h4 className="text-lg font-bold capitalize text-primary">
                  {feature.title}
                </h4>
                <p className="text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <StatsSection />
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
                  Our mission is to revolutionize the way people sell land,
                  making the process simple, secure, and rewarding for everyone
                  involved.
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
                  story is one of passion, innovation, and a relentless
                  commitment to changing lives through exceptional land selling
                  experiences.
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
      <NewsletterSection />
      <HowItWorksSections />
      <section className="section-paddings bg-[#f6f6f6]">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <SectionSubheading>Client&apos;s Testimonial</SectionSubheading>
            <SectionHeading>What Our Clients Say</SectionHeading>
            <p>
              Our clients&apos; satisfaction is at the heart of everything we
              do. We&apos;re proud to share their voices and experiences, as
              they reflect our quality, expertise, and dedication. Discover the
              stories of those who have found success and fulfillment with
              Sundial Lands.
            </p>
          </div>
        </div>

        <EmblaCarousel />
      </section>
      <FaqsSections />
      <section className="section-paddings ">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <SectionSubheading>Our Blog</SectionSubheading>
            <SectionHeading>
              Your Source for Real Estate Insights
            </SectionHeading>
            <p>
              Explore a wide range of articles that cover everything from buying
              and selling tips to investment strategies and market trends. Our
              expert contributors are here to empower you with the information
              you need to make informed decisions.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-x-3 gap-y-6">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index}>
                <div className="pb-[75%] w-full relative">
                  <Image
                    src="/images/preview.jpg"
                    alt="hero-image"
                    fill
                    className="object-cover rounded-lg"
                  />
                  <div className="absolute bottom-4 left-4 bg-black/35 w-14 h-14 rounded-md flex items-center justify-center text-white flex-col ">
                    <span className="font-popins text-xl">21</span>
                    <span className="text-sm font-light font-popins">Aug</span>
                  </div>
                </div>
                <div className="flex mt-4 items-center gap-2">
                  <Icons.folder className="shrink-0 text-primary" size={20} />{" "}
                  <span className="text-secondary text-sm font-popins font-light">
                    Home Buying Tips
                  </span>
                </div>
                <h3 className="text-primary mt-3 font-bold">
                  Keys to Finding a Perfect Home
                </h3>
                <p className="line-clamp-2 text-xs mt-3 font-popins">
                  Navigate the journey to homeownership with confidence. These
                  keys will help you explore...
                </p>
                <Button asChild className="mt-4" size={"sm"}>
                  <Link href={"#"}>Read More</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
