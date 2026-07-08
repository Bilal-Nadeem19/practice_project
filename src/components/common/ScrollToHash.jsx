import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    // No hash -> scroll to top (Home click ka case)
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      return;
    }

    // Hash hai -> us section tak scroll karo
    // Thoda delay taake DOM/animations render ho chuken (Framer Motion sections)
    const timer = setTimeout(() => {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [hash, pathname]); // pathname bhi dependency mein rakha for safety

  return null;
}