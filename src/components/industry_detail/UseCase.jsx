import { m } from "framer-motion";

const fadeInDim = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const UseCase = ({ useCase }) => {
  return (
    <section
      className="w-full px-6 md:px-12 lg:px-20 pt-14 md:pt-16 pb-16 md:pb-20"
      style={{
        background: "linear-gradient(to right, #F9FAFB, #E6F8FA, #DCF5F8)",
      }}
    >
      <div className="max-w-200 mx-auto">
        <m.h2
          className="max-w-5xl md:text-4xl font-bold text-primary text-center mb-10 md:mb-14"
          variants={fadeInDim}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {useCase.title}
        </m.h2>

        {/* Summary card */}
        <div className="bg-white/80 rounded-2xl shadow-md p-6 md:p-8 mb-6 transition-transform duration-300 hover:scale-[1.02]">
          <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
            {useCase.summary.title}
          </h3>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed">
            {useCase.summary.description}
          </p>
        </div>

        {/* Numbered steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {useCase.steps.map((step, index) => (
            <div
              key={index}
              className={`rounded-2xl p-5 transition-transform duration-300 hover:scale-105 hover:rotate-1 cursor-pointer ${step.bgColor}`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                  style={{ backgroundColor: step.numberColor }}
                >
                  {step.number}
                </div>
                <h3 className="text-base md:text-lg font-bold text-gray-900">
                  {step.title}
                </h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCase;
