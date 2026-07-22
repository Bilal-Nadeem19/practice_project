import React from "react";
import {
  Calendar,
  ClipboardCheck,
  Grid2x2,
  Mic,
  Briefcase,
  Repeat,
  PhoneForwarded,
  Phone,
  CalendarDays,
  FileText,
  CalendarCheck,
} from "lucide-react";
import content from "../../data/feature_detail/ai_receptionist.json";
import Reveal, { RevealItem } from "../common/Reveal";

const icons = {
  "clipboard-check": ClipboardCheck,
  grid: Grid2x2,
  mic: Mic,
  briefcase: Briefcase,
  swap: Repeat,
  "phone-forward": PhoneForwarded,
};

const stepIcons = { phone: Phone, calendar: CalendarDays, file: FileText };

export default function AIReceptionist() {
  const { badge, heading, description, buttons, image } = content.hero;
  const { heading: capHeading, subheading, cards } = content.keyCapabilities;
  const { integrations } = content;
  const { howItWorks } = content;
  const { cta } = content;

  return (
    <>
      <section
        style={{
          background: "linear-gradient(to right, #2A8FE0, #9BC7ED, #9BC7EC)",
        }}
        className="relative overflow-hidden"
      >
        <Reveal className="max-w-300 mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10 px-6 md:px-12 pt-18 md:pt-22 pb-4 md:pb-4">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:-mt-10 lg:-ml-4">
            <span className="inline-block bg-span-bg text-span-text px-3 py-1 rounded-full text-xs font-medium font-poppins mb-4 max-w-max mx-auto md:mx-0">
              {badge}
            </span>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-snug text-featurehero-heading mb-6">
              {heading.map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </h1>

            <p className="text-base md:text-lg text-featurehero-description max-w-md mx-auto md:mx-0 mb-10">
              {description}
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start lg:ml-6">
              {buttons.map((btn, i) => (
                <RevealItem key={btn.label} delay={i * 0.2}>
                  <a
                    href={btn.href}
                    className="inline-flex items-center gap-2 bg-white text-primary font-semibold px-4 py-3.5 rounded-md shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
                  >
                    {btn.label}
                    {btn.icon === "calendar" && (
                      <Calendar className="w-4 h-4 text-primary" />
                    )}
                  </a>
                </RevealItem>
              ))}
            </div>
          </div>

          <div className="w-full max-w-xs max-h-75 lg:max-h-120 mx-auto lg:mx-0 mt-8 lg:mt-14 lg:ml-50 rounded-xl overflow-hidden shadow-2xl">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </div>
        </Reveal>
      </section>

      <section className="bg-gray-50 px-6 py-16">
        <Reveal className="max-w-7xl mx-auto rounded-3xl p-4 md:p-8 bg-linear-to-r from-[#bde8f8] to-[#FFFFFF]">
          <h2 className="text-3xl md:text-4xl font-bold text-key-cardheading text-center mb-3">
            {capHeading}
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto text-base md:text-lg mb-10">
            {subheading}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cards.map((card, i) => {
              const Icon = icons[card.icon];
              const darkIcon = i % 2 === 0;
              const altBg = i % 3 === 1;
              return (
                <div
                  key={card.title}
                  className="rounded-2xl p-4 md:p-6 min-h-60 shadow-lg transition-transform duration-300 hover:scale-105"
                  style={{ background: i % 2 === 0 ? "#B4E5F5" : "#D9F2FF" }}
                >
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center mb-5 mt-5 ${darkIcon ? "bg-[#0f6e8c]" : "bg-[#22b8e0]"}`}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-key-cardheading mb-4">
                    {card.title}
                  </h3>
                  <p className="text-sm text-key-card-description leading-relaxed">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Reveal>
      </section>

      <section
        className="px-6 py-16"
        style={{
          background: "linear-gradient(120deg, #e6f6fc 0%, #bfe6f5 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-6">
          {/* Left Content Column - Updated for center alignment */}
          <div className="text-center flex flex-col items-center w-full lg:ml-10">
            {/* Title - Sky blue text with underline */}
            <div className="mb-4">
              <h1 className="relative font-poppins font-semibold text-[36px] md:text-[44px] lg:text-[51px] text-primary leading-[1.2] mb-4 inline-block mx-auto max-w-2xl">
                {integrations.eyebrow}
                {/* Subtle underline using a pseudo-element like logic */}
                <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-22 h-0.75 bg-primary"></span>
              </h1>
            </div>

            {/* Main Heading - Dark, multi-line, centered */}
            <h2 className="font-poppins font-semibold text-[51px] text-heading leading-10 max-w-3xl mb-6">
              {integrations.heading}
            </h2>

            {/* Description - Smaller text, centered */}
            <p className="font-poppins font-normal text-[16.71px] px-2 md:px-4 lg:px-8 leading-[25.99px] text-textcolor mb-6">
              {integrations.description}
            </p>

            {/* Integrations Buttons */}
            <div className="flex flex-col gap-4 items-center">
              {integrations.tools.map((tool) => (
                <div
                  key={tool.name}
                  className="flex items-center gap-3 rounded-lg px-5 py-3 transition-shadow hover:shadow-md w-60 h-15.5"
                  style={{
                    background:
                      "linear-gradient(90deg, #3fa9dc 0%, #6fc8ec 100%)",
                  }}
                >
                  {/* White Square around tool icon */}
                  <div className="bg-white p-1 rounded flex items-center justify-center w-7 h-7">
                    <img
                      src={tool.icon}
                      alt={tool.name}
                      className="w-5 h-5 object-contain"
                    />
                  </div>

                  <span className="text-white font-bold text-md">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Card Column - Deep, realistic shadow */}
          <div className="relative max-w-sm mx-auto lg:-mr-2">
            {/* Container with deep drop-shadow effect to match image 1 */}
            <div
              className="rounded-2xl relative z-10"
              style={{
                boxShadow: "-20px 20px 15px #000000",
              }}
            >
              <img
                src={integrations.card.image}
                alt={integrations.card.alt}
                className="relative w-full h-auto rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-6 py-20 bg-white">
        <div className="absolute -top-10 -right-10 w-70 h-70 bg-sky-50 rounded-full"></div>
        <div className="absolute -bottom-16 -left-16 w-62 h-62 bg-sky-50 rounded-full"></div>

        <Reveal className="relative max-w-5xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary relative inline-block">
            How{" "}
            <span className="relative inline-block">
              It W
              <span className="absolute left-0 -bottom-2 w-full h-1 bg-primary"></span>
            </span>
            orks
          </h2>
          <p className="text-textcolor mt-4">{howItWorks.subheading}</p>
        </Reveal>

        <div className="relative max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {howItWorks.steps.map((step) => {
            const Icon = stepIcons[step.icon];
            return (
              <div key={step.title} className="flex flex-col items-center">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-12 shadow-lg"
                  style={{
                    background:
                      "linear-gradient(135deg, #7fd4f0 0%, #1ba7dc 100%)",
                  }}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="w-full bg-white rounded-xl shadow-md border-t-4 border-sky-400 px-5.5 py-5 text-center transition-transform duration-300 hover:scale-105">
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section
        className="px-6 py-16 md:py-20 text-center"
        style={{
          background:
            "linear-gradient(rgb(0, 151, 218) 0%, rgb(0, 186, 242) 50%, rgb(143, 218, 248) 100%)",
        }}
      >
        <Reveal>
          <h2 className="text-3xl md:text-5xl font-bold -mt-4 text-featurehero-heading mb-10">
            {cta.heading}
          </h2>

          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-2 mb-10">
            {cta.points.map((point) => (
              <p
                key={point}
                className="text-white/90 text-sm md:text-base before:content-['•'] before:mr-1 max-w-55 mx-auto"
              >
                {point}
              </p>
            ))}
          </div>
        </Reveal>

        <a
          href={cta.button.href}
          className="inline-flex items-center gap-2 bg-white text-primary font-bold px-8 py-4 rounded-lg hover:bg-gray-100  transition-transform duration-500 hover:scale-105"
        >
          <CalendarCheck className="w-5 h-5 text-primary" />
          {cta.button.label}
        </a>
      </section>
    </>
  );
}
