import Hero from "../components/common/Hero";
import IndustrySection from "../components/IndustrySection";
import industriesData from "../data/pages/industries.json";
import CTASection from "../components/common/CTASection";

const heroData = industriesData.hero;
const industrySections = industriesData.industrySections;

const Industries = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Section 1: Hero */}
      <Hero heroData={heroData} />

      {/* Sections 2-5: Industry Categories (dynamic from JSON) */}
      {industrySections.map((section) => (
        <IndustrySection
          key={section.title}
          title={section.title}
          industries={section.industries}
        />
      ))}

      {/* Section 6: CTA */}
      <CTASection ctaData={industriesData.ctaSection} />
    </div>
  );
};

export default Industries;