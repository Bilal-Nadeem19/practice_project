import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToHash from "../components/common/ScrollToHash";

// ✅ Home ko normal rehne dein (kyunke ye first page hai)
import Home from "../pages/Home";

// ✅ Baaki sab lazy load karein
const Industries = lazy(() => import("../pages/industries"));
const About = lazy(() => import("../pages/About"));
const ContactUs = lazy(() => import("../pages/ContactUs"));
const Blogs = lazy(() => import("../pages/Blogs"));
const FAQs = lazy(() => import("../pages/FAQs"));
const SignIn = lazy(() => import("../pages/SignIn"));
const GetStarted = lazy(() => import("../pages/GetStarted"));
const ForgotPassword = lazy(() => import("../pages/ForgotPassword"));

const AIReceptionist = lazy(() => import("../components/feature_details/AIReceptionist"));
const AIAppointmentScheduling = lazy(() => import("../components/feature_details/AIAppointmentScheduling"));
const SmartAssistant = lazy(() => import("../components/feature_details/SmartAssistant"));
const PostSessionTools = lazy(() => import("../components/feature_details/PostSessionTools"));
const OnlineIntegration = lazy(() => import("../components/feature_details/OnlineIntegration"));
const AdvancedDashboard = lazy(() => import("../components/feature_details/AdvancedDashboard"));

const IndustryDetail = lazy(() => import("../pages/IndustryDetail"));
const NotFound = lazy(() => import("../pages/NotFound"));

export default function AppRoutes() {
  return (
    <>
      <ScrollToHash />
      {/* ✅ Suspense wrap karna zaroori hai lazy components ke liye */}
      <Suspense fallback={<div className="min-h-screen" />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/features/ai-receptionist" element={<AIReceptionist />} />
          <Route path="/features/appointment-scheduling" element={<AIAppointmentScheduling />} />
          <Route path="/features/smart-assistant" element={<SmartAssistant />} />
          <Route path="/features/post-session-tools" element={<PostSessionTools />} />
          <Route path="/features/online-integration" element={<OnlineIntegration />} />
          <Route path="/features/advanced-dashboard" element={<AdvancedDashboard />} />
          <Route path="/industries/:slug" element={<IndustryDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}