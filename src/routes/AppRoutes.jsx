import {Routes, Route } from "react-router-dom";
import ScrollToHash from "../components/common/ScrollToHash";
import Home from "../pages/Home";
import About from "../pages/About";
import ContactUs from "../pages/ContactUs";
import Blogs from "../pages/Blogs";
import FAQs from "../pages/FAQs";
import Pricing from "../pages/Pricing";
import FeatureDetail from "../pages/FeatureDetail";
import IndustryDetail from "../pages/IndustryDetail";
import NotFound from "../pages/NotFound";

export default function AppRoutes() {
  return (
    <>
    <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<ContactUs />} />

        <Route path="/blogs" element={<Blogs />} />

        <Route path="/pricing" element={<Pricing />} />

        <Route path="/faqs" element={<FAQs />} />

        <Route
          path="/features/:slug"
          element={<FeatureDetail />}
        />

        <Route
          path="/industries/:slug"
          element={<IndustryDetail />}
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
</>
  );
}