import { motion } from "framer-motion";
import faqData from "../data/pages/faqs.json";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const FAQs = () => {
  return (
    <section className="w-full bg-[#EDF6FD] pt-8 md:pt-10 pb-16 md:pb-20 px-6 md:px-12">
      {/* Heading - animated */}
      <motion.div
        className="max-w-4xl mx-auto text-center mb-12"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h1 className="text-3xl md:text-5xl font-bold tracking-[0.01em] text-heading text-center mb-6">
          {faqData.title}{" "}
          <span className="text-primary">{faqData.titleHighlight}</span>
        </h1>

        <p className="text-textcolor text-[16px] md:text-[20px] tracking-[0.01em] leading-8 max-w-162.5 mx-auto text-left opacity-90">
          {faqData.description}
        </p>
      </motion.div>

      {/* FAQ Card - always expanded, no animation */}
      <div className="max-w-245 mx-auto bg-white rounded-2xl shadow-sm pt-12 md:pt-14 pb-8 md:pb-10 px-8 md:px-10">
        {faqData.faqs.map((faq, index) => (
          <div
            key={index}
            className={`border-b border-slate-100 last:border-b-0 ${
              index === 0 ? "" : "pt-6"
            } pb-6`}
          >
            <h3 className="text-lg md:text-xl font-bold text-heading mb-3">
              {index + 1}. {faq.question}
            </h3>
            <p className="text-textcolor text-sm md:text-base leading-normal opacity-90">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQs;
