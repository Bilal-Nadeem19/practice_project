import React from "react";
import { Calendar,NotebookPen, AudioWaveform, Copy, History } from "lucide-react";
import Reveal, { RevealItem } from "../common/Reveal";
import content from "../../data/feature_detail/post_session_tools.json";
const capabilityIcons = { notes: NotebookPen, voice: AudioWaveform, documents: Copy, history: History };


export default function PostSessionTools() {
  const { badge, heading, description, buttons, backgroundImage } =
    content.hero;
    const { keyCapabilities } = content;
    const { productivityImpact } = content;
    const { howItWorks } = content;
    const { finalCta } = content;

  return (
    <>
    <section
      className="relative overflow-hidden bg-cover bg-center min-h-137.5 sm:min-h-125 flex items-end"
      style={{ backgroundImage: `url(${backgroundImage.src})` }}
    >
      <div className="absolute bottom-0 left-0 bg-[#59727B]/15 backdrop-blur-xl p-6 sm:py-11 sm:pl-8 sm:pr-6 text-white shadow-lg rounded-tr-[80px] max-w-[470px] w-full">
        <span className="inline-block bg-white/80 text-span-text text-xs font-medium px-4 py-1.5 rounded-full mb-4 w-fit">
          {badge}
        </span>

        <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4 font-poppins">
          {heading}
        </h1>

        <p className="text-white/90 leading-relaxed mb-6 font-poppins text-sm sm:text-base max-w-112.5">
          {description}
        </p>

        {/* Changed to flex-col for mobile, flex-row for tablet/desktop */}
        <Reveal className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          {buttons.map((btn, i) => (
            <RevealItem key={btn.label} delay={i * 0.2}>
              <a
                href={btn.href}
                className="flex items-center justify-center gap-2 bg-white text-primary font-semibold px-4 py-3 rounded-md shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-500 ease-out text-center w-full sm:w-auto"
              >
                {btn.label}
                {btn.icon === "calendar" && (
                  <Calendar className="w-4 h-4 text-primary shrink-0" />
                )}
              </a>
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </section>


    <Reveal className="px-4 sm:px-6 py-20 md:py-24" style={{ background: "linear-gradient(180deg, #eaf6fd 0%, #f6fbfe 100%)" }}>
  {/* Container width ko max-w-5xl se max-w-7xl kar diya hai taake wide look mile */}
  <div className="max-w-6xl mx-auto mb-8">
    <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 text-center mb-20 max-w-190 mx-auto">
      <h2 className="font-poppins font-bold text-3xl md:text-[36px] text-gray-900 mb-4">{keyCapabilities.heading}</h2>
      <p className="font-poppins text-[#797A7D] text-base md:text-[16px] leading-relaxed">{keyCapabilities.description}</p>
    </div>

    {/* Grid container gap aur alignment adjust ki hai */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {keyCapabilities.cards.map((card) => {
        const Icon = capabilityIcons[card.icon];

        return (
          <div
            key={card.title}
            /* Padding adjust ki hai (p-6) aur min-h remove ki hai */
            className="bg-white rounded-2xl shadow-md pt-10 pb-4 px-5 text-center flex flex-col items-center justify-start h-full"
          >
            {/* Rounded icon box (rounded-xl) */}
            <div className="w-12 h-12 bg-[#38BDF8] rounded-xl flex items-center justify-center mb-4 shrink-0">
              <Icon className="w-6 h-6 text-white" />
            </div>

            <h3 className="font-poppins font-bold text-[20px] text-heading mb-2 leading-snug">
              {card.title}
            </h3>

            <p className="font-poppins text-[15px] text-textcolor leading-relaxed">
              {card.description}
            </p>
          </div>
        );
      })}
    </div>
  </div>
</Reveal>

<section className="relative overflow-hidden px-6 py-16 bg-white">
  <div className="absolute -top-10 -left-10 w-64 h-64 bg-sky-50 rounded-full"></div>
  <div className="absolute -top-16 right-0 w-72 h-72 bg-sky-50 rounded-full"></div>
  <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-80 h-80 bg-sky-50 rounded-full"></div>

  <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">    
    {/* Left Side Content - max-w-md se text 2 lines mein rap hoga */}
    <div className="max-w-sm lg:ml-8">
      <h2 className="font-Poppins font-bold text-[36px] md:text-[44px] leading-relaxed text-primary mb-6 max-w-lg">
        {productivityImpact.heading}
      </h2>

      <ul className="space-y-1">
        {productivityImpact.points.map((point) => (
          <li 
            key={point.label} 
            className="text-slate-700 text-sm md:text-base leading-relaxed pl-5 relative before:content-['•'] before:absolute before:left-0 before:text-slate-900 before:font-bold"
          >
            <span className="font-bold text-slate-900">{point.label}:</span> {point.text}
          </li>
        ))}
      </ul>
    </div>

    {/* Right Side Image - Shadow removed, p-2/p-3 for tight fit */}
    <div className=" w-full ml-auto lg:-ml-18 max-w-225 flex items-center justify-center ">
  <img 
    src={productivityImpact.image.src} 
    alt={productivityImpact.image.alt} 
    className="w-full h-full object-contain block" 
  />
</div>

  </div>
</section>

<Reveal className="px-6 py-18 text-center" style={{ background: "linear-gradient(180deg, #ffffff 0%, #eaf6fd 100%)" }}>
  <h2 className="font-Poppins font-semibold text-[51px] leading-10.75 text-primary text-center mb-2">{howItWorks.heading}</h2>
  <p className="text-slate-500 mb-12">{howItWorks.subheading}</p>

  <div className="max-w-230 mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
    {howItWorks.steps.map((step) => (
      <div key={step.title} className="bg-white shadow-lg pt-10 px-8 pb-3">
        <h3 className="font-bold text-slate-900 text-xl mb-3">{step.title}</h3>
        <p className="text-textcolor leading-relaxed">{step.description}</p>
      </div>
    ))}
  </div>
</Reveal>

<Reveal className="px-6 py-16 md:py-20 text-center" style={{ background: "linear-gradient(rgb(0, 151, 218) 0%, rgb(0, 186, 242) 50%, rgb(143, 218, 248) 100%)" }}>
  <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{finalCta.heading}</h2>
  <p className="text-white/90 text-base md:text-lg max-w-2xl mx-auto mb-8">{finalCta.description}</p>
  <a href={finalCta.button.href} className="inline-block bg-white text-primary font-bold px-5 py-2.5 rounded-lg shadow-lg hover:shadow-xl transition-all">
    {finalCta.button.label}
  </a>
</Reveal>

    </>
  );
}