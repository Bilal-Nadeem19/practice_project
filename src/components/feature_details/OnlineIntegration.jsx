import React from "react";
import { Calendar, Link2, TrendingUp, Activity } from "lucide-react";
import Reveal, { RevealItem } from "../common/Reveal";
import featureData from "../../data/feature_detail/online_integration.json";

const capabilityIcons = { link: Link2, calendar: Calendar, "trending-up": TrendingUp, activity: Activity };

const OnlineIntegration = () => {
  const { badge, title, description, buttons, bgImage, benefits, keyCapabilities, whyChoose, finalCta } = featureData;

  return (
    <>
      <section className="relative w-full min-h-100 lg:min-h-125 flex items-end overflow-hidden bg-slate-300">
        <div className="absolute inset-0 w-full h-full">
          <img src={bgImage.src} alt={bgImage.alt} className="w-full h-full object-cover object-center" />
        </div>

        <div className="bg-[#59727B]/3 backdrop-blur-xl p-10 text-white shadow-lg max-w-xl rounded-tr-[45px] rounded-br-[45px] mb-0 border-t border-r border-white/20">
          {badge && (
            <div className="inline-block mb-4">
              <span className="inline-block bg-white/80 text-span-text px-4 py-1 rounded-full text-xs font-medium mb-0 font-poppins">
                {badge}
              </span>
            </div>
          )}

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-featurehero-heading mb-4">{title}</h1>

          <p className="text-sm sm:text-base text-featurehero-description leading-relaxed mb-8">{description}</p>

          <Reveal className="flex flex-wrap gap-4">
            {buttons.map((btn, i) => (
              <RevealItem key={btn.label} delay={i * 0.2}>
                <a href={btn.href} className="inline-flex items-center gap-2 bg-white text-primary font-semibold px-5 py-3 rounded-md shadow-sm hover:shadow-md transition-all">
                  {btn.label}
                  {btn.icon === "calendar" && <Calendar className="w-4 h-4 text-primary" />}
                </a>
              </RevealItem>
            ))}
          </Reveal>
        </div>
      </section>

      {benefits && (
        <Reveal className="py-18 md:py-28 bg-white text-slate-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-8">{benefits.title}</h2>

                <ul className="space-y-0 ml-4 sm:ml-6 max-w-4xl">
                  {benefits.list?.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-slate-900 text-lg leading-none mt-1.5">•</span>
                      <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                        <strong className="font-bold text-slate-900">{item.boldText}{" "}</strong>
                        {item.text}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-center lg:justify-end">
                <div className="relative overflow-hidden rounded-3xl shadow-xl border border-slate-100 max-w-lg w-full">
                  <img src={benefits.image.src} alt={benefits.image.alt} className="w-full h-auto object-cover" />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      )}

      {keyCapabilities && (
        <section className="py-6 md:py-10 bg-linear-to-r from-[#bdd8ec] to-[#FFFFFF]">
          <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-3">{keyCapabilities.title}</h2>
            <p className="text-slate-600 text-lg sm:text-xl mb-12">{keyCapabilities.subtitle}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 sm:gap-x-32 lg:gap-x-48 gap-y-8 max-w-4xl mx-auto justify-items-center">
              {keyCapabilities.cards?.map((card, idx) => {
                const Icon = capabilityIcons[card.icon];
                return (
                  <div key={idx} className="w-full max-w-3xl bg-white/80 backdrop-blur-sm p-7 sm:p-8 rounded-2xl shadow-sm border border-white/60 flex flex-col items-center text-center transition-all hover:shadow-md">
                    <div className="w-14 h-14 mb-6 bg-primary text-white flex items-center justify-center shadow-sm">
                      {Icon && <Icon className="w-10 h-10" strokeWidth={2} />}
                    </div>
                    <h3 className="text-heading font-Poppins text-left font-semibold text-[20px] mb-2">{card.title}</h3>
                    <p className="text-[#333] font-Poppins text-left text-[15px] leading-6 max-w-full">{card.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {whyChoose && (
        <section className="py-16 md:py-24 bg-white text-slate-800">
          <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-4 items-center">
              <div className="lg:col-span-6">
                <div className="bg-[#dcf0ff] w-full lg:w-[82%] p-6 sm:p-8 rounded-3xl border border-gray-400/60 shadow-sm">
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 font-Poppins">{whyChoose.exampleCard?.title}</h3>
                  <p className="text-textcolor text-sm sm:text-base leading-relaxed font-Poppins">{whyChoose.exampleCard?.description}</p>
                </div>
              </div>

              <div className="lg:col-span-6">
                <h2 className="font-poppins font-bold text-primary text-3xl sm:text-4xl md:text-[48px] leading-[130%] mb-6">{whyChoose.title}</h2>

                <ul className="space-y-2 font-Poppins">
                  {whyChoose.points?.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-textcolor text-base leading-snug mt-0.5">•</span>
                      <p className="text-md sm:text-lg text-textcolor leading-normal">{point}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {finalCta && (
        <Reveal className="px-6 py-16 md:py-20 text-center" style={{ background: "linear-gradient(rgb(0, 151, 218) 0%, rgb(0, 186, 242) 50%, rgb(143, 218, 248) 100%)" }}>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{finalCta.heading}</h2>
          <p className="text-white/90 text-base md:text-lg max-w-2xl mx-auto mb-8">{finalCta.description}</p>
          <a href={finalCta.button.href} className="inline-block bg-white text-primary font-bold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all">
            {finalCta.button.label}
          </a>
        </Reveal>
      )}
    </>
  );
};

export default OnlineIntegration;