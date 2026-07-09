import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import contactData from "../data/pages/contact.json";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    industry: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // yahan apna API call / form submission logic add karein
    console.log(formData);
  };

  const { fields, submitText } = contactData.form;

  return (
    <section className="w-full bg-[#EDF6FD] pt-10 md:pt-12 pb-16 md:pb-20 px-6 md:px-12">
      <motion.div
        className="max-w-2xl mx-auto text-center mb-10"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-2">
          {contactData.title}
        </h1>
        <p className="max-w-xl mx-auto text-textcolor text-base opacity-90 leading-7">
          {contactData.description}
        </p>
      </motion.div>

      {/* Form Card */}
      <motion.div
        className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm p-4 md:p-8"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-semibold text-heading mb-2">
                {fields.fullName.label}
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder={fields.fullName.placeholder}
                required
                className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-semibold text-heading mb-2">
                {fields.phone.label}
                <span className="text-red-500">*</span>
              </label>
              <div className="flex">
                <select
                  className="border border-slate-300 rounded-l-lg px-2 text-sm bg-white
               focus:outline-none focus:ring-2 focus:ring-primary focus:z-10"
                >
                  <option>{fields.phone.countryCode}</option>
                </select>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={fields.phone.placeholder}
                  required
                  className="w-full border border-slate-300 -ml-px rounded-r-lg
               px-4 py-2.5 text-sm
               focus:outline-none focus:ring-2 focus:ring-primary focus:z-10"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-heading mb-2">
                {fields.email.label}
                <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={fields.email.placeholder}
                required
                className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Industry */}
            <div>
              <label className="block text-sm font-semibold text-heading mb-2">
                {fields.industry.label}
                <span className="text-red-500">*</span>
              </label>
              <select
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                required
                className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-md bg-white focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="" disabled>
                  {fields.industry.placeholder}
                </option>
                {fields.industry.options.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-semibold text-heading mb-2">
              {fields.message.label}
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={fields.message.placeholder}
              rows={5}
              className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm resize-y focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Submit */}
          <div className="text-center pt-2">
            <button
              type="submit"
              className="bg-primary text-white px-8 py-2.5 rounded-lg font-semibold transition duration-300 transform hover:scale-105 active:scale-95"
            >
              {submitText}
            </button>
          </div>
        </form>
      </motion.div>

      {/* Direct Contact */}
      <motion.div
        className="max-w-2xl mx-auto text-center mt-10"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h4 className="font-bold text-heading mb-3">
          {contactData.directContact.heading}
        </h4>
        <p className="text-textcolor text-sm flex items-center justify-center gap-2 mb-1">
          <Mail className="w-4 h-4 text-primary" />
          Email us at: {contactData.directContact.email}
        </p>
        <p className="text-textcolor text-sm flex items-center justify-center gap-2">
          <Phone className="w-4 h-4 text-pink-500" />
          Call Us Now: {contactData.directContact.phone}
        </p>
        <p className="text-textcolor text-sm italic mt-4">
          {contactData.directContact.note}
        </p>
        <p className="text-heading text-sm font-medium mt-4">
          {contactData.directContact.footerNote}
        </p>
      </motion.div>
    </section>
  );
};

export default ContactUs;
