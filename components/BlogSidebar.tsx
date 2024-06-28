import React from "react";
import { Separator } from "./ui/separator";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Image from "next/image";
import { socialLinks } from "@/config/site";
import Link from "next/link";

const BlogSidebar = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-bold">Recent</h3>
        <div className="mt-8 space-y-6">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index}>
              <h3 className="text-primary text-sm font-semibold">
                Top Rated Real Estate Platform with Years
              </h3>
              <p className="line-clamp-2 text-xs my-2">
                All the aspects you cherish from the conference compressed into
                a single-day virtual event.
              </p>
              <p className="text-xs font-semibold text-black/70">
                August 11, 2023{" "}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Separator />
      <div className="relative h-52">
        <Image
          src={"/images/preview.jpg"}
          alt="hero-image"
          fill
          className="rounded-lg object-cover"
        />
      </div>
      <Separator />
      <div>
        <h3 className="text-sm font-bold">Newsletter</h3>
        <p className="text-xs mt-2">
          Get all the latest content delivered to you a few times a month
        </p>
        <div className="mt-4 flex justify-center max-w-xl w-full mx-auto relative">
          <Input
            type="email"
            placeholder="Email address"
            className="w-full rounded-full mr-20 bg-transparent text-black placeholder:text-black/50 text-sm h-12"
          />
          <Button
            className="absolute right-0 top-1/2 -translate-y-1/2 h-full"
            size={"sm"}
          >
            Subscribe
          </Button>
        </div>
      </div>
      <Separator />
      <div>
        <h3 className="text-sm font-bold">Follow Us</h3>
        <p className="text-xs mt-2">
          Like, Share, Comment and follow us on our social media platforms
        </p>
        <div className="flex gap-4 mt-4">
          {socialLinks.map((link, index) => (
            <Link key={index} href={link.url} target="_blank">
              <Image
                src={link.icon}
                alt={link.name}
                width={30}
                height={30}
                className="rounded-full object-cover"
              />
            </Link>
          ))}
        </div>
      </div>
      <Separator />
      <div>
        <h3 className="text-sm font-bold">Categories</h3>
        <div>
          {Array.from({ length: 3 }).map((_, index) => (
            <Link
              href={"#"}
              className="block text-xs font-bold text-black py-3 border-b last:border-none"
            >
              Category
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;
