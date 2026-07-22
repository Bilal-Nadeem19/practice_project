import { motion } from "framer-motion";
import iconMap from "../../utils/iconMap";

const fadeInDim = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const ProductivityGains = ({ productivityGains }) => {
  return (
    <motion.section
    className="w-full flex flex-col items-center justify-center bg-linear-to-r from-[#00A7DE] to-[#0578AC] px-4 sm:px-6 md:px-16 lg:px-24 py-16 text-white"
      variants={fadeInDim}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-8 md:mb-10">
          {productivityGains.title}
        </h2>

        <div className="flex flex-wrap justify-center gap-10 md:gap-14">
  {productivityGains.items.map((item, index) => {
    const Icon = iconMap[item.icon] || iconMap["help-circle"];
    return (
        <div
  key={index}
  className="flex flex-col items-center text-center w-[45%] md:w-auto transition-transform duration-300 hover:scale-110 cursor-pointer"
>
        <div className="w-11 h-11 bg-white/25 rounded-full flex items-center justify-center mb-1">
          <Icon className="w-5 h-5 text-white" />
        </div>
        <h3 className="text-white font-bold text-sm md:text-base mb-1">
          {item.title}
        </h3>
        <p className="text-white/90 text-xs leading-relaxed max-w-[30ch]">
          {item.description}
        </p>
      </div>
    );
  })}
</div>
      </div>
    </motion.section>
  );
};

export default ProductivityGains;