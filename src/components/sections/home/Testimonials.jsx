import React, { useState, useEffect, useCallback } from "react";
import TestimonialCard from "../../TestimonialCard";
import homeData from "../../../data/pages/home_page.json";
import { motion, AnimatePresence } from "framer-motion";

const CARDS_PER_SLIDE = 3;

export default function Testimonials() {
  const { title, subtitle, autoPlayInterval, reviews } = homeData.testimonials;
  const totalSlides = Math.ceil(reviews.length / CARDS_PER_SLIDE);
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  useEffect(() => {
    const timer = setInterval(next, autoPlayInterval);
    return () => clearInterval(timer);
  }, [next, autoPlayInterval]);

  const goTo = (index) => setCurrent(index);

  const currentReviews = reviews.slice(
    current * CARDS_PER_SLIDE,
    current * CARDS_PER_SLIDE + CARDS_PER_SLIDE,
  );

  return (
    <section id="testimonials" className="w-full py-10 sm:py-12 lg:py-16 bg-gradient-to-b from-sky-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          className="text-center mb-10 sm:mb-14"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-primary inline-block relative">
            {title}
            <span className="block w-10 sm:w-12 h-1 bg-primary mx-auto mt-2 rounded-full" />
          </h2>
          {subtitle && (
            <p className="text-xs sm:text-sm text-textcolor mt-4 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* Carousel with fast slide */}
        {/* Carousel */}
        <div className="overflow-hidden relative w-full">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.div
              key={current}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6"
            >
              {currentReviews.map((review) => (
                <TestimonialCard key={review.id} review={review} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "bg-primary w-3 h-3"
                  : "bg-gray-300 w-3 h-3 hover:bg-gray-400"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
