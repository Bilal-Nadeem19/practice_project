import React from "react";
import FeautureCard from "../../FeautureCard";
import homeData from "../../../data/pages/home_page.json";
import { motion } from "framer-motion";

export default function KeyFeatures() {
  const { title, items } = homeData.keyFeatures;

  return (
    // 1. Section ko w-full kiya taake background color (#F9FAFB) poori screen par phel jaye
    <section 
     id="features" className="bg-[#F9FAFB] py-10 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 w-full">
      
      {/* 2. Naya Container Div jo content ko 6xl (1152px) par limit aur center karega */}
      <div className="max-w-6xl mx-auto">
        
        {/* Heading Animation */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-10"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary inline-block relative">
            {title}
            <span className="block w-10 sm:w-12 h-[2px] bg-primary mx-auto mt-2 rounded-full" />
          </h2>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {items.map((feature) => (
            <FeautureCard key={feature.id} feature={feature} />
          ))}
        </div>

      </div>
    </section>
  );
}