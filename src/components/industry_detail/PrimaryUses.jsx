import { m } from "framer-motion";
import iconMap from "../../utils/iconMap";

const fadeInDim = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const PrimaryUses = ({ primaryUses }) => {
  const leftItems = primaryUses.items.slice(0, 3);
  const rightItems = primaryUses.items.slice(3, 5);

  return (
    <section className="w-full px-6 md:px-12 lg:px-20 pt-8 md:pt-10 pb-16 md:pb-20 bg-white">
      <m.div
        className="max-w-208 mx-auto"
        variants={fadeInDim}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-2xl md:text-[44px] font-bold text-primary text-center mb-12 md:mb-16">
          {primaryUses.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
          {/* Left column */}
          <div className="flex flex-col gap-6">
            {leftItems.map((item, index) => {
              const Icon = iconMap[item.icon] || iconMap["help-circle"];
              return (
                <div key={index} className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: item.iconBg }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm md:text-base leading-normal max-w-3xl">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-6">
            {rightItems.map((item, index) => {
              const Icon = iconMap[item.icon] || iconMap["help-circle"];
              return (
                <div key={index} className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: item.iconBg }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm md:text-base font-semibold text-heading mb-1">
                      {item.title}
                    </h3>
                    <p className="text-textcolor text-sm md:text-base leading-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* CTA block */}
            <div className="flex items-center justify-end gap-4">
              <p className="text-[#00A7DE] mt-10 text-sm text-right leading-tight max-w-40">
                {primaryUses.cta.note}
              </p>

              <img
                src={primaryUses.cta.arrowImage}
                alt="arrow"
                className="w-20 h-auto -mt-6"
              />

              <a
                href={primaryUses.cta.button.link}
                className=" -translate-y-10 bg-primary text-white px-3 py-2 rounded-lg font-semibold text-sm whitespace-nowrap transition duration-300 transform hover:bg-[#0798c9] hover:scale-105 active:scale-95"
              >
                {primaryUses.cta.button.text}
              </a>
            </div>
          </div>
        </div>
      </m.div>
    </section>
  );
};

export default PrimaryUses;
