import { motion } from "framer-motion";
import {
  Play,
  Phone,
  Mic,
  Settings,
  Users,
  Shield,
  Zap,
  LineChart,
  Handshake,
  Shrink,
  Rocket,
  Calendar,
} from "lucide-react";
import homeData from "../data/pages/about.json";
import chatImage from "../assets/images/homepage/about/about-hero-image.webp";
import techFlowImage from "../assets/images/homepage/about/technology-flow.webp";
import Navbar from "../components/layouts/Navbar";

const data = homeData.about;
const iconMap = {
  Phone,
  Mic,
  Settings,
  Users,
  Shield,
  Zap,
  LineChart,
  Handshake,
  Shrink,
  Rocket,
};

// Text: starts dim + slightly smaller, grows to its normal size while fading in
const zoomInText = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

// Image: starts dim + noticeably smaller (bigger zoom than text), grows to normal size
const zoomInImage = {
  hidden: { opacity: 0, scale: 0.75 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut", delay: 0.15 },
  },
};
// Left image: grow effect (bara hoke aayega)
const zoomInImageLeft = {
  hidden: { opacity: 0, scale: 0.75 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

// Technology cards container: sab cards ek sath (no stagger) animate honge
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0,
      delayChildren: 0,
    },
  },
};

// Har card: neechay se upar, dim/fade nahi
const cardVariants = {
  hidden: { y: 40 },
  visible: {
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const scaleFadeVariants = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const stepsContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const stepItemVariants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const About = () => {
  return (
    <>
      {/* Section 1: Hero / About Intro */}
      <section className="bg-[linear-gradient(to_right,#FEFFFF_0%,#EDF6FD_50%,#DFF2FE_100%)] py-16 md:py-24 px-6 md:px-12 overflow-x-hidden flex items-center min-h-[80vh]">
        <div className="max-w-8xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-12 md:gap-16 w-full">
          {/* Left Side - Text Content */}
          <motion.div
            className="flex-1 w-full text-left lg:-translate-y-20"
            variants={zoomInText}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold text-heading mb-6">
              {data.title}{" "}
              <span className="text-primary inline-block">
                {data.titleHighlight}
              </span>
            </h2>
            <p className="text-textcolor text-base md:text-lg leading-[1.4] mb-8 max-w-xl opacity-90">
              {data.description}
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <a
                href={data.buttons.primary.link}
                className="bg-primary text-white px-7 py-2 rounded-lg font-bold flex items-center gap-2 transition duration-300 transform hover:scale-105 active:scale-95 hover:shadow-(--shadow-glow)"
              >
                {data.buttons.primary.text}
                <span className="text-lg">→</span>
              </a>

              <a
                href={data.buttons.secondary.link}
                className="bg-white text-slate-800 border border-slate-300 px-7 py-2.5 rounded-lg font-medium flex items-center gap-2 transition duration-300 transform hover:scale-105 active:scale-95 hover:shadow-[0_0_20px_0_rgba(0,0,0,0.25)] hover:shadow-gray-400/50"
              >
                <Play className="w-3 h-3 text-primary fill-primary group-hover:scale-110 transition-transform" />
                {data.buttons.secondary.text}
              </a>
            </div>
          </motion.div>

          {/* Right Side - App Mockup/Image */}
          <motion.div
            className="flex-1 w-full flex justify-center md:justify-end lg:-translate-y-18"
            variants={zoomInImage}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            style={{ willChange: "transform, opacity" }}
          >
            <div className="relative w-[105%] max-w-195 lg:max-w-212.5">
              <div className=" flex-[0.95] absolute left-0 bottom-0 w-80 h-44 bg-slate-400/40 blur-[80px] rounded-full -z-10"></div>
              <div className="flex-[1.05] absolute right-0 bottom-0 w-72 h-56 bg-sky-200/40 blur-[90px] rounded-full -z-10"></div>
              <img
                src={chatImage}
                alt={data.imageAlt}
                className="relative z-10 w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(15,23,42,0.12)]"
                style={{ willChange: "filter" }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Powered by Leading Technologies */}
      <section className="w-full pt-10 md:pt-14 pb-16 md:pb-24 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-[48px] tracking-[0.01em] font-bold text-primary mb-4">
            {homeData.heading}
          </h2>
          <p className="text-textcolor text-base md:text-lg leading-[1.2] mb-12 max-w-2xl mx-auto opacity-90">
            {homeData.subheading}
          </p>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            {homeData.cards.map((card) => {
              const Icon = iconMap[card.icon];
              return (
                <motion.div
                  key={card.title}
                  className="bg-white border-x border-b border-slate-100 shadow-sm rounded-xl p-6 text-left transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                  variants={cardVariants}
                  style={{ willChange: "transform, opacity" }}
                >
                  <div
                    className={`w-12 h-12 rounded-xl ${card.iconBg} flex items-center justify-center mb-4 mt-2`}
                  >
                    <Icon className={`w-6 h-6 ${card.iconColor}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-heading mb-2">
                    {card.title}
                  </h3>
                  <p className="text-textcolor text-sm leading-relaxed opacity-90">
                    {card.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Section 3: How Our Technology Works */}
      <section className="w-full pt-14 md:pt-18 pb-16 md:pb-24 px-6 md:px-12 bg-[#EDF6FD]">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-5xl lg:text-[48px] font-bold tracking-[0.01em] text-primary mb-4">
            {homeData.howItWorks.title}{" "}
            <span className="text-primary">
              {homeData.howItWorks.titleHighlight}
            </span>
          </h2>
          <p className="text-textcolor text-sm md:text-base leading-[1.4] max-w-xl mx-auto opacity-90">
            {homeData.howItWorks.description}
          </p>
        </div>

        <div className="max-w-6xl mx-auto mt-14 md:mt-16 flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Left - Browser mockup image */}
          <motion.div
            className="flex-1 w-full flex justify-center md:justify-start"
            variants={zoomInImageLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            style={{ willChange: "transform, opacity" }}
          >
            <div className="w-full max-w-125 rounded-xl overflow-hidden shadow-lg border border-slate-200">
              <img
                src={techFlowImage}
                alt={homeData.howItWorks.imageAlt}
                className="w-full max-w-125 h-auto object-contain block"
              />
            </div>
          </motion.div>

          {/* Right - Numbered steps */}
          <motion.div
            className="flex-1 w-full md:w-[45%] lg:w-[42%] flex flex-col gap-8"
            variants={stepsContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            {homeData.howItWorks.steps.map((step) => (
              <motion.div
                key={step.number}
                className="flex items-start gap-4"
                variants={stepItemVariants}
              >
                <span className="shrink-0 w-10 h-10 rounded-full bg-sky-500 text-white font-light flex items-center justify-center">
                  {step.number}
                </span>
                <div className="text-left">
                  <h3 className="text-lg font-bold text-heading mb-1">
                    {step.title}
                  </h3>
                  <p className="text-textcolor text-sm leading-normal opacity-90 max-w-115">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* Section 4: Why Our Technology Matters */}
      <section className="w-full py-16 md:py-24 px-6 md:px-12 bg-[#F8FAFC]">
        <div className="max-w-272 mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">
            {homeData.whyItMatters.title}{" "}
            <span className="text-primary">
              {homeData.whyItMatters.titleHighlight}
            </span>
          </h2>
          <p className="text-textcolor text-base md:text-lg leading-[1.4] mb-16 max-w-xl mx-auto opacity-90">
            {homeData.whyItMatters.description}
          </p>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            {homeData.whyItMatters.cards.map((card) => {
              const Icon = iconMap[card.icon];
              return (
                <motion.div
                  key={card.title}
                  className="bg-white border-x border-b border-slate-100 shadow-sm rounded-xl p-6 text-left transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                  variants={scaleFadeVariants}
                  style={{ willChange: "transform, opacity" }}
                >
                  <div
                    className={`w-16 h-16 rounded-full ${card.iconBg} flex items-center justify-center mb-4 mt-2`}
                  >
                    <Icon className={`w-8 h-8 ${card.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-heading mb-2">
                    {card.title}
                  </h3>
                  <p className="text-textcolor text-sm md:text-base leading-relaxed opacity-90">
                    {card.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
      {/* Section 5: CTA */}
      <section className="w-full py-12 md:py-16 px-6 md:px-12 bg-linear-to-b from-sky-500 to-sky-300 text-center">
        <div className="max-w-180 mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
            {homeData.ctaSection.title}
          </h2>
          <p className="text-white text-base md:text-lg mb-10 opacity-90">
            {homeData.ctaSection.description}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <a
              href={homeData.ctaSection.buttons.primary.link}
              className="bg-white text-xs text-sky-500 px-5 py-4 rounded-lg font-semibold transition duration-300 transform hover:scale-105 active:scale-95"
            >
              {homeData.ctaSection.buttons.primary.text}
            </a>

            <a
              href={homeData.ctaSection.buttons.secondary.link}
              className="bg-white text-sky-500 px-2 py-3 rounded-lg font-semibold flex items-center gap-2 transition duration-300 transform hover:scale-105 active:scale-95"
            >
              <Calendar className="w-5 h-5" />
              {homeData.ctaSection.buttons.secondary.text}
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
