"use client";

import { Twitter, Github } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#0B061A] border-t border-white/10 text-white pt-20 pb-10">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* TOP GRID */}
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* BRAND */}
          <div>
            <div className="flex items-center gap-2 font-bold text-lg">
              <span className="text-purple-500">■</span> Study Mate AI
            </div>
            <p className="text-white/60 text-sm mt-4 leading-relaxed">
              The AI-powered study companion that turns your notes into an interactive tutor.
            </p>
          </div>

          {/* PRODUCT */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <Link href="#" className="hover:text-white transition">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Integrations
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Changelog
                </Link>
              </li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <Link href="#" className="hover:text-white transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <Link href="#" className="hover:text-white transition">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="max-w-7xl mx-auto px-6 mt-16 flex flex-col md:flex-row items-center justify-between gap-4 text-white/40 text-sm">
          <p>© {new Date().getFullYear()} Study Mate AI. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <Link
              href="https://x.com/RajSingh_io"
              className="hover:text-white transition"
              target="_blank"
            >
              <Twitter size={18} />
            </Link>
            <Link
              href="https://github.com/rajsingho3/StudyMate-AI"
              className="hover:text-white transition"
              target="_blank"
            >
              <Github size={18} />
            </Link>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
