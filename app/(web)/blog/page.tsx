import { EvaluateHeader } from "@/assets";
import PageBreadcrumbs from "@/components/PageBreadcrumbs";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Icons } from "@/components/Icons";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import BlogSidebar from "@/components/BlogSidebar";

const page = () => {
  return (
    <>
      <PageBreadcrumbs
        title="Our Blog"
        description="Our Blog Explore a wide range of articles that cover everything from selling tips to investment strategies and market trends."
        image={EvaluateHeader}
      />
      <section className="section-paddings !pt-7">
        <div className="container">
          <Carousel className="w-full relative">
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="relative min-h-72 rounded-lg overflow-hidden ">
                    <Image
                      src={"/images/preview.jpg"}
                      alt={"Placeholder"}
                      fill
                      className={"object-cover -z-10"}
                    />
                    <div className="absolute w-full h-full bg-black/25 -z-10"></div>
                    <div className="pt-56 pb-3 h-full pl-5 md:pl-10 ">
                      <div className="flex text-white gap-2 text-sm  items-center">
                        <p>August 11, 2023 </p>
                        <Icons.folder size={20} />
                        <p className="text-secondary font-bold">Category</p>
                      </div>
                      <h3 className="text-white font-bold max-w-md mt-2">
                        Maximizing Your Land&apos;s Potential: Tips for
                        Enhancing Your Property Before Selling
                      </h3>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute right-5 bottom-0 ">
              <CarouselPrevious className="static mr-4 bg-white text-black" />
              <CarouselNext className="static bg-white text-black" />
            </div>
          </Carousel>
        </div>
      </section>
      <section className="section-paddings ">
        <div className="container">
          <h3 className="text-black font-semibold">Trending News</h3>
          <p className="max-w-sm mt-2 text-sm">
            All the aspects you cherish from the conference compressed into a
            single-day virtual event.{" "}
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-6">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index}>
                <div className="pb-[80%] w-full relative">
                  <Image
                    src="/images/preview.jpg"
                    alt="hero-image"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-primary mt-3 font-bold">
                  Keys to Finding a Perfect Home
                </h3>
                <p className="line-clamp-2 text-xs mt-3 font-popins">
                  Navigate the journey to homeownership with confidence. These
                  keys will help you explore...
                </p>
                <div className="flex mt-5 gap-2 text-xs  items-center font-semibold">
                  <p>August 11, 2023 </p>
                  <Icons.folder size={16} className="text-primary" />
                  <p className="text-secondary ">Category</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-paddings ">
        <div className="container">
          <h3 className="text-black font-semibold">News & Posts</h3>
          <p className="max-w-sm mt-2 text-sm">
            All the aspects you cherish from the conference compressed into a
            single-day virtual event.
          </p>
          <div className="mt-8 flex flex-col md:flex-row gap-10">
            <div className=" flex flex-col gap-10">
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="flex gap-3 max-sm:flex-col">
                  <div className="pb-[80%] sm:pb-[25%] sm:w-72 w-full shrink-0 relative">
                    <Image
                      src="/images/preview.jpg"
                      alt="hero-image"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <div className="flex gap-2 text-xs  items-center font-semibold">
                      <Icons.folder size={16} className="text-primary" />
                      <p className="text-secondary ">Category</p>
                    </div>
                    <h3 className="text-primary mt-3 font-bold">
                      Keys to Finding a Perfect Home
                    </h3>
                    <p className="line-clamp-5 text-xs mt-3 font-popins">
                      All the aspects you cherish from the conference compressed
                      into a single-day virtual event. All the aspects you
                      cherish from the conference compressed into a single-day
                      virtual event. All the aspects you cherish from the
                      conference
                    </p>
                    <Separator className="my-4" />
                    <div className="flex gap-2 text-xs  items-center justify-between ">
                      <p className="font-semibold">August 11, 2023 </p>
                      <div className="flex items-center gap-2">
                        <Icons.message className="text-primary" size={16} />{" "}
                        <p>5 Comments</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <BlogSidebar />
          </div>
        </div>
      </section>
      <section className="section-paddings ">
        <div className="container">
          <h3 className="text-black font-semibold">Recommended</h3>
          <p className="max-w-sm mt-2 text-sm">
            All the aspects you cherish from the conference compressed into a
            single-day virtual event.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-6">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index}>
                <div className="pb-[80%] w-full relative">
                  <Image
                    src="/images/preview.jpg"
                    alt="hero-image"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="flex mt-5 gap-2 text-xs  items-center font-semibold">
                  <p>August 11, 2023 </p>
                  <Icons.folder size={16} className="text-primary" />
                  <p className="text-secondary ">Category</p>
                </div>
                <h3 className="text-primary mt-3 font-bold">
                  Keys to Finding a Perfect Home
                </h3>
                <p className="line-clamp-2 text-xs mt-3 font-popins">
                  Navigate the journey to homeownership with confidence. These
                  keys will help you explore...
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
