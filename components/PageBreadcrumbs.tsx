"use client";
import { HeroBg } from "@/assets";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Icons } from "./Icons";
import { cn } from "@/lib/utils";
import { StaticImageData } from "next/image";

interface Props {
  title: string;
  description: string;
  image: StaticImageData | string;
}

const PageBreadcrumbs = ({ title, description, image }: Props) => {
  const pathname = usePathname();
  const allPaths = pathname.split("/");
  const paths = allPaths.filter((path) => path !== "");

  return (
    <section
      className="pt-32 pb-14"
      style={{
        background: `url(${
          typeof image === "string" ? image : image.src
        }) rgba(0, 0, 0, 0.68)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="container text-white flex md:items-center gap-10 justify-between flex-col md:flex-row">
        <div>
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="max-w-lg mt-2 text-white/70">{description}</p>
        </div>
        <div className="flex items-center gap-4">
          <Link href={"/"}>Home</Link>
          <Icons.chevronRightOutline />
          {paths.map((item, index) => (
            <span key={index} className="flex items-center gap-4">
              <Link
                href={`/${item}`}
                className={cn(
                  "capitalize",
                  paths[paths.length - 1] === item && "text-secondary"
                )}
              >
                {/* if length more than 10 slice and add... */}
                {item.length > 12 ? item.slice(0, 12) + "..." : item}
              </Link>
              {index !== paths.length - 1 && <Icons.chevronRightOutline />}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PageBreadcrumbs;
