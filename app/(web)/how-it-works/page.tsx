import { EvaluateHeader } from "@/assets";
import HowItWorksSections from "@/components/HowItWorksSections";
import PageBreadcrumbs from "@/components/PageBreadcrumbs";
import { contactDetails } from "@/config/site";
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
      <section className="section-paddings post-container">
        <div className="container">
          <h1 className="text-2xl lg:text-4xl font-bold text-black ">
            Selling Your Vacant Land To Sundial Lands
          </h1>
          <div className="mt-20 flex flex-col md:flex-row gap-10">
            <article className="prose lg:prose-xl max-w-full">
              <h3>Selling land the easy way</h3>
              <p>
                We follow a tried and true process of purchasing your property.
                You don&apos;t have to deal with paperwork, you don&apos;t have
                to talk to county authorities, and you don&apos;t have to travel
                at all. In total it literally takes only about 15 minutes of
                your valuable time from offer request to cash payout. We take
                care of all time-consuming tasks that you would have todo
                yourself if you would sell your land by yourself or with a
                realtor.
              </p>
              <h3>Simple 3-Step Land Selling Process</h3>
              <p>
                We&apos;re land owners as well and know the hassle it can be to
                sell a piece of land you don&apos;t want. But we&apos;ve honed
                in our land buying process to 3 simple steps to make turning
                your unwanted land into cash as simple as possible. Learn more
                about the process to sell land to ExpressLandOffers.
              </p>

              <Image
                src="/images/how-it-works.jpg"
                width={300}
                height={300}
                alt="Call Or Submit Your Information On our Website"
                className="float-right ml-5"
              />

              <div>
                <h4>Step 1: Call Or Submit Your Information On our Website</h4>
                <p>
                  To make an offer for your property we need to get some
                  information first. We only ask for data that is neccessary to
                  reasearch your property and craft an offer that best fits your
                  situation. The best way is to
                  <span className="text-blue-600">
                    {" "}
                    submit the data directly on this website
                  </span>
                  . This allows you to lookup the missing pieces of information
                  without ruffle or excitement. If you prefer talking to one of
                  our Land Buying Specialists just give us a call{" "}
                  <a
                    className="text-blue-600"
                    href={`tel:+1${contactDetails.phone}`}
                  >
                    {contactDetails.phone}
                  </a>
                  .
                </p>
              </div>

              <Image
                src="/images/how-it-works.jpg"
                width={300}
                height={300}
                alt="Call Or Submit Your Information On our Website"
                className="float-left mr-5"
              />
              <h4>Step 2: Get Your Fair Cash Offer Within 2 Days</h4>
              <p>
                After you submitted your property information, we will research
                the vacant land parcel at the county office and will present you
                with an all-cash offer. You will receive our fair cash offer for
                your land within 2 business days. Usually, when we don&apos;t
                have to talk to local authorities, we&apos;re much faster than
                that. There is absolutely no obligation or hassle ever. Once you
                sign the offer, you can return it to us through email or snail
                mail via United States Postal Service. If you have any
                questions, just contact us and we will explain every detail.
              </p>
              <Image
                src="/images/how-it-works.jpg"
                width={300}
                height={300}
                alt="Call Or Submit Your Information On our Website"
                className="float-right  ml-5"
              />
              <h4>Step 3: Choose Your Closing Date And Sell Your Land</h4>
              <p>
                Once we receive the signed purchase agreement; we will open an
                escrow account, forward the purchase agreement to a reputable
                local title company or attorney specializing in real estate, and
                arrange a closing date on your terms.{" "}
                <strong>
                  We take care of all closing costs and traveling so that you
                  don&apos;t have to do anything but sign, return paperwork and
                  collect your cash.
                </strong>
              </p>
              <p>
                The attorney or title company will prepare a deed for you to
                sign and notarize so that we can take possession of the land.
                Sometimes we will assign the property into a trust for long term
                holding purposes.{" "}
                <strong>
                  The best part is that you will receive your cash payment
                  through electronic bank wire or a cashier’s check directly
                  from the title company.
                </strong>
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
