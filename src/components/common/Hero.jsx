import { motion } from "framer-motion";

const fadeInDim = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const Hero = ({ heroData }) => {
  return (
    <div>
      {/* Section 1: Hero */}
      <section className="w-full bg-[#EDF6FD] min-h-120 flex items-center justify-center pt-12 sm:pt-14 md:pt-20 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 md:px-12 text-center">
        <motion.div
          className="max-w-5xl mx-auto"
          variants={fadeInDim}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold text-heading mb-4 sm:mb-8 leading-tight sm:leading-none tracking-[0.01em]">
            {heroData.title}
            <br />
            {heroData.titleMiddle}{" "}
            <span className="text-primary">{heroData.titleHighlight}</span>
          </h1>
          <p className="text-textcolor text-sm sm:text-base md:text-lg leading-normal max-w-3xl mx-auto mb-6 sm:mb-8 opacity-90">
            {heroData.description}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 w-full">
            <a
              href={heroData.buttons.primary.link}
              className="bg-primary text-white px-7 py-2.5 sm:px-9 sm:py-3 rounded-full font-semibold text-sm sm:text-lg transition-colors duration-300 hover:bg-[#007EB8]"
            >
              {heroData.buttons.primary.text}
            </a>

            <a
              href={heroData.buttons.secondary.link}
              className="bg-transparent text-heading border-2 border-border px-7 py-2.5 sm:px-9 sm:py-3.5 rounded-full font-semibold text-sm sm:text-base transition duration-300 transform hover:scale-105 active:scale-95 hover:bg-white hover:shadow-[var(--shadow-glow)]"
            >
              {heroData.buttons.secondary.text}
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Hero;
