import { EvaluateHeader } from "@/assets";
import EvaluateForm from "@/components/EvaluateForm";
import SectionHeading from "@/components/SectionHeading";
import React from "react";

const page = () => {
  return (
    <>
      <section
        className="h-20"
        style={{
          background: `url(${EvaluateHeader.src}) rgba(0, 0, 0, 0.75)`,
          backgroundSize: "cover",
          backgroundPosition: "top center",
          backgroundBlendMode: "overlay",
        }}
      ></section>
      <section className="section-paddings">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <SectionHeading className="font-bold">
              Land Valuation
            </SectionHeading>
            <p>
              Fill out our online form and our team will get back to you
              promptly. Let us know how we can assist you in your land selling
              journey.
            </p>
          </div>
          <EvaluateForm />
        </div>
      </section>
    </>
  );
};

export default page;
