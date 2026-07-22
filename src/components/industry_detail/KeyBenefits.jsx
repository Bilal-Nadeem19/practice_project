import { motion } from "framer-motion";
import iconMap from "../../utils/iconMap";

const rowVariants = {
  hidden: { y: 20 },
  visible: {
    y: 0,
    transition: { duration: 0.2, ease: "easeOut", delay: 0.5 },
  },
};

const KeyBenefits = ({ keyBenefits }) => {
  const rows = [
    keyBenefits.cards.slice(0, 3),
    keyBenefits.cards.slice(3, 6),
    keyBenefits.cards.slice(6, 9),
  ];

  return (
    <section className="w-full px-6 md:px-12 py-14 md:py-20 bg-white">
      <div className="max-w-284 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-2">
          {keyBenefits.title}
        </h2>
        <p className="text-textcolor text-lg sm:text-xl font-normal text-center mb-10 md:mb-10">
          {keyBenefits.subtitle}
        </p>

        <div className="flex flex-col gap-6">
          {rows.map((row, rowIndex) => (
            <motion.div
              key={rowIndex}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7"
              variants={rowVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              {row.map((card, index) => {
                const Icon = iconMap[card.icon] || iconMap["help-circle"];
                return (
                  <div
                    key={index}
                    className="rounded-2xl p-7 md:p-9 shadow-md hover:shadow-lg transition-shadow duration-300"
                    style={{
                      background: `linear-gradient(135deg, ${card.bgFrom}, ${card.bgTo})`,
                    }}
                  >
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-2"
                      style={{ backgroundColor: card.iconBg }}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                      {card.title}
                    </h3>
                    <p className="text-textcolor text-sm md:text-base leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                );
              })}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyBenefits;