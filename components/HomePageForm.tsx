"use client";
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
import { Icons } from "./Icons";
import { Counties, States } from "@/assets";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const HomePageForm = () => {
  const router = useRouter();
  const [state, setState] = React.useState("");
  const [county, setCounty] = React.useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    const state = data.get("state");
    const county = data.get("county");
    const apn = data.get("apn");
    if (!state || !county || !apn) return alert("Please fill all fields");
    router.push(`/evaluate?state=${state}&county=${county}&apn=${apn}`);
  };
  return (
    <form className="w-full mt-5 space-y-5 font-popins" onSubmit={handleSubmit}>
      <Select name="state" required onValueChange={(value) => setState(value)}>
        <SelectTrigger icon={<Icons.pin />}>
          <SelectValue placeholder="Enter Property State" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {States.map((state, index) => (
              <SelectItem key={index} value={state}>
                {state}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <Select
        name="county"
        required
        onValueChange={(value) => setCounty(value)}
      >
        <SelectTrigger icon={<Icons.planeBoxed />}>
          <SelectValue placeholder="Enter Property County" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {Counties.filter((c) => c.State === state).map((county, index) => (
              <SelectItem key={index} value={county.County}>
                {county.County}
              </SelectItem>
            ))}
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
  );
};

export default HomePageForm;
