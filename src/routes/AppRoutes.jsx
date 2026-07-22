import { Routes, Route } from "react-router-dom";
import ScrollToHash from "../components/common/ScrollToHash";
import Home from "../pages/Home";
import Industries from "../pages/Industries";
import About from "../pages/About";
import ContactUs from "../pages/ContactUs";
import Blogs from "../pages/Blogs";
import FAQs from "../pages/FAQs";

import AIReceptionist from "../components/feature_details/AIReceptionist";
import AIAppointmentScheduling from "../components/feature_details/AIAppointmentScheduling";
import SmartAssistant from "../components/feature_details/SmartAssistant";
import PostSessionTools from "../components/feature_details/PostSessionTools";
import OnlineIntegration from "../components/feature_details/OnlineIntegration";
import AdvancedDashboard from "../components/feature_details/AdvancedDashboard";

import IndustryDetail from "../pages/IndustryDetail";
import NotFound from "../pages/NotFound";

export default function AppRoutes() {
  return (
    <>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/industries" element={<Industries />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<ContactUs />} />

        <Route path="/blogs" element={<Blogs />} />

        <Route path="/faqs" element={<FAQs />} />

        <Route
          path="/features/ai-receptionist"
          element={<AIReceptionist />}
        />
        <Route
          path="/features/appointment-scheduling"
          element={<AIAppointmentScheduling />}
        />
        <Route
          path="/features/smart-assistant"
          element={<SmartAssistant />}
        />
        <Route
          path="/features/post-session-tools"
          element={<PostSessionTools />}
        />
        <Route
          path="/features/online-integration"
          element={<OnlineIntegration />}
        />
        <Route
          path="/features/advanced-dashboard"
          element={<AdvancedDashboard />}
        />

        <Route path="/industries/:slug" element={<IndustryDetail />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
