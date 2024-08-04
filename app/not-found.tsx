import { EvaluateHeader } from "@/assets";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <>
      <Navbar />{" "}
      <section
        className="h-20"
        style={{
          background: `url(${EvaluateHeader.src}) rgba(0, 0, 0, 0.75)`,
          backgroundSize: "cover",
          backgroundPosition: "top center",
          backgroundBlendMode: "overlay",
        }}
      ></section>
      <section className=" section-paddings">
        <div className=" container py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl ">
              404
            </h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-secondary md:text-4xl ">
              Something&apos;s missing.
            </p>
            <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
              Sorry, we can&apos;t find that page. You&apos;ll find lots to
              explore on the home page.{" "}
            </p>
            <Button asChild>
              <Link href={"/"}>Back to Homepage</Link>
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default NotFoundPage;
