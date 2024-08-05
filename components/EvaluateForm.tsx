"use client";
import React from "react";
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
  return (
    <form className="mt-10 space-y-5">
      <div>
        <label className="text-sm font-semibold mb-2 block" htmlFor="location">
          Location
        </label>
        <Input
          type="text"
          id="location"
          required
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
            required
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
            required
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
          <Input
            type="text"
            id="property-type"
            placeholder="Enter property type"
            className="bg-transparent border-input text-black placeholder:text-black/50  "
          />
        </div>
        <div className="w-full">
          <label className="text-sm font-semibold mb-2 block">
            Does The Property Have Road Access?
          </label>
          <Input
            type="text"
            id="property-type"
            placeholder="Yes/No"
            className="bg-transparent border-input text-black placeholder:text-black/50  "
          />
        </div>
      </div>
      <div className="flex gap-5 flex-col md:flex-row md:gap-10 items-center">
        <div className="w-full">
          <label className="text-sm font-semibold mb-2 block" htmlFor="nearby">
            List Nearby Amenities
          </label>
          <Input
            type="text"
            id="nearby"
            placeholder="Nearby Emenities"
            className="bg-transparent border-input text-black placeholder:text-black/50  "
          />
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
