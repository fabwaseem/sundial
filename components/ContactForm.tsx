"use client";
import React, { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import Link from "next/link";

const ContactForm = () => {
  return (
    <form className="mt-10 space-y-8">
      <div className="flex gap-5 flex-col md:flex-row md:gap-10 items-center">
        <div className="w-full">
          <Input
            type="text"
            id="name"
            placeholder="Your name"
            className="bg-transparent border-input text-black placeholder:text-black/50  "
          />
        </div>
        <div className="w-full">
          <Input
            type="email"
            id="email"
            placeholder="Email address"
            className="bg-transparent border-input text-black placeholder:text-black/50  "
          />
        </div>
      </div>
      <div className="flex gap-5 flex-col md:flex-row md:gap-10 items-center">
        <div className="w-full">
          <Input
            type="text"
            id="phone"
            placeholder="Phone number"
            className="bg-transparent border-input text-black placeholder:text-black/50  "
          />
        </div>
        <div className="w-full">
          <Input
            type="text"
            id="subject"
            placeholder="Subject"
            className="bg-transparent border-input text-black placeholder:text-black/50  "
          />
        </div>
      </div>

      <textarea
        name="message"
        id="message"
        placeholder="Your message"
        className="border border-input rounded-xl w-full py-2 px-4 min-h-32"
      ></textarea>
      <div className="items-top flex space-x-2">
        <Checkbox id="terms1" />
        <div className="grid gap-1.5 leading-none">
          <label
            htmlFor="terms1"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            I agree to receive marketing and customer service calls and text
            messages from Sundial Land.
          </label>
          <p className="text-sm text-muted-foreground">
            Consent is not a condition of purchase. Msg/data rates may apply.
            Msg frequency varies. Reply STOP to unsubscribe.{" "}
            <Link href={"/privacy-policy"} className="text-accent font-bold">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
      <Button type="submit" className="w-full" size={"sm"}>
        Send Message
      </Button>
    </form>
  );
};

export default ContactForm;
