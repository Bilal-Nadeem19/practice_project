import React from "react";
import Reveal, { RevealItem } from "../common/Reveal";
import { Link2, Calendar, LineChart, SlidersHorizontal, Sparkles, Wrench, AudioWaveform } from "lucide-react";
import content from "../../data/feature_detail/advance-dashboard.json";
const capabilityIcons = { link: Link2, calendar: Calendar, chart: LineChart, sliders: SlidersHorizontal, sparkle: Sparkles, tools: Wrench, waveform: AudioWaveform };

export default function AdvancedDashboard() {
  const { badge, heading, description, buttons, backgroundImage } = content.hero;
  const { productivityBenefits } = content;
  const { keyCapabilities } = content;
  const { whyChoose } = content;
  const { finalCta } = content;
  return (
    <>
    <Reveal
      className="relative overflow-hidden bg-cover bg-center min-h-125 flex items-center bg-[#3a7fd5]"
      style={{ backgroundImage: `url(${backgroundImage.src})` }}
    >
      <div className="relative max-w-xl w-full px-6 md:px-8 py-6 mt-4 mb-14 rounded-tr-[3rem] rounded-br-[3rem] bg-[#1055A3]/51 backdrop-blur-xl">
        <span className="inline-block bg-white/80 text-span-text px-3 py-1 rounded-full text-xs font-medium mb-6">{badge}</span>

        <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4 font-poppins text-center md:text-left text-white">
          {heading.map((line, i) => <span key={i} className="block">{line}</span>)}
        </h1>

        <p className="text-white/90 leading-relaxed mb-6 font-poppins text-center md:text-left">{description}</p>

        <Reveal className="flex flex-wrap gap-4">
          {buttons.map((btn, i) => (
            <RevealItem key={btn.label} delay={i * 0.2}>
              <a href={btn.href} className="inline-flex items-center gap-2 bg-white text-primary font-semibold px-6 py-3 rounded-md shadow-sm hover:shadow-md transition-all">
                {btn.label}
                {btn.icon === "calendar" && <Calendar className="w-4 h-4 text-primary" />}
              </a>
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </Reveal>

    <section className="relative overflow-hidden px-6 py-20 bg-white">
  <div className="absolute top-0 right-0 w-72 h-72 bg-sky-50 rounded-full -translate-y-1/4 translate-x-1/4"></div>
  <div className="absolute bottom-0 right-0 w-64 h-64 bg-sky-50 rounded-full translate-y-1/4 translate-x-1/4"></div>

  <Reveal className="relative max-w-260 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
    <div className="rounded-3xl overflow-hidden shadow-xl">
      <img src={productivityBenefits.image.src} alt={productivityBenefits.image.alt} className="w-full h-auto object-cover" />
    </div>

    <div>
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8" style={{ fontFamily: "Georgia, serif" }}>{productivityBenefits.heading}</h2>

      <ul className="space-y-2">
        {productivityBenefits.points.map((point) => (
          <li key={point.label} className="text-slate-700 leading-normal pl-5 relative before:content-['•'] before:absolute before:left-0 before:text-slate-500 max-w-105">
            <span className="font-bold">{point.label}</span> {point.text}
          </li>
        ))}
      </ul>
    </div>
  </Reveal>
</section>

<Reveal className="px-6 py-16 bg-linear-to-r from-[#FFFFFF] to-[#c2ddf1]">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-extrabold text-heading text-center mb-2">{keyCapabilities.heading}</h2>
    <p className="text-slate-500 text-center mb-10">{keyCapabilities.subheading}</p>

    <div className="flex flex-col gap-4">
      {keyCapabilities.features.map((feature, i) => {
        const Icon = capabilityIcons[feature.icon];
        return (
          <div key={feature.title} className={`rounded-2xl p-5 flex items-start gap-4 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ${i % 2 === 0 ? "bg-white" : "bg-sky-50"}`}>
            <div className="w-10 h-10 bg-sky-400 flex items-center justify-center shrink-0">
              <Icon className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-Poppins font-semibold text-[18px] sm:text-[20px] text-heading leading-[120%]">{feature.title}</h3>
              <p className="font-Poppins text-[14px] sm:text-[16px] text-[#333] leading-[140%] mt-1">{feature.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  </div>
</Reveal>

<section className="px-6 py-30 inset-0 bg-white/70 backdrop-blur-[1px]">
  <Reveal className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-2 items-center">
    <div>
      <h2 className="font-poppins font-bold text-primary  text-2xl sm:text-3xl md:text-[48px]  leading-[150%] mb-3 md:mb-3">{whyChoose.heading}</h2>
      <ul className="space-y-2">
        {whyChoose.points.map((point) => (
          <li key={point} className="text-slate-600 text-xl leading-tight before:content-['•'] before:mr-2 before:text-slate-500">{point}</li>
        ))}
      </ul>
    </div>
    <div className="rounded-2xl p-8 text-center border border-gray-400 bg-sky-100 max-w-sm mx-auto min-h-83 flex flex-col justify-center">
      <h3 className="text-3xl font-bold text-slate-900 mb-4">{whyChoose.card.title}</h3>
      <p className="text-textcolor leading-relaxed">{whyChoose.card.description}</p>
    </div>
  </Reveal>              
</section>

<Reveal className="px-6 py-16 md:py-20 text-center" style={{ background: "linear-gradient(rgb(0, 151, 218) 0%, rgb(0, 186, 242) 50%, rgb(143, 218, 248) 100%)" }}>
  <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{finalCta.heading}</h2>
  <p className="text-white/90 text-base md:text-lg max-w-2xl mx-auto mb-8">{finalCta.description}</p>
  <a href={finalCta.button.href} className="inline-block bg-white/90 text-sky-600 font-bold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all">
    {finalCta.button.label}
  </a>
</Reveal>
  </>  
  );
}
