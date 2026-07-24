import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import logoImg from "../assets/logo.webp";

const logo = {
  src: logoImg,
  alt: "Virtual Assistant.com.au - Taking Your Business Into The Future",
};

const industries = [
  "Physiotherapist",
  "Myotherapist",
  "Massage Therapist",
  "Personal Trainer",
  "Psychologist",
  "Chiropractor",
  "Podiatrist",
  "Osteopath",
  "Beauty Therapist",
  "Hairdresser",
  "Barber",
  "Dentist",
  "Accountant",
  "Lawyer",
  "Consultant",
  "Real Estate Agent",
  "Mechanic",
  "Plumber",
  "Electrician",
  "Window Cleaning",
  "Restaurant & Takeaway Businesses",
  "Hotels & Accommodation",
  "Builders",
  "Concreters",
  "HVAC",
  "Landscapers",
  "Roofing",
  "Tradie",
  "Other"
];

const timezones = [
  "Sydney (GMT+10:00)",
  "Perth (GMT+8:00)",
  "Auckland (GMT+12:00)",
  "London (GMT+0:00)",
  "New York (GMT-5:00)",
  "Los Angeles (GMT-8:00)",
];

const inputClass =
"w-full border-2 border-gray-300 rounded-lg px-6 py-4 text-base placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-sky-400 focus:border-sky-400";
const labelClass = "block text-md font-normal text-slate-700 mb-1.5";

export default function GetStarted() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <div className="border-b border-gray-200 py-6 flex justify-center">
        <img src={logo.src} alt={logo.alt} className="h-33 object-contain" />
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-semibold text-sky-500 text-center mb-2">Get Started</h1>
          <p className="text-slate-500 text-center text-lg mb-10">
            Create your account and have your own AI Virtual Receptionist live in under 5 minutes
          </p>

          <form className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className={labelClass}>Business Name <span className="text-red-500">*</span></label>
                <input type="text" required placeholder="Enter business name" className={inputClass} />
              </div>

              <div>
                <label className={labelClass}>Industry <span className="text-red-500">*</span></label>
                <select required className={inputClass} defaultValue="">
                  <option value="" disabled>Select industry</option>
                  {industries.map((ind) => (
                    <option key={ind} value={ind}>{ind}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className={labelClass}>Business Address <span className="text-red-500">*</span></label>
                <input type="text" required placeholder="Enter business address" className={inputClass} />
              </div>

              <div>
                <label className={labelClass}>City <span className="text-red-500">*</span></label>
                <input type="text" required placeholder="Enter city" className={inputClass} />
              </div>

              <div>
                <label className={labelClass}>State/Province/Region <span className="text-red-500">*</span></label>
                <input type="text" required placeholder="Enter state or region" className={inputClass} />
              </div>

              <div>
                <label className={labelClass}>Postal Code <span className="text-red-500">*</span></label>
                <input type="text" required placeholder="Enter postal code" className={inputClass} />
              </div>

              <div>
                <label className={labelClass}>Timezone <span className="text-red-500">*</span></label>
                <select required className={inputClass} defaultValue={timezones[0]}>
                  {timezones.map((tz) => (
                    <option key={tz} value={tz}>{tz}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className={labelClass}>First Name <span className="text-red-500">*</span></label>
                <input type="text" required placeholder="Enter first name" className={inputClass} />
              </div>

              <div>
                <label className={labelClass}>Last Name <span className="text-red-500">*</span></label>
                <input type="text" required placeholder="Enter last name" className={inputClass} />
              </div>

              <div>
                <label className={labelClass}>Email Address <span className="text-red-500">*</span></label>
                <input type="email" required placeholder="Enter email address" className={inputClass} />
              </div>

              <div>
                <label className={labelClass}>Phone Number <span className="text-red-500">*</span></label>
                <input type="tel" required placeholder="Enter phone number" className={inputClass} />
              </div>

              <div>
                <label className={labelClass}>Business Website</label>
                <input type="text" placeholder="Enter website URL" className={inputClass} />
              </div>
            </div>

            <div className="pt-6 mt-2">
              <h2 className="text-lg font-bold text-slate-800 mb-4 pb-4 border-b border-gray-200">Security</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>Password <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      placeholder="Enter password"
                      className={`${inputClass} pr-10`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Confirm Password <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <input
                      type={showConfirm ? "text" : "password"}
                      required
                      placeholder="Confirm your password"
                      className={`${inputClass} pr-10`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirm(!showConfirm)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                    >
                      {showConfirm ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-primary hover:bg-[#1496D1] hover:scale-[1.02] hover:-translate-y-1 text-white font-semibold py-4.5 rounded-xl transition-all duration-300 mt-4"
            >
              Create Account
            </button>

            <p className="text-center text-sm text-slate-500">
              Already have an account? <a href="/signin" className="text-sky-500 font-medium hover:underline">Sign In</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}