"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import Button from "../ui/Button";
import StudyMateLogoIcon from "../ui/Study";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
        {/* LOGO */}
        <Link
          href="/"
          className="flex items-center gap-3 text-xl font-bold text-white group"
        >
          <div className="group-hover:scale-110 transition-transform duration-300">
            <StudyMateLogoIcon />
          </div>
          <span>
            Study <span className="text-purple-500">Mate</span> AI
          </span>
        </Link>

        {/* NAV LINKS */}
        <div className="hidden md:flex items-center gap-8 text-gray-400">
          <a
            href="#features"
            className="hover:text-white transition cursor-pointer"
          >
            Features
          </a>
          <span className="hover:text-white transition cursor-pointer">
            How it works
          </span>
          <span className="hover:text-white transition cursor-pointer">
            Pricing
          </span>
        </div>

        {/* ACTION BUTTONS */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost">Login</Button>
          <Button variant="primary">Get Started</Button>
        </div>

        {/* MOBILE TOGGLE */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="text-white">
            {open ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-black/80 backdrop-blur-xl border-t border-white/10"
          >
            <div className="flex flex-col gap-3 p-4">
              <Button variant="ghost" className="w-full justify-start">
                Login
              </Button>
              <Button variant="primary" className="w-full">
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
