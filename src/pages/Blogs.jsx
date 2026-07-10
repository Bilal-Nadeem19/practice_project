import { useState } from "react";
import { motion } from "framer-motion";
import blogData from "../data/pages/blog.json";
import featuredImage from "../assets/images/homepage/blogs/whats-new-illustration.webp";
import { Calendar } from "lucide-react";

import img1 from "../assets/images/homepage/blogs/one.webp";
import img2 from "../assets/images/homepage/blogs/two.webp";
import img3 from "../assets/images/homepage/blogs/three.webp";
import img4 from "../assets/images/homepage/blogs/four.webp";
import img5 from "../assets/images/homepage/blogs/five.webp";
import img6 from "../assets/images/homepage/blogs/six.webp";

const imageMap = {
  "one.webp": img1,
  "two.webp": img2,
  "three.webp": img3,
  "four.webp": img4,
  "five.webp": img5,
  "six.webp": img6,
};

const heroData = blogData.hero;
const introData = blogData.intro;

// Text: dim se full opacity, jaisa hero sections mein hota hai
const fadeInDim = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

// Row animation: left se right, poori row ek unit ki tarah
const rowVariants = {
  hidden: { opacity: 0, x: 150, scale: 0.96 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 3, ease: [0.22, 1, 0.36, 1] },
  },
};

// "[[text]]" ko highlighted (primary color) span mein convert karta hai
const renderDescription = (text) => {
  const parts = text.split(/\[\[(.*?)\]\]/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <span key={i} className="text-primary font-medium">
        {part}
      </span>
    ) : (
      part
    ),
  );
};

// Featured + Grid "swap" logic
const originalSlots = [
  {
    image: featuredImage,
    tag: blogData.featured.badge,
    title: blogData.featured.title,
    description: blogData.featured.description,
    link: blogData.featured.link,
    linkText: blogData.featured.linkText,
  },
  ...blogData.blogGrid.posts.map((post) => ({
    image: imageMap[post.image],
    tag: post.category,
    title: post.title,
    description: post.description,
    link: post.link,
    linkText: "Read More...",
  })),
];

const computeSlots = (k) => {
  if (k === 0) return originalSlots;
  const result = [...originalSlots];
  result[0] = originalSlots[k];
  for (let i = 1; i <= k; i++) {
    result[i] = originalSlots[i - 1];
  }
  return result;
};

