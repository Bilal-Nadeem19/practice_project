import { m } from "framer-motion";

const fadeInDim = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export function RevealItem({ children, delay = 0, className = "", style }) {
  return (
    <m.div
      variants={fadeInDim}
      transition={{ delay }}
      className={className}
      style={style}
    >
      {children}
    </m.div>
  );
}

export default function Reveal({ children, delay = 0, className = "", style }) {
  return (
    <m.div
      variants={fadeInDim}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0 }}
      transition={{ delay }}
      className={className}
      style={style}
    >
      {children}
    </m.div>
  );
}