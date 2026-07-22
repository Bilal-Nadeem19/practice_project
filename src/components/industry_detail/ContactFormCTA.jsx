import { useState } from "react";
import { Calendar } from "lucide-react";
import industriesData from "../../data/pages/industries.json";

// Saari 30 industries ko ek flat list mein nikaalna, 4 sections se
const allIndustries = industriesData.industrySections.flatMap(
  (section) => section.industries,
);

const ContactFormCTA = ({ ctaData, currentIndustry }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    industry: currentIndustry || "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // yahan API call / form submission logic aayega
  };

  return (
    <section className="w-full px-6 md:px-12 pt-12 md:pt-14 pb-16 md:pb-20 bg-primary text-center">
      <h2 className="text-2xl md:text-4xl font-bold text-white mb-3">
        {ctaData.title}
      </h2>
      <p className="text-white/90 text-sm md:text-base mb-4">
        {ctaData.subtitle}
      </p>

      <div className="flex flex-wrap justify-center gap-4 mb-4">
        <a
          href={ctaData.buttons.primary.link}
          className="bg-white text-primary px-6 py-3 rounded-lg font-semibold text-sm md:text-base transition duration-300 transform hover:scale-105 active:scale-95"
        >
          {ctaData.buttons.primary.text}
        </a>

        <a
          href={ctaData.buttons.secondary.link}
          className="bg-white text-primary px-6 py-3 rounded-lg font-semibold text-sm md:text-base flex items-center gap-2 transition duration-300 transform hover:scale-105 active:scale-95"
        >
          <Calendar className="w-4 h-4 md:w-5 md:h-5" />
          {ctaData.buttons.secondary.text}
        </a>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-180 mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-8 text-left"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full border border-slate-300 text-gray-400 rounded-lg px-4 py-2.5 text-md bg-white focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full border border-slate-300 text-gray-400 rounded-lg px-4 py-2.5 text-md bg-white focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <div className="flex">
              <select className="border border-gray-300 border-r-0 rounded-l-lg rounded-r-none px-2 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                <option>AU +61</option>
              </select>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your number"
                className="flex-1 border border-gray-300 rounded-r-lg rounded-l-none px-4 py-3 text-md text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Industry
            </label>
            <select
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-md bg-white focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">Select your industry</option>
              {allIndustries.map((industry) => (
                <option key={industry.title} value={industry.title}>
                  {industry.title}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            How can we help?
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your specific needs or challenges"
            rows={4}
            className="w-full border border-slate-300 text-gray-400 rounded-lg px-4 py-2.5 text-md bg-white focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-primary text-white px-6 py-2 rounded-lg font-semibold text-sm md:text-base transition duration-300 hover:bg-[#098DC9] hover:scale-105"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactFormCTA;
