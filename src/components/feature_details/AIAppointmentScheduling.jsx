import React from "react";
import { Calendar, Workflow, RefreshCw, Bell, Share2 } from "lucide-react";
import Reveal, { RevealItem } from "../common/Reveal";
import content from "../../data/feature_detail/ai_appointment_scheduling.json";

const featureIcons = { workflow: Workflow, sync: RefreshCw, bell: Bell, share: Share2 };

export default function AIAppointmentScheduling() {
  const { badge, heading, description, buttons, image } = content.hero;
  const { keyCapabilities } = content;
  const { productivityGains } = content;
  const { finalCta } = content;

  return (
    <>
      <section className="relative overflow-visible pt-4 pb-4 md:pb-12 pr-4 pl-0 bg-[#8AD5FF]">
        <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] items-center gap-8 lg:gap-28 min-h-105">
          <div className="flex items-center justify-center overflow-visible">
            <img
              src={image.src}
              alt={image.alt}
              className="w-100 lg:w-132.5 h-auto object-contain"
            />
          </div>

          <div
            className="rounded-tl-4xl rounded-bl-4xl rounded-tr-none rounded-br-none p-8 md:p-12 lg:-mr-4"
            style={{ background: "linear-gradient(to bottom, #3596D3, #72D0FF)" }}
          >
            <span className="inline-block bg-span-bg text-span-text px-4 sm:px-6 py-2 rounded-full font-medium text-xs sm:text-sm tracking-wide shadow-sm mb-4">
              {badge}
            </span>

            <h1 className="text-featurehero-heading text-3xl md:text-5xl font-bold leading-tight mb-4 md:mb-6">
              {heading}
            </h1>

            <p className="text-lg font-poppins text-featurehero-description mb-6 md:mb-8 lg:mx-0 max-w-125">
              {description}
            </p>

            <Reveal className="flex flex-wrap justify-center lg:justify-start gap-4">
              {buttons.map((btn, i) => (
                <RevealItem key={btn.label} delay={i * 0.2}>
                  <a href={btn.href}
                    className="inline-flex items-center gap-2 bg-white text-primary font-semibold px-5 py-3 rounded-md shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-500 ease-out"
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

      <section className="px-6 py-26" style={{ background: "linear-gradient(180deg, #e6f6fc 0%, #d6f0fa 100%)" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_1.4fr] gap-16 items-center">
          <div className="bg-white rounded-3xl shadow-xl p-12 text-center min-h-80 max-w-150 mx-auto flex flex-col justify-center">
          <h2 className="text-[36px] font-bold text-heading mb-4" style={{ fontFamily: "Poppins, sans-serif", lineHeight: "100%" }}>{keyCapabilities.heading}</h2>
          <p className="text-textcolor leading-relaxed text-lg max-w-75 mx-auto">{keyCapabilities.description}</p>
          </div>

          <div className="flex flex-col gap-12 mr-10 lg:mr-16">
            {keyCapabilities.features.map((feature) => {
              const Icon = featureIcons[feature.icon];
              return (
                <div key={feature.title} className="bg-white shadow-md p-5 flex items-start gap-4">
                  <div className="w-11 h-11 bg-sky-400 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-textcolor leading-sung">
                    <span className="font-bold text-heading text-base">{feature.title}</span> {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

<section className="px-6 py-20 bg-white w-full">
  <div className="max-w-7xl mx-auto">
    
    {/* TOP ROW: Left Tall Card & Right Wide Graphic Card (Increased Height & Spacing) */}
    <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-8 mb-8 items-start">
      
      {/* 1st Card - Left Small but Tall Card */}
      <div 
        className="rounded-3xl mt-15 ml-20 border border-[#e2e5e9] shadow-[0_12px_30px_-5px_rgba(0,0,0,0.05)] p-10 md:p-12 flex flex-col justify-center min-h-50  max-w-[320px]" 
        style={{ background: "linear-gradient(160deg, #fbfcfd 0%, #edf0f3 100%)" }}
      >
        <h3 className="font-bold text-slate-900 mb-4 text-md sm:text-lg leading-snug">
          {productivityGains.topCard.title}
        </h3>
        <p className="text-[#5E5F60] text-sm sm:text-base leading-relaxed">
          {productivityGains.topCard.description}
        </p>
      </div>

      {/* Right Wide Featured Graphic Card - Exactly matching the tall aspect ratio */}
      <div className="rounded-3xl rounded-bl-[120px] border border-[#e2e5e9] shadow-[0_12px_35px_-5px_rgba(0,0,0,0.07)] overflow-hidden relative min-h-80 lg:min-h-95 max-w-175 -ml-10 w-full mx-auto flex items-center">
        <img 
          src={productivityGains.image.src} 
          alt={productivityGains.image.alt} 
          className="w-full h-full object-cover object-center absolute inset-0" 
        />
      </div>
    </div>

    {/* BOTTOM ROW: 3 Tall & Equal Size/Style Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
      {productivityGains.bottomCards.map((card) => (
        <div 
          key={card.title} 
          className="rounded-3xl border border-[#e2e5e9] shadow-[0_12px_30px_-5px_rgba(0,0,0,0.05)] p-4 md:p-6 flex flex-col justify-center max-w-[320px] w-full mx-auto min-h-60" 
          style={{ background: "linear-gradient(160deg, #fbfcfd 0%, #edf0f3 100%)" }}
        >
          <h3 className="font-bold text-slate-900 mb-4 text-md sm:text-lg leading-snug">
            {card.title}
          </h3>
          <p className="text-[14.5px] text-[#5E5F60] leading-5">
            {card.description}
          </p>
        </div>
      ))}
    </div>

  </div>
</section>
<section className="px-6 py-16 md:py-20 text-center" style={{ background: "linear-gradient(180deg, #0aa8e0 0%, #4fc3ee 55%, #a8e0f7 100%)" }}>
  <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{finalCta.heading}</h2>
  <p className="text-white/90 text-base md:text-lg max-w-2xl mx-auto mb-8">{finalCta.description}</p>
  <a href={finalCta.button.href} className="inline-block bg-white text-primary font-bold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all">
    {finalCta.button.label}
  </a>
</section>
      
    </>
  );
}