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

const EvaluateForm = () => {
  const [formData, setFormData] = useState({
    state: "",
    county: "",
    apn: "",
  });
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.has("state")) {
    }
  }, []);

  return (
    <form className="mt-10 space-y-5">
      <div>
        <label className="text-sm font-semibold mb-2 block" htmlFor="location">
          Location
        </label>
        <Input
          type="text"
          id="location"
          placeholder="State, County, City, Town, Street, Address, Number"
          className="bg-transparent border-input text-black placeholder:text-black/50  "
        />
      </div>
      <div className="flex gap-5 flex-col md:flex-row md:gap-10 items-center">
        <div className="w-full">
          <label className="text-sm font-semibold mb-2 block" htmlFor="email">
            Email Address
          </label>
          <Input
            type="email"
            id="email"
            placeholder="Enter email address"
            className="bg-transparent border-input text-black placeholder:text-black/50  "
          />
        </div>
        <div className="w-full">
          <label className="text-sm font-semibold mb-2 block" htmlFor="phone">
            Phone Number
          </label>
          <Input
            type="text"
            id="phone"
            placeholder="Enter phone number"
            className="bg-transparent border-input text-black placeholder:text-black/50  "
          />
        </div>
      </div>
      <div className="flex gap-5 flex-col md:flex-row md:gap-10 items-center">
        <div className="w-full">
          <label
            className="text-sm font-semibold mb-2 block"
            htmlFor="property-type"
          >
            Property Type
          </label>
          <Select name="state" required>
            <SelectTrigger className="bg-transparent border-input text-black placeholder:text-black/50  ">
              <SelectValue placeholder="Select property type" />
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
        </div>
        <div className="w-full">
          <label className="text-sm font-semibold mb-2 block">
            Does The Property Have Road Access?
          </label>
          <Select name="state" required>
            <SelectTrigger className="bg-transparent border-input text-black placeholder:text-black/50  ">
              <SelectValue placeholder="Select" />
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
        </div>
      </div>
      <div className="flex gap-5 flex-col md:flex-row md:gap-10 items-center">
        <div className="w-full">
          <label
            className="text-sm font-semibold mb-2 block"
            htmlFor="property-type"
          >
            List Nearby Amenities
          </label>
          <Select name="state" required>
            <SelectTrigger className="bg-transparent border-input text-black placeholder:text-black/50  ">
              <SelectValue placeholder="Select" />
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
        </div>
        <div className="w-full">
          <label className="text-sm font-semibold mb-2 block" htmlFor="price">
            Estimated Selling Price
          </label>
          <Input
            type="text"
            id="price"
            placeholder="Enter estimated price"
            className="bg-transparent border-input text-black placeholder:text-black/50  "
          />
        </div>
      </div>
      <textarea
        name="note"
        id="note"
        placeholder="Add notes (optional)"
        className="border border-input rounded-xl w-full py-2 px-4 min-h-28"
      ></textarea>
      <Button type="submit" className="w-full" size={"sm"}>
        Get Valuation
      </Button>
    </form>
  );
};

export default EvaluateForm;
