import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import homeData from "../../../data/pages/home_page.json";

const headingVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

const getCardVariants = () => ({
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
});

export default function Pricing() {
  const { title, subtitle, yearlyDiscountLabel, yearlyDiscountPercent, plans } =
    homeData.pricing;
  const [isYearly, setIsYearly] = useState(false);

  const getPrice = (monthlyPrice) => {
    if (isYearly) {
      return Math.round(
        monthlyPrice - (monthlyPrice * yearlyDiscountPercent) / 100,
      );
    }
    return monthlyPrice;
  };

  const getWeeklyPrice = (monthlyPrice) => {
    return Math.round(getPrice(monthlyPrice) / 4);
  };

  return (
    <section id="pricing" className="w-full py-10 sm:py-12 lg:py-16 px-2 sm:px-3 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div
          className="text-center mb-10 sm:mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={headingVariants}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary inline-block relative">
            {title}
            <span className="block w-14 sm:w-16 h-1 bg-primary mx-auto mt-6 rounded-full" />
          </h2>
          {subtitle && (
            <p className="text-sm sm:text-base text-textcolor mt-4 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}

          {/* Toggle Section - Active hone par bold effect ke sath */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <span
              className={`text-sm transition-all duration-300 ${
                !isYearly
                  ? "text-[#50A2FF] font-bold"
                  : "text-textcolor font-semibold"
              }`}
            >
              Monthly
            </span>

            <button
              onClick={() => setIsYearly((prev) => !prev)}
              className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${isYearly ? "bg-sky-400" : "bg-gray-300"}`}
              aria-label="Toggle yearly pricing"
            >
              <span
                className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-300 ${isYearly ? "translate-x-6" : "translate-x-0"}`}
              />
            </button>

            <span
              className={`text-sm transition-all duration-300 ${
                isYearly
                  ? "text-[#50A2FF] font-bold"
                  : "text-textcolor font-semibold"
              }`}
            >
              Yearly{" "}
              <span
                className={`transition-all duration-300 ${
                  isYearly
                    ? "text-[#00A63E] font-bold"
                    : "text-green-500 font-semibold"
                }`}
              >
                {yearlyDiscountLabel}
              </span>
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-5 items-center mt-12">
          {plans.map((plan, index) => {
            const variants = getCardVariants();
            const price = getPrice(plan.monthlyPrice);
            const weekly = getWeeklyPrice(plan.monthlyPrice);

            return (
              <motion.div
                key={plan.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={variants}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
                style={{
                  transition:
                    "box-shadow 0.15s ease, transform 0.15s ease, border-color 0.15s ease",
                }}
                whileHover={
                  plan.popular
                    ? { y: -8, boxShadow: "0 20px 40px rgba(14,165,233,0.25)" }
                    : {
                        y: -8,
                        borderColor: "#38bdf8",
                        boxShadow: "0 10px 30px rgba(14,165,233,0.15)",
                      }
                }
                className={`relative flex flex-col bg-white rounded-2xl ${
                  plan.popular
                    ? "border border-sky-300 shadow-xl sm:py-6"
                    : "border border-gray-300 shadow-sm"
                }`}
              >
                {/* Badge */}
                {plan.popular && plan.badge && (
                  <span className="absolute top-0 right-0 bg-primary text-white text-xs font-bold tracking-wide px-4 py-1.5 rounded-bl-lg rounded-tr-lg">
                    {plan.badge}
                  </span>
                )}

                {/* Content — no fixed height, no scroll */}
                <div className="px-6 sm:px-7 pt-7 pb-7">
                  {/* Plan name */}
                  <h3 className="text-xl sm:text-2xl font-bold text-heading tracking-wide">
                    {plan.name}
                  </h3>
                  <p className="text-sm sm:text-base text-textcolor mt-1">
                    {plan.userLimit}
                  </p>

                  {/* Price */}
                  <div className="mt-5">
                    <span className="text-3xl sm:text-4xl font-bold text-heading">
                      ${price}
                    </span>
                    <span className="text-sm sm:text-base text-textcolor">
                      /month
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-[#9DA4B2] mt-1 font-medium">
                    (${weekly} / week)
                  </p>

                  {/* Features */}
                  <ul className="mt-6 space-y-3.5">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-6 h-6 text-green-400 mt-0.5 shrink-0" />
                        <span className="text-base sm:text-lg text-[#3E4754] leading-snug">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}

                  <motion.a
                    href={plan.ctaHref}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className={`mt-8 block text-center w-full text-sm sm:text-base font-semibold py-3 rounded-xl transition-colors duration-200 ${
                      plan.popular
                        ? " hover:shadow-[var(--shadow-glow)] bg-sky-400 hover:bg-sky-500 text-white"
                        : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                    }`}
                  >
                    {plan.ctaText}
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
