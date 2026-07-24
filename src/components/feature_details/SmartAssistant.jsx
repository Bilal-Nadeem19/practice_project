import React from "react";
import { Calendar } from "lucide-react";
import { SlidersHorizontal, PenLine, Check, Paintbrush } from "lucide-react";
import Reveal, { RevealItem } from "../common/Reveal";
import content from "../../data/feature_detail/smart_assistant.json";
const capabilityIcons = {
  sliders: SlidersHorizontal,
  edit: PenLine,
  check: Check,
  brush: Paintbrush,
};

export default function SmartAssistant() {
  const { badge, heading, description, buttons, backgroundImage } =
    content.hero;
  const { keyCapabilities } = content;
  const { whyChoose } = content;
  const { productivityBenefits } = content;
const { cta } = content;
  return (
    <>
      <section
        className="relative overflow-hidden bg-cover bg-center bg-[#1a9fd8] min-h-175 sm:min-h-0 bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage.src})`, backgroundPosition: "left center",backgroundSize: "cover", }}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-12 py-16 lg:py-18 flex justify-center lg:justify-end items-center min-h-175 lg:min-h-0">
          <div className="w-full max-w-md lg:max-w-lg rounded-3xl p-4 md:p-10 mx-auto lg:mr-16 lg:ml-0 backdrop-blur-sm bg-[#1E8BB0]">
            <span className="inline-block bg-span-bg text-span-text px-4 py-1 rounded-full text-xs font-medium mb-4 font-poppins">
              {badge}
            </span>
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold leading-snug sm:leading-tight md:leading-tight mb-4 font-poppins">
              {heading.map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </h1>

            <p className="text-white/90 leading-relaxed mb-6 font-poppins text-sm sm:text-base max-w-full lg:max-w-110">
              {description}
            </p>

            <Reveal className="flex flex-wrap justify-center lg:justify-start gap-4">
              {buttons.map((btn, i) => (
                <RevealItem key={btn.label} delay={i * 0.2}>
                  <a
                    href={btn.href}
                    className="inline-flex items-center gap-2 bg-white text-primary font-semibold px-5 py-3 rounded-md shadow-sm hover:shadow-md transition-all"
                  >
                    {btn.label}
                    {btn.icon === "calendar" && (
                      <Calendar className="w-4 h-4 text-primary" />
                    )}
                  </a>
                </RevealItem>
              ))}
            </Reveal>
          </div>
        </div>
      </section>


      <section className="px-6 py-26 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-center mb-20">
            <Reveal className="rounded-2xl shadow-xl p-12 text-center max-w-190 w-full bg-linear-to-b from-[#CAE7FF] to-[#EDF6F9]">
              <h2 className="font-poppins font-bold text-3xl md:text-[36px] text-gray-900 mb-4">
                {keyCapabilities.heading}
              </h2>
              <p className="font-poppins text-textcolor text-base md:text-[16px] leading-relaxed max-w-2xl mx-auto">
                {keyCapabilities.description}
              </p>
            </Reveal>
          </div>

          <Reveal className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {keyCapabilities.features.map((feature, i) => {
              const Icon = capabilityIcons[feature.icon];
              return (
                <RevealItem key={feature.title} delay={i * 0.15}>
                  <div className="rounded-3xl shadow-md p-8 flex items-start gap-4 h-full bg-linear-to-b from-[#CAE7FF] to-[#EDF6F9]">
                    <div className="w-14 h-14 rounded-lg bg-sky-400 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-poppins font-bold text-lg text-gray-900 mb-1">
                        {feature.title}
                      </h3>
                      <p class="font-poppins text-sm text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </RevealItem>
              );
            })}
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-20 bg-white">
        <Reveal className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_1.4fr] gap-12 items-center">
          <div className="rounded-3xl border border-gray-400 p-15 text-center bg-[#CAE7FF]">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-poppins font-bold text-gray-900 mb-4">
              {whyChoose.example.title}
            </h3>
            <p className="text-textcolor font-poppins text-sm sm:text-base md:text-[16px] leading-relaxed">
              {whyChoose.example.description}
            </p>
          </div>

          <div>
            <h2 className="font-poppins font-bold text-primary text-2xl sm:text-3xl md:text-[48px] leading-[150%] mb-5">
              {whyChoose.heading}
            </h2>
            <ul className="space-y-3">
              {whyChoose.points.map((point) => (
                <li
                  key={point}
                  className="text-textcolor text-base sm:text-lg md:text-[24px] font-poppins leading-[150%]"
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      <Reveal className="px-6 py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 class=" font-Poppins text-heading font-semibold  text-[24px] sm:text-[28px] md:text-[36px] mb-10 text-center ">
            {productivityBenefits.heading}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {productivityBenefits.cards.map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-2xl shadow-lg shadow-[rgba(0,0,0,0.25)] p-6"
              >
                <h3 className="font-bold text-slate-900 text-xl mb-3">
                  {card.title}
                </h3>
                <p className="text-textcolor">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
      
      <Reveal className="px-6 py-16 md:py-20 text-center" style={{ background: "linear-gradient(rgb(0, 151, 218) 0%, rgb(0, 186, 242) 50%, rgb(143, 218, 248) 100%)" }}>
  <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{cta.heading}</h2>
  <p className="text-white/90 text-base md:text-lg max-w-2xl mx-auto mb-8">{cta.description}</p>
  <a href={cta.button.href} className="inline-block bg-white text-sky-600 font-bold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all">
    {cta.button.label}
  </a>
</Reveal>
    </>
  );
}
