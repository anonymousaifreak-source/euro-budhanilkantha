import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PlayfulCardProps {
  children: ReactNode;
  color?: "yellow" | "red" | "green" | "blue";
  className?: string;
  delay?: number;
}

const colorMap = {
  yellow: "bg-brand-yellow/10",
  red: "bg-brand-red/10",
  green: "bg-brand-green/10",
  blue: "bg-brand-blue/10",
};

const PlayfulCard = ({ children, color = "yellow", className = "", delay = 0 }: PlayfulCardProps) => {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ type: "spring", stiffness: 300, damping: 20, delay }}
      whileHover={{ y: -8, scale: 1.02 }}
      className={`p-8 rounded-4xl shadow-[0_10px_15px_-3px_rgba(0,0,0,0.04),0_4px_6px_-4px_rgba(0,0,0,0.02)] ${colorMap[color]} ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default PlayfulCard;