const Blogs = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeIndex, setActiveIndex] = useState(0);

  const slots = computeSlots(activeIndex);

  const handleCardClick = (index) => {
    setActiveIndex((prev) => (prev === index ? index - 1 : index));
  };

  return (
    <div className="overflow-x-hidden">
      {/* Section 1: Hero */}
      <section className="w-full bg-[#EDF6FD] pt-2 sm:pt-4 md:pt-6 pb-10 sm:pb-16 md:pb-18 px-4 sm:px-6 md:px-12 text-center">
        <motion.div
          className="max-w-5xl mx-auto"
          variants={fadeInDim}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold text-heading mb-4 sm:mb-6 leading-tight">
            {heroData.title}{" "}
            <span className="text-primary">{heroData.titleHighlight}</span>{" "}
            {heroData.titleEnd}
          </h1>
          <p className="text-textcolor text-sm sm:text-base md:text-lg leading-normal max-w-3xl mx-auto mb-6 sm:mb-8 opacity-90">
            {heroData.description}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4">
            <a
              href={heroData.buttons.primary.link}
              className="bg-primary text-white px-3 py-2 sm:px-7 sm:py-2.5 rounded-full font-semibold text-sm sm:text-base transition-colors duration-300 hover:bg-[#007EB8]"
            >
              {heroData.buttons.primary.text}
            </a>
            <a
              href={heroData.buttons.secondary.link}
              className="bg-transparent text-heading border-2 border-border px-2 py-2 sm:px-6 sm:py-2 rounded-full font-semibold text-sm sm:text-base transition duration-300 transform hover:scale-105 active:scale-95 hover:bg-white hover:shadow-[var(--shadow-glow)]"
            >
              {heroData.buttons.secondary.text}
            </a>
          </div>
        </motion.div>
      </section>

      {/* Section 2: Intro + Category Filter Tabs */}
      <section className="w-full bg-white py-10 sm:py-12 md:py-16 px-4 sm:px-6 md:px-12 text-center">
        <motion.div
          variants={fadeInDim}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Divider line */}
          <div className="w-16 sm:w-24 md:w-60 h-1 bg-primary rounded-full mx-auto mb-8 sm:mb-10 md:mb-14"></div>

          {/* Description */}
          <p className="text-textcolor text-base sm:text-lg md:text-xl leading-[1.6] max-w-4xl mx-auto mb-8 sm:mb-10 md:mb-14">
            {renderDescription(introData.description)}
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <div className="inline-flex flex-wrap justify-center gap-2 bg-[#E8F6FF] rounded-full p-2 sm:p-3 overflow-visible">
          {introData.categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 md:hover:-translate-y-5 hover:shadow-md ${
                  isActive
                    ? "bg-primary text-white shadow-sm"
                    : "bg-white text-heading hover:bg-primary hover:text-white"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </section>

      {/* Section 3: Featured Post (dynamic - slot 0) */}
      <section className="w-full bg-[#F8FBFF] py-6 sm:py-8 md:py-12 px-4 sm:px-6 md:px-12">
        <div className="max-w-6xl mx-auto bg-[#FBFAFD] rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-10 flex flex-col md:flex-row items-center gap-6 sm:gap-10 md:gap-16">
          {/* Left - Illustration */}
          <div className="flex-1 w-full flex justify-center">
            <img
              src={slots[0].image}
              alt={slots[0].title}
              className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto object-contain block"
            />
          </div>

          {/* Right - Content */}
          <div className="flex-1 w-full text-left">
            <span className="inline-block bg-sky-100 text-primary text-xs sm:text-sm md:text-md font-bold tracking-wide px-3 py-1 sm:px-4 sm:py-1 rounded-full mb-3 sm:mb-4">
              {slots[0].tag}
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[38px] font-bold text-heading mb-3 sm:mb-4 leading-tight">
              {slots[0].title}
            </h2>
            <p className="text-textcolor text-sm sm:text-base md:text-lg leading-normal mb-3 sm:mb-4 opacity-90">
              {slots[0].description}
            </p>
            <a
              href={slots[0].link}
              className="text-primary font-bold hover:underline text-sm sm:text-base"
            >
              {slots[0].linkText}
            </a>
          </div>
        </div>
      </section>

      {/* Section 4: Blog Grid (dynamic - slots 1-6, click to swap) */}
      <section className="w-full bg-white pt-12 sm:pt-16 md:pt-20 lg:pt-28 pb-10 sm:pb-12 md:pb-16 px-4 sm:px-6 md:px-12">
        <div className="max-w-272 mx-auto flex flex-col gap-4 sm:gap-5">
          {/* Row 1: Cards 1, 2, 3 */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 items-stretch"
            variants={rowVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            {slots.slice(1, 4).map((card, i) => {
              const cardNumber = i + 1;
              return (
                <div
                  key={cardNumber}
                  className="bg-white border border-slate-100 rounded-xl overflow-hidden transition-transform duration-300 shadow-lg flex flex-col h-full"
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    onClick={() => handleCardClick(cardNumber)}
                    className="w-full h-40 sm:h-44 md:h-50 object-cover block cursor-pointer transition-transform duration-1500 hover:scale-140"
                  />
                  <div className="p-5 sm:p-6 md:p-7 text-left flex flex-col flex-1">
                    <span className="self-start inline-block bg-sky-100 text-primary text-xs font-bold px-2 py-1 rounded-full mb-2">
                      {card.tag}
                    </span>

                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-heading mb-2 sm:mb-3 leading-tight line-clamp-3">
                      {card.title}
                    </h3>

                    <p className="text-textcolor text-sm sm:text-base leading-normal opacity-90 mb-3 sm:mb-4 flex-1 line-clamp-4">
                      {card.description}
                    </p>

                    <a
                      href={card.link}
                      className="text-primary text-sm font-semibold hover:underline mt-auto"
                    >
                      Read More...
                    </a>
                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* Row 2: Cards 4, 5, 6 */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 items-stretch"
            variants={rowVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            {slots.slice(4, 7).map((card, i) => {
              const cardNumber = i + 4;
              return (
                <div
                  key={cardNumber}
                  className="bg-white border border-slate-100 rounded-xl overflow-hidden transition-transform duration-300 shadow-lg flex flex-col h-full"
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    onClick={() => handleCardClick(cardNumber)}
                    className="w-full h-40 sm:h-44 md:h-50 object-cover block cursor-pointer transition-transform duration-1500 hover:scale-140"
                  />
                  <div className="p-5 sm:p-6 md:p-7 text-left flex flex-col flex-1">
                    <span className="self-start inline-block bg-sky-100 text-primary text-xs font-bold px-2 py-1 rounded-full mb-2">
                      {card.tag}
                    </span>

                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-heading mb-2 sm:mb-3 leading-tight line-clamp-3">
                      {card.title}
                    </h3>

                    <p className="text-textcolor text-sm sm:text-base leading-normal opacity-90 mb-3 sm:mb-4 flex-1 line-clamp-4">
                      {card.description}
                    </p>

                    <a
                      href={card.link}
                      className="text-primary text-sm font-semibold hover:underline mt-auto"
                    >
                      Read More...
                    </a>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Section 5: CTA */}
      <section className="w-full py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-12 bg-linear-to-b from-sky-300 to-sky-500 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            {blogData.cta.title}
          </h2>
          <p className="font-Poppins text-white text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 opacity-90">
            {blogData.cta.description}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 mb-8 sm:mb-10">
            <a
              href={blogData.cta.buttons.primary.link}
              className="bg-white text-sky-500 px-5 py-2.5 sm:px-7 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:bg-primary hover:text-white"
            >
              {blogData.cta.buttons.primary.text}
            </a>
            <a
              href={blogData.cta.buttons.secondary.link}
              className="bg-white border-2 border-white text-primary px-5 py-2.5 sm:px-7 sm:py-3 rounded-xl font-semibold text-sm sm:text-base flex items-center gap-2 transition-all duration-300 hover:bg-primary hover:text-white hover:scale-105"
            >
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
              {blogData.cta.buttons.secondary.text}
            </a>
          </div>
          <p className="font-Poppins text-white text-base sm:text-lg leading-relaxed mt-4">
            {blogData.cta.footerNote}
          </p>
        </div>
      </section>
    </div>
  );
};

export default Blogs;