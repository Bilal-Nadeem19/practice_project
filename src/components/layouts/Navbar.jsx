import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
// Import the full JSON data structure
import navData from "../../data/layouts/navbar.json";

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState(null);

  const { navbar, features, industries } = navData;

  const toggleMobileAccordion = (key) => {
    setMobileAccordion((prev) => (prev === key ? null : key));
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: 15, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.2, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: 10,
      scale: 0.98,
      transition: { duration: 0.15, ease: "easeIn" },
    },
  };

  const mobileMenuVariants = {
    hidden: { x: "-100%" },
    visible: {
      x: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: {
      x: "-100%",
      transition: { duration: 0.25, ease: "easeIn" },
    },
  };

  const accordionVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.2, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.15, ease: "easeIn" },
    },
  };

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* 1. Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to={navbar.logo.path}>
                <img
                  src="/src/assets/logo.webp"
                  alt={navbar.logo.alt}
                  className="h-12 sm:h-14 md:h-16 lg:h-20 object-contain"
                />
              </Link>
            </div>

            {/* 2. Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-x-8">
              {navbar.menu.map((item) => {
                // Handle drop-down menus dynamically
                if (item.hasDropdown) {
                  const isFeatures = item.id === "features";
                  const currentData = isFeatures ? features : industries;

                  return (
                    <div
                      key={item.id}
                      className="relative"
                      onMouseEnter={() => setActiveDropdown(item.id)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <button className="flex items-center gap-1 text-sm font-medium text-text-main hover:text-primary transition-colors py-2 cursor-pointer">
                        {" "}
                        <span>{item.label}</span>
                        <motion.div
                          animate={{
                            rotate: activeDropdown === item.id ? 180 : 0,
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown className="w-4 h-4 text-gray-500" />
                        </motion.div>
                      </button>

                      <AnimatePresence>
                        {activeDropdown === item.id && (
                          <motion.div
                            variants={dropdownVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className={`absolute top-full bg-white rounded-xl shadow-xl border border-gray-100 mt-1 p-4 ${
                              isFeatures
                                ? "left-0 w-64"
                                : "left-1/2 -translate-x-1/3 w-[680px]"
                            }`}
                          >
                            <div
                              className={
                                isFeatures
                                  ? "flex flex-col gap-y-1"
                                  : "grid grid-cols-3 gap-x-6 gap-y-2"
                              }
                            >
                              {currentData.map((subItem) => (
                                <Link
                                  key={subItem.id}
                                  to={subItem.path}
                                  className="px-3 py-2 rounded-lg text-sm font-medium text-text-main hover:bg-bg-light hover:text-primary transition-all flex items-center"
                                >
                                  {subItem.title}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                // Normal standalone links
                return (
                  <NavLink
                    key={item.id}
                    to={item.path}
                    className={({ isActive }) =>
                      `text-sm font-medium transition-colors ${
                        isActive
                          ? "text-primary"
                          : "text-text-main hover:text-primary"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                );
              })}
            </div>

            {/* 3. Desktop CTA Buttons */}
            <div className="hidden md:flex items-center gap-x-3">
              {navbar.buttons.map((btn) => (
                <Link
                  key={btn.id}
                  to={btn.path}
                  className={
                    btn.variant === "primary"
                      ? "hover:shadow-[var(--shadow-glow)] hover:scale-105 px-4 py-1.5 rounded-full text-[15px] font-semibold text-white bg-primary shadow-sm transform transition-all duration-200 ease-in-out text-center"
                      : "hover:shadow-[var(--shadow-glow)] hover:scale-105 px-4 py-1.5 rounded-full text-[15px] font-semibold text-text-main border-2 border-[#00a8e8] transform transition-all duration-200 ease-in-out text-center"
                  }
                >
                  {btn.label}
                </Link>
              ))}
            </div>

            {/* 4. Mobile Hamburger Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className="p-2 rounded-lg text-text-main hover:bg-bg-light transition-colors"
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {mobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <X className="w-6 h-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <Menu className="w-6 h-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* 5. Mobile Overlay + Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 top-20 z-40 bg-black md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            <motion.div
              key="drawer"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-20 left-0 bottom-0 z-50 w-4/5 max-w-xs bg-white shadow-2xl overflow-y-auto md:hidden"
            >
              <div className="px-4 py-4 flex flex-col gap-y-1">
                {navbar.menu.map((item) => {
                  if (item.hasDropdown) {
                    const isFeatures = item.id === "features";
                    const currentData = isFeatures ? features : industries;

                    return (
                      <div key={item.id}>
                        <button
                          onClick={() => toggleMobileAccordion(item.id)}
                          className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-semibold text-text-main hover:bg-bg-light transition-colors"
                        >
                          <span>{item.label}</span>
                          <motion.div
                            animate={{
                              rotate: mobileAccordion === item.id ? 180 : 0,
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronDown className="w-4 h-4 text-gray-500" />
                          </motion.div>
                        </button>

                        <AnimatePresence>
                          {mobileAccordion === item.id && (
                            <motion.div
                              variants={accordionVariants}
                              initial="hidden"
                              animate="visible"
                              exit="exit"
                              className={`overflow-hidden pl-4 mt-1 ${
                                isFeatures
                                  ? "flex flex-col gap-y-1"
                                  : "grid grid-cols-2 gap-1"
                              }`}
                            >
                              {currentData.map((subItem) => (
                                <Link
                                  key={subItem.id}
                                  to={subItem.path}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="px-3 py-2 rounded-lg text-sm font-medium text-text-main hover:bg-bg-light hover:text-primary transition-all"
                                >
                                  {subItem.title}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={item.id}
                      to={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-3 py-2.5 rounded-lg text-base font-semibold text-text-main hover:bg-bg-light transition-colors"
                    >
                      {item.label}
                    </Link>
                  );
                })}

                {/* Mobile CTA Buttons */}
                <div className="flex flex-col gap-y-3 pt-3 border-t border-gray-100 mt-2">
                  {navbar.buttons.map((btn) => (
                    <Link
                      key={btn.id}
                      to={btn.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={
                        btn.variant === "primary"
                          ? "px-6 py-2.5 rounded-full text-base font-bold text-white bg-primary hover:bg-primary-hover shadow-md hover:shadow-lg transition-all text-center"
                          : "px-6 py-2.5 rounded-full text-base font-bold text-text-main border-2 border-primary hover:bg-bg-light transition-all text-center"
                      }
                    >
                      {btn.label}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
