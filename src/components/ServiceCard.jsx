import React from "react";
import { m } from "framer-motion";
import {
  Stethoscope,
  Dumbbell,
  Hand,
  Scale,
  Utensils,
  Brain,
  Bone,
  Footprints,
} from "lucide-react";

const iconMap = {
  stethoscope: Stethoscope,
  dumbbell: Dumbbell,
  hand: Hand,
  scale: Scale,
  utensils: Utensils,
  brain: Brain,
  bone: Bone,
  footprints: Footprints,
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function ServiceCard({ industry, index }) {
  const Icon = iconMap[industry.icon] || Stethoscope;

  // Row ke andar position (0,1,2) — isi sy stagger delay banegi
  const delay = (index % 3) * 0.18;

  return (
    <m.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 p-5 sm:p-6 flex flex-col max-w-[350px] mx-auto w-full"
    >
      {/* Icon aur heading ko ek line me lane ke liye parent div */}
      <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
        {/* Icon box size and alignment */}
        <div className="size-14 sm:size-16 rounded-lg bg-icon-bg flex items-center justify-center shrink-0">
          <Icon className="size-7 sm:size-8 text-primary" />
        </div>

        {/* Heading jo ab icon ke sath show hogi */}
        <h3 className="text-base sm:text-lg font-bold text-heading">
          {industry.title}
        </h3>
      </div>

      {/* Description section */}
      <p className="text-sm sm:text-base text-textcolor leading-snug flex-1 mb-3">
        {industry.description}
      </p>

      {/* Action link */}
      <a
        href={industry.link.href}
        className="text-primary text-md sm:text-base font-medium hover:underline w-fit"
      >
        {industry.link.text}
      </a>
    </m.div>
  );
}
