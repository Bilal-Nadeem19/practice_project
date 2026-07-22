import { useParams } from "react-router-dom";
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
import physiotherapistData from "../data/industry_detail/physiotherapist.json";
import myotherapistData from "../data/industry_detail/myotherapist.json";
import personalTrainerData from "../data/industry_detail/personal-trainer.json";
import massageTherapistData from "../data/industry_detail/massage-therapist.json";
import psychologistData from "../data/industry_detail/psychologist.json";
import chiropractorData from "../data/industry_detail/chiropractor.json";
import podiatristData from "../data/industry_detail/podiatrist.json";
import beautyTherapistData from "../data/industry_detail/beauty-therapist.json";
import hairdresserData from "../data/industry_detail/hairdresser.json";
import barberData from "../data/industry_detail/barber.json";
import dentistData from "../data/industry_detail/dentist.json";
import osteopathData from "../data/industry_detail/osteopath.json";
import lawyerData from "../data/industry_detail/lawyer.json";
import accountantData from "../data/industry_detail/accountant.json";
import consultantData from "../data/industry_detail/consultant.json";
import realEstateAgentData from "../data/industry_detail/real-estate-agent.json";
import mechanicData from "../data/industry_detail/mechanic.json";
import plumberData from "../data/industry_detail/plumber.json";
import cleaningData from "../data/industry_detail/window-cleaning.json";
import electriciansData from "../data/industry_detail/electrician.json";
import restaurantData from "../data/industry_detail/restaurant-takeaway.json";
import hotelsAccommodationData from "../data/industry_detail/hotels-accommodation.json";
import builderData from "../data/industry_detail/builder.json";
import concreterData from "../data/industry_detail/concreter.json";
import hvacData from "../data/industry_detail/hvac.json";
import landscaperData from "../data/industry_detail/landscaper.json";
import roofingData from "../data/industry_detail/roofing.json";
import tradieData from "../data/industry_detail/tradie.json";
import otherData from "../data/industry_detail/other.json";
import painterData from "../data/industry_detail/painter.json";

const industryDataMap = {
  physiotherapist: physiotherapistData,
  myotherapist: myotherapistData,
  "personal-trainer": personalTrainerData,
  "massage-therapist": massageTherapistData,
  psychologist: psychologistData,
  chiropractor: chiropractorData,
    podiatrist: podiatristData,
    "beauty-therapist": beautyTherapistData,
  hairdresser: hairdresserData,
barber: barberData,
dentist: dentistData,
osteopath: osteopathData,
lawyer: lawyerData,
accountant: accountantData,
consultant: consultantData,
"real-estate-agent": realEstateAgentData,
mechanic: mechanicData,
plumber: plumberData,
"window-cleaning": cleaningData,
"electrician": electriciansData,
"restaurant-takeaway": restaurantData,
"hotels-accommodation": hotelsAccommodationData,
builder: builderData,
concreter: concreterData,
hvac: hvacData,
landscaper: landscaperData,
roofing: roofingData,
tradie: tradieData,
other: otherData,
painter: painterData,
};

const IndustryDetail = () => {
  const { slug } = useParams();
  const data = industryDataMap[slug];

  if (!data) {
    return <div className="text-center py-20">Industry not found</div>;
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
      <ExploreOtherIndustries exploreData={data.exploreOther}/>


    </div>
  );
};

export default IndustryDetail;