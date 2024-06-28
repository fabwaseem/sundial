import React from "react";
import { Icons } from "./Icons";
import {
  contactDetails,
  footerNavigationLinks,
  footerQuickLinks,
  socialLinks,
} from "@/config/site";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[linear-gradient(270deg,_#219531_0%,_#0A622D_100%)] section-paddings text-white">
      <div className="container grid grid-cols-2 md:grid-cols-6 gap-10">
        <div className="col-span-2">
          <div className="h-20">
            <Icons.logo className="w-40" />
          </div>
          <p className="text-sm  font-light opacity-85">
            We specialize in helping landowners like you unlock the value of
            their lands- connecting you with high-value buyers and giving you a
            cash offer within days! Our land-buying process is trustworthy,
            seamless and efficient with your best interest at heart.
          </p>
          <div className="mt-10">
            <p className="text-sm mt-5 font-light opacity-85">Get In Touch:</p>
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
        </div>
        <div className="hidden md:block"></div>
        <div>
          <div className="h-20">
            <h3>Navigation</h3>
          </div>
          <ul className="flex flex-col gap-4 text-white/85 font-light">
            {footerNavigationLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.path}
                  className="capitalize font-popins text-sm"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="h-20">
            <h3>Quick Links</h3>
          </div>
          <ul className="flex flex-col gap-4 text-white/85 font-light">
            {footerQuickLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.path}
                  className="capitalize font-popins text-sm"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="max-md:col-span-2">
          <div className="h-20">
            <h3>Contact Us</h3>
          </div>
          <ul className="flex flex-col gap-4 text-white/85 font-light">
            <li className=" font-popins text-sm">{contactDetails.address}</li>
            <li>
              <Link
                href={`mailto:${contactDetails.email}`}
                className=" font-popins text-sm break-words"
              >
                {contactDetails.email}
              </Link>
            </li>
            <li>
              <Link
                href={`tel:${contactDetails.phone}`}
                className="capitalize font-popins text-sm"
              >
                {contactDetails.phone}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
