"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {  FiMenu, FiX } from "react-icons/fi";
import Button from "../ui/Button";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
  initial={{ y: -40, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.9, ease: "easeOut" }}
     className="fixed top-0 left-0 w-full h-18 z-50 bg-black/40 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-white">
          Study<span className="text-purple-500">Mate</span> AI
        </Link>

        <div className=" ml-18 gap-8 cursor-pointer text-gray-400 hidden md:flex">
            <div >Features</div>
            <div >How it works</div>
            <div >Pricing</div>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex flex-col items-end gap-2">
          <div className="flex items-center gap-3">
            <Button variant="ghost" className="cursor-pointer">Login</Button>
            <Button variant="primary" className="cursor-pointer">Get Started</Button>
          </div>

          
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="text-white">
            {open ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
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
