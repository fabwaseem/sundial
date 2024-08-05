import { EvaluateHeader } from "@/assets";
import HowItWorksSections from "@/components/HowItWorksSections";
import PageBreadcrumbs from "@/components/PageBreadcrumbs";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <PageBreadcrumbs
        title="Privacy Policy"
        description="Our Privacy Policy"
        image={EvaluateHeader}
      />
      <section className="section-paddings post-container">
        <div className="container">
          <h1 className="text-2xl lg:text-4xl font-bold text-black ">
            Privacy Policy
          </h1>
          <div className="mt-20 flex flex-col md:flex-row gap-10">
            <article className="prose lg:prose-xl max-w-full">
              <p>
                Sundial Lands LLC, doing business as Sundiallands.com
                (“Company”, “we” or “us”) provides a platform to facilitate
                property owners in submitting their information to be contacted
                by us regarding their properties (“Service” or “Services”). This
                Privacy Policy explains how we collect, use, disclose, and
                safeguard your information when you visit our website
                [sundiallands.com] (the “Site”). Please read this Privacy Policy
                carefully. If you do not agree with the terms of this Privacy
                Policy, please do not access the Site.
              </p>
              <h4>1. Information We Collect</h4>
              <p>
                We may collect information about you in a variety of ways. The
                information we may collect on the Site includes:
              </p>
              <p>
                <strong>Personal Data</strong> Personally identifiable
                information, such as your name, shipping address, email address,
                and telephone number, and demographic information, such as your
                age, gender, hometown, and interests, that you voluntarily give
                to us when you register with the Site or when you choose to
                participate in various activities related to the Site, such as
                online chat and message boards.
              </p>
              <p>
                <strong>Derivative Data</strong> Information our servers
                automatically collect when you access the Site, such as your IP
                address, your browser type, your operating system, your access
                times, and the pages you have viewed directly before and after
                accessing the Site.
              </p>
              <p>
                <strong>Financial Data</strong> Financial information, such as
                data related to your payment method (e.g., valid credit card
                number, card brand, expiration date) that we may collect when
                you purchase, order, return, exchange, or request information
                about our services from the Site.
              </p>
              <p>
                <strong>Mobile Device Data</strong> Device information, such as
                your mobile device ID, model, and manufacturer, and information
                about the location of your device, if you access the Site from a
                mobile device.
              </p>
              <h4>2. Use of Your Information</h4>
              <p>
                We use the information we collect about you in the following
                ways:
              </p>
              <ul>
                <li>To process transactions.</li>
                <li>
                  To send you updates, promotional materials, and other
                  information about our services.
                </li>
                <li>To improve our website and customer service.</li>
                <li>To respond to your inquiries, requests, and comments.</li>
                <li>
                  To monitor and analyze usage and trends to improve your
                  experience with the Site.
                </li>
                <li>To comply with legal obligations.</li>
              </ul>
              <h4>3. Sharing of Your Information</h4>
              <p>
                We may share information we have collected about you in certain
                situations. Your information may be disclosed as follows:
              </p>
              <p>
                <strong>By Law or to Protect Rights</strong> If we believe the
                release of information about you is necessary to respond to
                legal process, to investigate or remedy potential violations of
                our policies, or to protect the rights, property, and safety of
                others, we may share your information as permitted or required
                by any applicable law, rule, or regulation.
              </p>
              <p>
                <strong>Service Providers</strong> We may share your information
                with third parties that perform services for us or on our
                behalf, including payment processing, data analysis, email
                delivery, hosting services, customer service, and marketing
                assistance.
              </p>
              <p>
                <strong>Business Transfers</strong> We may share or transfer
                your information in connection with, or during negotiations of,
                any merger, sale of company assets, financing, or acquisition of
                all or a portion of our business to another company.
              </p>
              <p>
                Data will not be sold or shared with third parties for
                promotional or marketing purposes.
              </p>
              <h4>4. Security of Your Information</h4>
              <p>
                We use administrative, technical, and physical security measures
                to help protect your personal information. While we have taken
                reasonable steps to secure the personal information you provide
                to us, please be aware that despite our efforts, no security
                measures are perfect or impenetrable, and no method of data
                transmission can be guaranteed against any interception or other
                type of misuse.
              </p>
              <h4>5. Policy for Children</h4>
              <p>
                We do not knowingly solicit information from or market to
                children under the age of 13. If we learn that we have collected
                personal information from a child under age 13 without
                verification of parental consent, we will delete that
                information as quickly as possible.
              </p>
              <h4>6. Changes to This Privacy Policy</h4>
              <p>
                We may update this Privacy Policy from time to time in order to
                reflect, for example, changes to our practices or for other
                operational, legal, or regulatory reasons. We will notify you of
                any changes by posting the new Privacy Policy on our website. If
                you have any questions or concerns about this Privacy Policy or
                our privacy practices, please contact us at
                offers@sundiallands.com
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
