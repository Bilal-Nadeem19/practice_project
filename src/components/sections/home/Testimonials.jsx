import React, { useState, useEffect, useCallback } from "react";
import TestimonialCard from "../../TestimonialCard";
import homeData from "../../../data/pages/home_page.json";
import { m, AnimatePresence } from "framer-motion";

// Breakpoint ke hisab se ek slide mein kitne cards dikhane hain
function getCardsPerSlide() {
  if (typeof window === "undefined") return 3;
  const w = window.innerWidth;
  if (w < 640) return 1;   // mobile
  if (w < 1024) return 2;  // tablet (sm-lg)
  return 3;                // desktop
}

export default function Testimonials() {
  const { title, subtitle, autoPlayInterval, reviews } = homeData.testimonials;

  const [cardsPerSlide, setCardsPerSlide] = useState(getCardsPerSlide());
  const [current, setCurrent] = useState(0);

  // Resize par cardsPerSlide update karo
  useEffect(() => {
    const handleResize = () => setCardsPerSlide(getCardsPerSlide());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.ceil(reviews.length / cardsPerSlide);

  // Agar totalSlides kam ho jaye (resize ki wajah se) to current ko range mein rakho
  useEffect(() => {
    setCurrent((prev) => (prev >= totalSlides ? 0 : prev));
  }, [totalSlides]);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  useEffect(() => {
    const timer = setInterval(next, autoPlayInterval);
    return () => clearInterval(timer);
  }, [next, autoPlayInterval]);

  const goTo = (index) => setCurrent(index);

  const currentReviews = reviews.slice(
    current * cardsPerSlide,
    current * cardsPerSlide + cardsPerSlide,
  );

  return (
    <section id="testimonials" className="w-full py-10 sm:py-12 lg:py-16 bg-gradient-to-b from-sky-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <m.div
          className="text-center mb-10 sm:mb-14"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-bold text-primary inline-block relative">
            {title}
            <span className="block w-10 sm:w-12 h-1 bg-primary mx-auto mt-2 rounded-full" />
          </h2>
          {subtitle && (
            <p className="text-xs sm:text-sm text-textcolor mt-4 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </m.div>

        {/* Carousel */}
        <div className="overflow-hidden relative w-full">
          <AnimatePresence mode="popLayout" initial={false}>
            <m.div
              key={current}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {currentReviews.map((review) => (
                <TestimonialCard key={review.id} review={review} />
              ))}
            </m.div>
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