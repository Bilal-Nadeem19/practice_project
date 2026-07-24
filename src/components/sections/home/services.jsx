import React from "react";
import { m } from "framer-motion";
import ServiceCard from "../../ServiceCard";
import homeData from "../../../data/pages/home_page.json";

export default function Services() {
  const { title, subtitle, items, viewAll } = homeData.services;

  return (
    <section id="industries" className="py-10 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-2 max-w-6xl mx-auto">
      <div className="text-center mb-8 sm:mb-10">
        <h2 className="text-4xl sm:text-4xl lg:text-5xl font-bold text-primary inline-block relative">
          {title}
          <span className="block w-10 sm:w-12 h-1 bg-primary mx-auto mt-2 rounded-full" />
        </h2>
        {subtitle && (
          <p className="text-xs sm:text-sm text-textcolor mt-4 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {items.map((industry, index) => (
          <ServiceCard key={industry.id} industry={industry} index={index} />
        ))}
      </div>

      {viewAll && (
        <div className="text-center mt-8 sm:mt-10">
          
           <a href={viewAll.href}
            className="inline-block bg-icon-bg hover:bg-primary hover:shadow-[var(--shadow-glow)] text-gray-800 text-sm font-medium px-6 py-2.5 rounded-lg transition"
          >
            {viewAll.text}
          </a>
        </div>
      )}
    </section>
  );
}