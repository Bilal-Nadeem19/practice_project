import { motion } from "framer-motion";
import IndustryCard from "./IndustryCard";

const fadeInDim = {
  hidden: { opacity: 0, y: 15 },
  visible: {    
    opacity: 1,
    y: 0,
    transition: { duration: 0.2, ease: "easeOut", delay: 0.2 },
  },
};

const IndustrySection = ({ title, industries }) => {
  return (
    <section className="w-full px-6 sm:px-10 md:px-20 py-8 sm:py-10 md:py-12">
      <div className="max-w-268 mx-auto">
        <motion.div
          variants={fadeInDim}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <h2 className="text-[38px] md:text-[48px] font-bold text-[#0097DA] mb-2 text-center">
            {title}
          </h2>
          <div className="w-26 h-1 bg-primary rounded-full mx-auto mb-8 sm:mb-10"></div>
        </motion.div>

        <div
          className="grid gap-6 sm:gap-8"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          }}
        >
          {industries.map((industry) => (
            <IndustryCard
              key={industry.title}
              icon={industry.icon}
              title={industry.title}
              description={industry.description}
              link={industry.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustrySection;