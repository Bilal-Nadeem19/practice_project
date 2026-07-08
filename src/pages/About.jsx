import { motion } from "framer-motion";
import { Play } from "lucide-react";
import homeData from "../data/pages/about.json";
import chatImage from "../assets/images/homepage/about/about-hero-image.webp";

const data = homeData.about;

const zoomIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const About = () => {
  return (
    <section className="bg-[linear-gradient(to_right,#FEFFFF_0%,#EDF6FD_50%,#DFF2FE_100%)] py-16 md:py-24 px-6 md:px-12 overflow-hidden flex items-center min-h-[80vh]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16 w-full">

        {/* Left Side - Text Content */}
        <motion.div
          className="flex-1 w-full text-left"
          variants={zoomIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-[54px] font-bold text-slate-900 leading-[1.15] mb-6 tracking-tight">
            {data.title}{" "}
            <span className="text-primary block mt-1">{data.titleHighlight}</span>
          </h2>

          <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
            {data.description}
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <a 
              href={data.buttons.primary.link}
              className="bg-primary text-white px-7 py-3.5 rounded-lg font-semibold flex items-center gap-2 hover:opacity-95 shadow-md shadow-primary/20 transition active:scale-95"
            >
              {data.buttons.primary.text}
              <span className="text-lg">→</span>
            </a>
            
            <a 
              href={data.buttons.secondary.link}
              className="text-slate-800 font-semibold flex items-center gap-2 hover:text-primary transition group py-2"
            >
              <Play className="w-4 h-4 text-primary fill-primary group-hover:scale-110 transition-transform" />
              {data.buttons.secondary.text}
            </a>
          </div>
        </motion.div>

        {/* Right Side - App Mockup/Image */}
        <motion.div
          className="flex-1 w-full flex justify-center md:justify-end"
          variants={zoomIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="w-full max-w-2xl relative">
            <img
              src={chatImage}
              alt={data.imageAlt}
              className="w-full h-auto object-contain rounded-2xl drop-shadow-[0_10px_30px_rgba(0,0,0,0.04)]"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;