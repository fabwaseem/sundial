import { EvaluateHeader } from "@/assets";
import FaqsSections from "@/components/FaqsSections";
import PageBreadcrumbs from "@/components/PageBreadcrumbs";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <PageBreadcrumbs
        title="How it works"
        description="Selling Your Vacant Land To Sundial Lands."
        image={EvaluateHeader}
      />
      
      <FaqsSections />
    </>
  );
};

export default page;
