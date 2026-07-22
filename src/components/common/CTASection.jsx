import { Calendar } from "lucide-react";

const CTASection = ({ ctaData }) => {
  return (
    <section className="w-full py-24 md:py-18 px-6 md:px-12 bg-linear-to-b from-[#0097DA] via-[#00BAF2] to-[#8FDAF8] text-center">
      <div className="max-w-220 mx-auto">
        <h2 className="text-4xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          {ctaData.title}
        </h2>
        <p className="text-white text-base md:text-lg mb-10 opacity-90">
          {ctaData.description}
        </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full">
            <a href={ctaData.buttons.primary.link}
            className="bg-white text-md text-primary px-6 py-3.5 rounded-lg font-normal tracking-wider transition duration-300 transform hover:scale-105 active:scale-95"
          >
            {ctaData.buttons.primary.text}
          </a>

          
            <a href={ctaData.buttons.secondary.link}
            className="bg-white text-primary px-3 py-3.5 rounded-lg font-normal flex items-center gap-2 transition duration-300 transform hover:scale-105 active:scale-95"
          >
            <Calendar className="w-5 h-5" />
            {ctaData.buttons.secondary.text}
          </a>
        </div>

        {ctaData.footerNote && (
          <p className="text-white text-base md:text-lg leading-relaxed mt-8 opacity-90">
            {ctaData.footerNote}
          </p>
        )}
      </div>
    </section>
  );
};

export default CTASection;