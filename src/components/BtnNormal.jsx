"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const BtnNormal = ({ title, href }) => {
  return (
    <motion.div
      className="relative self-center mt-6 inline-block px-8 py-2 md:self-end"
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      <span className="absolute left-0 right-0 top-0 h-0.5 bg-white/60" />
      <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-white/60" />

      <motion.span
        className="absolute left-0 right-0 top-0 h-0.5 bg-brand origin-left"
        variants={{ rest: { scaleX: 0 }, hover: { scaleX: 1 } }}
        transition={{ duration: 0.4 }}
      />
      <motion.span
        className="absolute left-0 right-0 bottom-0 h-0.5 bg-brand origin-right"
        variants={{ rest: { scaleX: 0 }, hover: { scaleX: 1 } }}
        transition={{ duration: 0.4 }}
      />

      <Link className="text-white text-xs uppercase tracking-widest" href={href}>
        {title}
      </Link>
    </motion.div>
  );
};

export default BtnNormal;
