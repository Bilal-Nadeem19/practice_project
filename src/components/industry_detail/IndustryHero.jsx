import { Calendar } from "lucide-react";
import { motion } from "framer-motion";

const IndustryHero = ({ heroData }) => {
  const fadeInDim = {
    hidden: { opacity: 0, y: 15},
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full bg-linear-to-b from-sky-500 to-sky-300 px-6 md:px-12 py-2 md:py-4">
      <div className="max-w-290  mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <motion.div
          className="text-center md:text-left min-w-0"
          variants={fadeInDim}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <span className="inline-block bg-white text-primary font-medium px-7 py-2 rounded-full mt-8 md:mt-0 mb-4 shadow">
            {heroData.badge}
          </span>

          <h1 className="text-3xl sm:text-5xl font-bold mb-4 text-white">
            {heroData.title}
          </h1>

          <p className="text-lg sm:text-2xl text-indusry-heroheading mb-6">
            {heroData.description}
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <a
              href={heroData.buttons.primary.link}
              className="w-57.5 h-12.5 bg-white text-primary font-medium text-[16px] leading-[100%] rounded-md font-Poppins hover:shadow-[0_0_15px_#00A7DE] flex items-center justify-center gap-2"
              style={{
                transition:
                  "box-shadow 300ms ease-out, transform 400ms ease-out 500ms",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.08)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              {heroData.buttons.primary.text}
            </a>

            <a
              href={heroData.buttons.secondary.link}
              className="w-40 h-12.5 bg-white text-primary font-medium text-[16px] leading-[100%] rounded-md font-Poppins hover:shadow-[0_0_15px_#00A7DE] flex items-center justify-center gap-2"
              style={{
                transition:
                  "box-shadow 300ms ease-out, transform 400ms ease-out 500ms",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.08)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              {heroData.buttons.secondary.text}
              <Calendar className="w-3 h-3 md:w-5 md:h-5" />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="text-left min-w-0"
          variants={fadeInDim}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <img
            src={heroData.image}
            alt={heroData.title}
            className="w-full h-auto rounded-2xl object-cover aspect-4/3"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default IndustryHero;
