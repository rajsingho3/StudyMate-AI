import { motion } from "framer-motion";
import clsx from "clsx";
import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  href?: string;
};

const Button = ({
  children,
  variant = "primary",
  className,
  icon,
  onClick,
  href,
}: ButtonProps) => {
  const base =
    "relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-medium transition-all duration-300 overflow-hidden cursor-pointer";

  const variants = {
    primary:
      "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/30 hover:shadow-purple-500/60",
    secondary:
      "bg-white/10 text-white backdrop-blur border border-white/20 hover:bg-white/20",
    ghost: "bg-transparent text-white/80 hover:text-white",
  };

  const button = (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={clsx(base, variants[variant], className)}
    >
      {icon && <span className="text-lg">{icon}</span>}
      {children}
    </motion.button>
  );

  if (href) {
    return <Link href={href}>{button}</Link>;
  }

  return button;
};

export default Button;
