import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import homeData from "../../../data/pages/home_page.json";
import HoverCTAButton from "../../HoverCTAButton";

export default function Hero() {
  const hero = homeData.hero;

  const [imageIndex, setImageIndex] = useState(0);
  const [mountKey] = useState(() => Date.now());

  useEffect(() => {
    if (!hero.settings.autoPlay) return;

    const timer = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % hero.slides.length);
    }, hero.settings.autoPlaySpeed);

    return () => clearInterval(timer);
  }, [hero.settings.autoPlay, hero.settings.autoPlaySpeed, hero.slides.length]);

  const textSlide = hero.slides[0];
  const HERO_PATH = "/src/assets/images/homepage/hero/";

  return (
    <section
  id="hero"
  className="relative overflow-hidden bg-white min-h-[calc(100vh-80px)] flex items-center py-10 sm:py-14 lg:py-20"
  style={{
    backgroundImage: `url(${HERO_PATH}${hero.backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-white/80 backdrop-blur-[1px]" />

  <div className="relative z-10 max-w-7xl mx-auto w-full px-5 sm:px-8 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
      {/* LEFT SIDE */}
      <div className="min-w-0 lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left lg:-mt-30">
        <motion.div
          key={`left-${mountKey}`}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full"
        >
          <span className="inline-block uppercase tracking-[1px] font-bold text-primary text-xs sm:text-sm mb-4 break-words max-w-full">
            {textSlide.badge}
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.05] tracking-tight text-heading break-words">
            {textSlide.heading}
          </h1>

          <p className="mt-5 text-textcolor sm:text-base lg:text-lg text-sub leading-8 max-w-xl mx-auto lg:mx-0 break-words">
            {textSlide.subheading}
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          key={`buttons-${mountKey}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-8 lg:mt-10 w-full sm:w-auto"
        >
          <HoverCTAButton
            to={hero.buttons.primary.link}
            text={hero.buttons.primary.text}
            hoverText={hero.buttons.primary.hoverText}
          />

          {/* Secondary Button */}
          <Link
            to={hero.buttons.secondary.link}
            className="shrink-0 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border-2 border-primary text-gray-900 font-bold hover:shadow-[var(--shadow-glow)] hover:scale-105 transition-all duration-300 whitespace-nowrap max-w-full"
          >
            {hero.buttons.secondary.text}
          </Link>
        </motion.div>
      </div>

      {/* RIGHT SIDE */}
      <div className="min-w-0 lg:col-span-7 flex flex-col items-center mt-6 lg:mt-0">
        <motion.div
          key={`image-wrapper-${mountKey}`}
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-3xl bg-primary rounded-2xl p-1 sm:p-2 lg:p-3 rotate-0 lg:-rotate-4 shadow-xl"
        >
          {/* All images render, only active one is visible */}
          <div className="relative w-full rounded-xl overflow-hidden">
            {hero.slides.map((slide, index) => (
              <motion.img
                key={slide.id}
                src={`${HERO_PATH}${slide.image}`}
                alt={slide.alt}
                animate={{ opacity: index === imageIndex ? 1 : 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full h-auto max-w-full object-cover rounded-xl select-none block"
                style={{
                  position: index === 0 ? "relative" : "absolute",
                  top: 0,
                  left: 0,
                }}
                draggable={false}
              />
            ))}
          </div>
        </motion.div>

        {/* Explore Button */}
        <motion.div
          key={`explore-${mountKey}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          <Link
            to={hero.buttons.explore.link}
            className="hover:shadow-[var(--shadow-glow)] hover:scale-105 mt-6 lg:mt-8 inline-block px-7 py-3 rounded-full border-2 bg-white shadow-sm font-semibold text-gray-900 border-primary transition-all duration-300"
          >
            {hero.buttons.explore.text}
          </Link>
        </motion.div>
      </div>
    </div>
  </div>
</section>
  );
}
