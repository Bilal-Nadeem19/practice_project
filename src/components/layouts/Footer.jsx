import React from "react";
import { Link } from "react-router-dom"; // Internal routing ke liye Link import kiya
import { motion } from "framer-motion";
import {
  FaTiktok,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import homeData from "../../data/layouts/footer.json";
import logoImg from "../../assets/logo.webp";
const socialIconMap = {
  tiktok: FaTiktok,
  linkedin: FaLinkedinIn,
  facebook: FaFacebookF,
  instagram: FaInstagram,
};

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.2 },
  transition: { duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] },
});

export default function Footer() {
  console.log(Object.keys(homeData));
  const { logo, description, socials, pages, industries, bottomBar } =
    homeData.footer;

  const allLinks = industries.links || [];
  const industryCols = [
    allLinks.slice(0, 8),
    allLinks.slice(8, 16),
    allLinks.slice(16, 23),
    allLinks.slice(23),
  ];

  return (
    <footer className="w-full bg-white border-t border-gray-100 font-sans antialiased">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[240px_140px_1fr] gap-10 lg:gap-14 items-start">

          {/* Col 1 — Logo + description + socials */}
          <motion.div {...fadeUp(0)} className="flex flex-col items-start text-left">
            <Link to="/">
              <img
                src={logoImg}
                alt={logo.alt}
                className="h-16 w-auto object-contain mb-5"
              />
            </Link>
            <p className="text-[14px] text-textcolor leading-relaxed max-w-[200px] mb-5">
              {description}
            </p>
            <div className="flex items-center gap-5">
              {socials.map((s) => {
                const Icon = socialIconMap[s.icon];
                if (!Icon) return null;
                return (
                  <a
                    key={s.id}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-500 transition-colors duration-200 text-xl"
                    aria-label={s.id}
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Col 2 — Pages */}
          <motion.div {...fadeUp(0.15)} className="text-left">
            <h4 className="text-[16px] font-bold text-heading mb-5 tracking-wide">
              {pages.title}
            </h4>
            <ul className="space-y-1.5">
              {pages.links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-[15px] text-textcolor hover:text-primary transition-colors duration-200 block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Col 3 — Industries */}
          <motion.div {...fadeUp(0.3)} className="text-left w-full">
            <h4 className="text-[16px] font-bold text-gray-900 mb-5 tracking-wide">
              {industries.title}
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-3.5 w-full">
              {industryCols.map((col, ci) => (
                <motion.ul {...fadeUp(0.3 + ci * 0.1)} key={ci} className="space-y-3.5 min-w-0">
                  {col.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.href}
                        className="text-[15px] text-gray-600 hover:text-sky-500 transition-colors duration-200 block leading-tight py-0.5"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </motion.ul>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom bar */}
      <motion.div {...fadeUp(0.5)} className="border-t border-gray-100 py-6">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between relative gap-4">
          <div className="hidden md:block w-[200px]"></div>
          <div className="text-center md:absolute md:left-1/2 md:-translate-x-1/2 text-[14px] text-gray-500 leading-normal">
            <p>{bottomBar.copyright}</p>
            <p>{bottomBar.rights}</p>
          </div>
          <div className="flex items-center gap-3 text-[14px] text-gray-500 z-10">
            {bottomBar.links.map((link, i) => (
              <React.Fragment key={link.label}>
                <Link
                  to={link.href}
                  className="hover:text-sky-500 transition-colors duration-200"
                >
                  {link.label}
                </Link>
                {i < bottomBar.links.length - 1 && (
                  <span className="text-gray-300">|</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </motion.div>
    </footer>
  );
}