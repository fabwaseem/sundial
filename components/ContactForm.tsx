"use client";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "./ui/button";

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
      <Button type="submit" className="w-full" size={"sm"}>
        Send Message
      </Button>
    </form>
  );
};

export default ContactForm;
