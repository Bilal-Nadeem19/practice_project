import { m } from "framer-motion";

const fadeInDim = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const IntroSection = ({ introData }) => {
  return (
    <m.section
      className="w-full px-6 sm:px-8 md:px-12 py-10 sm:py-14 md:py-20"
      style={{
        background: "linear-gradient(rgb(229, 242, 255), rgb(244, 248, 253), rgb(249, 250, 251))",
      }}
      variants={fadeInDim}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center font-poppins font-bold text-3xl sm:text-3xl md:text-[36px] leading-tight md:leading-[100%] text-primary mb-8 sm:mb-10 md:mb-12">
          {introData.title}
        </h2>

        <div className="space-y-6 sm:space-y-7 md:space-y-8">
          {introData.blocks.map((block, index) => (
            <div key={index}>
              <h3 className="font-poppins font-bold text-xl sm:text-2xl md:text-[20px] leading-normal md:leading-10 text-gray-800 mb-2">
                {block.heading}
              </h3>
              <p className="font-poppins font-normal text-lg sm:text-xl md:text-[17px] leading-relaxed md:leading-6 text-textcolor">
                {block.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </m.section>
  );
};

export default IntroSection;