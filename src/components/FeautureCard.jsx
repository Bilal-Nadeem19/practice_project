import React, { useState } from "react";
import { Phone, Calendar, FileText, Mic, BarChart, Tag } from "lucide-react";
import { motion } from "framer-motion";

const iconMap = {
  phone: Phone,
  calendar: Calendar,
  "file-text": FileText,
  mic: Mic,
  "bar-chart": BarChart,
  tag: Tag,
};

const images = import.meta.glob(
  "../assets/images/homepage/keyFeautures/*.{webp,png,jpg,jpeg}",
  { eager: true },
);

function getImage(filename) {
  const match = Object.entries(images).find(([key]) =>
    key.endsWith(`/${filename}`),
  );
  return match ? match[1].default : "";
}

export default function FeautureCard({ feature }) {
  const [expanded, setExpanded] = useState(false);
  const Icon = iconMap[feature.icon] || FileText;
  const imgSrc = getImage(feature.image);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden flex flex-col min-h-[360px] sm:min-h-[400px] lg:min-h-[420px] w-full"
    >
      <div className="overflow-hidden w-full h-40 sm:h-48 lg:h-52 rounded-t-2xl group cursor-pointer">
        <div className="relative w-full h-full bg-white flex justify-start items-center">
          <img
            src={imgSrc}
            alt={feature.title}
            className="h-full object-cover transition-all duration-300 ease-out origin-left w-full
                       group-hover:w-[84%]"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="py-4 px-5 sm:py-5 sm:px-6 lg:px-8 flex flex-col flex-1">
        <h3 className="flex items-center gap-2 text-sm sm:text-base font-semibold text-gray-900 mb-2 sm:mb-3">
          <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0" />
          {feature.title}
        </h3>

        {feature.description && (
          <p className="text-xs sm:text-sm text-textcolor mb-2">{feature.description}</p>
        )}

        <ul className="text-xs sm:text-sm text-textcolor space-y-1 flex-1">
          {feature.points.map((point, idx) => (
            <li key={idx} className="flex gap-1.5 leading-snug">
              <span className="text-textcolor">-</span>
              <span>{point}</span>
            </li>
          ))}

          {expanded &&
            feature.morePoints?.map((point, idx) => (
              <li key={`more-${idx}`} className="flex gap-1.5 leading-snug">
                <span className="text-color">-</span>
                <span>{point}</span>
              </li>
            ))}
        </ul>

        {feature.morePoints && feature.morePoints.length > 0 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-primary text-xs sm:text-sm font-medium mt-3 inline-block hover:underline text-left w-fit"
          >
            {expanded ? feature.link.hideText : feature.link.text}
          </button>
        )}
      </div>
    </motion.div>
  );
}