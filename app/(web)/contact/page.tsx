import { EvaluateHeader } from "@/assets";
import ContactForm from "@/components/ContactForm";
import { Icons } from "@/components/Icons";
import PageBreadcrumbs from "@/components/PageBreadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import {
  aboutPageFeatures,
  contactDetails,
  features,
  stats,
  team,
} from "@/config/site";
import React from "react";

const page = () => {
  const contactDetailsArray = Object.entries(contactDetails);

  return (
    <>
      <PageBreadcrumbs
        title="Contact Us"
        description="Have questions, need assistance, or ready to embark on your real estate journey? Our team is here to help."
        image={EvaluateHeader}
      />
      <section className="section-paddings">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <SectionHeading className="font-bold">Get In Touch</SectionHeading>
            <p>
              Get In Touch Fill out our online form and our team will get back
              to you promptly. Let us know how we can assist you in your real
              estate journey.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
      <section className="section-paddings">
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 ">
          {contactDetailsArray.map(([key, value], index) => (
            <div
              key={index}
              className="flex items-center shadow-box rounded-xl  gap-5 flex-col p-5 md:p-10 text-center"
            >
              <div className="w-16 h-16 bg-[linear-gradient(90deg,_#219531_0%,_#0F7537_100%)] rounded-full flex items-center justify-center">
                {key === "email" ? (
                  <Icons.mail size={32} />
                ) : key === "address" ? (
                  <Icons.pin2 size={32} />
                ) : (
                  <Icons.phone size={32} />
                )}
              </div>

              <h4 className="text-lg font-bold capitalize text-primary">
                {key === "email"
                  ? "Email Us"
                  : key === "address"
                  ? "Address"
                  : "Contact Number"}
              </h4>
              <p className="text-sm">{value}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default page;
