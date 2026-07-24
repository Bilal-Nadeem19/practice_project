import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import IndustryHero from "../components/industry_detail/IndustryHero";
import StatsBar from "../components/industry_detail/StatsBar";
import IntroSection from "../components/industry_detail/IntroSection";
import KeyBenefits from "../components/industry_detail/KeyBenefits";
import WhyChooseUs from "../components/industry_detail/WhyChooseUs";
import PrimaryUses from "../components/industry_detail/PrimaryUses";
import ProductivityGains from "../components/industry_detail/ProductivityGains";
import UseCase from "../components/industry_detail/UseCase";
import ContactFormCTA from "../components/industry_detail/ContactFormCTA";
import ExploreOtherIndustries from "../components/industry_detail/ExploreOtherIndustries";

// Saari JSON files ko lazy loaders k roop mein register karein (koi static import nahi)
const industryModules = import.meta.glob("../data/industry_detail/*.json");

const IndustryDetail = () => {
  const { slug } = useParams();
  const [data, setData] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    setData(null);
    setNotFound(false);

    const path = `../data/industry_detail/${slug}.json`;
    const loader = industryModules[path];

    if (!loader) {
      setNotFound(true);
      return;
    }

    loader().then((module) => setData(module.default));
  }, [slug]);

  if (notFound) {
    return <div className="text-center py-20">Industry not found</div>;
  }

  if (!data) {
    return <div className="text-center py-20">Loading...</div>; // ya koi skeleton loader
  }

  return (
    <div className="overflow-x-clip">
      <IndustryHero heroData={data.hero} />
      <StatsBar stats={data.stats} />
      <IntroSection introData={data.intro} />
      <KeyBenefits keyBenefits={data.keyBenefits} />
      <WhyChooseUs whyChooseUs={data.whyChooseUs} />
      <PrimaryUses primaryUses={data.primaryUses} />
      <ProductivityGains productivityGains={data.productivityGains} />
      <UseCase useCase={data.useCase} />
      <ContactFormCTA ctaData={data.contactCta} />
      <ExploreOtherIndustries exploreData={data.exploreOther} />
    </div>
  );
};

export default IndustryDetail;