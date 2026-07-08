import { motion } from "framer-motion";
import { Check } from "lucide-react";
import homeData from "../data/pages/home_page.json";

const data = homeData.choseUs;

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

const WhyChooseUs = () => {
  return (
    <section className="bg-[#EAF3FF] py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        {/* Subtitle */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeUp}
          className="mb-3"
        >
          <h3 className="text-primary text-4xl md:text-5xl font-bold relative inline-block">
            {data.subtitle}
            <span className="block w-18 h-1 bg-primary mx-auto mt-2 rounded-full"></span>
          </h3>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          custom={1}
          variants={fadeUp}
          className="text-3xl md:text-4xl font-bold text-heading mb-4 leading-snug"
        >
          {data.title}
        </motion.h2>

        {/* Description */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          custom={2}
          variants={fadeUp}
          className="text-gray-500 max-w-xl mx-auto mb-12"
        >
          {data.description}
        </motion.p>

        {/* Features List */}
        <div className="text-left max-w-xl mx-auto space-y-6 mb-10">
          {data.features.map((feature, i) => (
            <motion.div
              key={feature.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              custom={i + 3}
              variants={fadeUp}
              className="flex items-start gap-3"
            >
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-1">
                <Check className="w-3.5 h-3.5 text-green-600" strokeWidth={3} />
              </span>
              <div>
                <h4 className="font-bold text-heading text-lg sm:text-xl">
                  {feature.title}
                </h4>{" "}
                <p className="text-textcolor text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Buttons */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          custom={9}
          variants={fadeUp}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href={data.buttons.primary.link}
            className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:shadow-[var(--shadow-glow)] hover:scale-105 transition"
          >
            {data.buttons.primary.text}
          </a>

          <a
            href={data.buttons.secondary.link}
            className="border border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary hover:shadow-[var(--shadow-glow)] hover:scale-105 hover:text-white hover: transition"
          >
            {data.buttons.secondary.text}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
