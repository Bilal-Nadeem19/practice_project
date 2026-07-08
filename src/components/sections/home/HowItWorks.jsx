import React from "react";
import { motion } from "framer-motion";
import { Phone, Calendar, FileText } from "lucide-react";
import homeData from "../../../data/pages/home_page.json";

const iconMap = {
  phone: Phone,
  calendar: Calendar,
  "file-text": FileText,
};

const headingVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

// Direction-based variants: left card from left, center from bottom, right from right
const getStepVariants = (position) => {
  if (position === "left") {
    return {
      hidden: { opacity: 0, x: -80, y: 0 },
      visible: { opacity: 1, x: 0, y: 0 },
    };
  }
  if (position === "right") {
    return {
      hidden: { opacity: 0, x: 80, y: 0 },
      visible: { opacity: 1, x: 0, y: 0 },
    };
  }
  // center
  return {
    hidden: { opacity: 0, x: 0, y: 60 },
    visible: { opacity: 1, x: 0, y: 0 },
  };
};

export default function HowItWorks() {
  const { title, subtitle, steps } = homeData.howItWorks;

  return (
    <section className="w-full py-10 sm:py-12 lg:py-16 bg-gradient-to-b from-sky-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          className="text-center mb-10 sm:mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={headingVariants}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-primary inline-block relative">
            {title}
            <span className="block w-10 sm:w-12 h-1 bg-primary mx-auto mt-2 rounded-full" />
          </h2>
          {subtitle && (
            <p className="text-xs sm:text-sm text-textcolor mt-4 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-8">
          {steps.map((step, index) => {
            const Icon = iconMap[step.icon] || Phone;
            const position =
              index === 0 ? "left" : index === steps.length - 1 ? "right" : "center";
            const variants = getStepVariants(position);

            return (
              <motion.div
                key={step.id}
                className="flex flex-col items-center text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={variants}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {/* Icon circle */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-b from-[#53BDE2] to-[#3caecf] flex items-center justify-center mb-5 shadow-md shrink-0">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>

                {/* Card with number attached at bottom border */}
                <motion.div
                  whileHover={{ y: -6, boxShadow: "0 12px 24px rgba(14,165,233,0.18)" }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="relative w-full bg-white rounded-lg border-t-4 border-sky-500 shadow-sm px-5 pt-6 pb-8 sm:px-6 sm:pt-7 sm:pb-9"
                >
                  <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-snug">
                    {step.description}
                  </p>

                  {/* Number circle attached to card's bottom border */}
                  <div className="absolute left-1/2 -bottom-4 -translate-x-1/2 w-8 h-8 rounded-full border border-sky-400 bg-white text-sky-500 text-sm font-semibold flex items-center justify-center">
                    {step.id}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}