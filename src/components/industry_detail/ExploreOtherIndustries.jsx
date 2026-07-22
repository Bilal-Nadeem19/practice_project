import { motion } from "framer-motion";
import IndustryCard from "../IndustryCard";

const fadeInDim = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const ExploreOtherIndustries = ({ exploreData }) => {
  return (
    <motion.section
      className="w-full px-6 md:px-12 py-16 md:py-20 bg-gray-50"
      variants={fadeInDim}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-[1600px] mx-auto">
        <h2 className="font-poppins text-primary font-bold text-[51px] leading-10 mb-3 tracking-normal text-center">
          {exploreData.title}
        </h2>
        <p className="text-gray-600 text-center mb-8 md:mb-12">
          {exploreData.subtitle}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {exploreData.cards.map((card) => (
            <IndustryCard
              key={card.title}
              icon={card.icon}
              title={card.title}
              description={card.description}
              link={card.link}
              large
              descColor="#797A7D"
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ExploreOtherIndustries;