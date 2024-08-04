import React from "react";
import { Icons } from "./Icons";
import { stats } from "@/config/site";

const StatsSection = () => {
  return (
    <section className="bg-muted py-10">
      <div className="container flex flex-wrap justify-between gap-x-10 gap-y-5">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="border rounded-full pl-4 pr-6 py-2 bg-background flex items-center gap-3 min-w-56 w-full sm:w-auto"
          >
            <Icons.checkCircle size={32} className="text-secondary" />
            <div>
              <h6 className="text-primary font-bold text-lg">{stat.title}</h6>
              <p className="text-sm">{stat.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
