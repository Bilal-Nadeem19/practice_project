import iconMap from "../../utils/iconMap";
import { m } from "framer-motion";

const StatsBar = ({ stats }) => {

    const fadeInDim = {
  hidden: { opacity: 0, y: 15},
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

  return (
    <section className="w-full px-6 md:px-12 py-14 md:py-16">
  <m.div 
  className="flex flex-wrap justify-around items-center gap-8 border border-[#E5E7EB] rounded-lg p-8 md:p-10 bg-[#FFFFFF] shadow-[0_10px_15px_0px_#0000001A,0_4px_6px_0px_#0000001A] max-w-6xl w-full mx-auto"
  variants={fadeInDim}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  >
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center w-full">
          {stats.map((stat, index) => {
  const Icon = iconMap[stat.icon] || iconMap["help-circle"];
  return (
    <div key={index} className="flex flex-col items-center">
      {stat.iconStyle === "circle" ? (
        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mb-3">
          <Icon className="w-6 h-6 text-white" />
        </div>
      ) : (
        <div className="mb-2">
          <Icon className="w-8 h-8 text-primary" />
        </div>
      )}
      <h3 className="text-heading font-bold text-3xl md:text-4xl mb-2">{stat.value}</h3>
      <p className="text-textcolor text-sm md:text-base mt-1 font-regular">{stat.label}</p>
    </div>
  );
})}
        </div>
      </m.div>
    </section>
  );
};

export default StatsBar;