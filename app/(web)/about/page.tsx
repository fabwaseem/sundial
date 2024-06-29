import { EvaluateHeader } from "@/assets";
import HowItWorksSections from "@/components/HowItWorksSections";
import { Icons } from "@/components/Icons";
import NewsletterSection from "@/components/NewsletterSection";
import PageBreadcrumbs from "@/components/PageBreadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import SectionSubheading from "@/components/SectionSubheading";
import StatsSection from "@/components/StatsSection";
import { Button } from "@/components/ui/button";
import { aboutPageFeatures, features, stats, team } from "@/config/site";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <PageBreadcrumbs
        title="About Us"
        description="We operate in all parts of the globe. We as well partner with capable partners ready to pay cash for your lands."
        image={EvaluateHeader}
      />
      <section className="section-paddings">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <SectionSubheading>introduction</SectionSubheading>
            <SectionHeading>Overview of Sundial Lands</SectionHeading>
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
              <SectionSubheading>OUR MISSION</SectionSubheading>
              <SectionHeading>
                Your Trusted & Dedicated Partner in Land Business
              </SectionHeading>
              <ul className="list-disc px-5 text-sm space-y-5">
                <li>
                  Our mission is to empower landowners to easily and effectively
                  sell their land, providing them with the tools and support
                  they need to achieve their goals. We are committed to
                  simplifying the land selling process, ensuring transparency,
                  and maximizing value for our users.
                </li>
                <li>
                  Our team of experienced real estate professionals brings
                  in-depth knowledge of local markets, trends, and purchase
                  opportunities.
                </li>
              </ul>
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
              <SectionSubheading>Our VISION </SectionSubheading>
              <SectionHeading>A Trending Land Selling Platform</SectionHeading>
              <ul className=" text-sm space-y-5">
                <li>
                  To create a world where selling land is simple, transparent,
                  and rewarding for everyone involved. We strive to be the go-to
                  platform for landowners looking to sell their land quickly and
                  easily, while also providing buyers with access to a diverse
                  range of properties.
                </li>
                <li>
                  Through innovation and dedication, we aim to revolutionize the
                  land selling experience and empower landowners to unlock the
                  full potential of their land.
                </li>
                <li>
                  To create an avenue for a very swift and stress free mode of
                  transaction for clients.
                </li>
              </ul>{" "}
            </div>
          </div>
        </div>
      </section>
      <section className="section-paddings">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <SectionSubheading>Why Choose Us?</SectionSubheading>
            <SectionHeading>Your Partner in Land Sale Success</SectionHeading>
            <p>
              Our platform is designed to make selling land simple, transparent,
              and rewarding. If you&apos;re looking for a platform that empowers
              individuals and investors to unlock the full potential of their
              properties, Sundial Lands is here to help you every step of the
              way.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 mt-10">
            {aboutPageFeatures.map((item, index) => (
              <div
                key={index}
                className="shadow-box border rounded-xl p-5 md:p-10 text-center group hover:bg-primary transition-all"
              >
                <item.icon className="mx-auto text-primary group-hover:text-white" />
                <h3 className="mt-10 font-bold text-primary group-hover:text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm group-hover:text-white/80">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <NewsletterSection />
      <HowItWorksSections />
      <section className="section-paddings bg-[#f6f6f6]">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <SectionSubheading>OUR TEAM</SectionSubheading>
            <SectionHeading>
              Driving Innovation through Excellence
            </SectionHeading>
            <p>
              With a deep understanding of the real estate landscape and a
              passion for transforming the industry, our leadership team is
              focused on ensuring that RockMould remains a trailblazer in
              delivering exceptional real estate experiences. Meet the
              individuals who are steering RockMould toward a future defined by
              innovation, trust, and success.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-10 mt-10">
            {team.map((item, index) => (
              <div
                key={index}
                className="shadow-box border rounded-xl p-5 md:p-10 text-center group hover:bg-primary transition-all"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={120}
                  height={120}
                  className="mx-auto rounded-full w-32 h-32 object-cover"
                />
                <h3 className="mt-5 font-bold text-black group-hover:text-white">
                  {item.name}
                </h3>
                <p className="text-secondary text-sm font-semibold mt-2">
                  {item.title}
                </p>
                <p className="mt-2 text-sm group-hover:text-white/80">
                  {item.description}
                </p>
                <div className="flex mt-5 justify-center items-center gap-2">
                  {item.links.map((link, index) => (
                    <Link key={index} href={link.url}>
                      <Image
                        src={link.icon}
                        alt={link.name}
                        width={30}
                        height={30}
                        className="rounded-full"
                      />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
