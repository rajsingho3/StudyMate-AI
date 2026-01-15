"use client";

import { motion } from "framer-motion";
import { Zap, Quote, FileText } from "lucide-react";

export default function Features() {
  return (
    <section id="features" className="relative min-h-screen overflow-hidden bg-[#0B061A] py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight text-white">
            Study Smarter, Not Harder
          </h2>

          <p className="text-white/70 text-base md:text-lg">
            Unlock the full potential of your study materials with our advanced AI
            features designed for deep learning.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative rounded-2xl bg-white/5 border border-white/10 backdrop-blur p-8 shadow-xl hover:shadow-purple-500/10 transition"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-600/20">
              <Zap className="h-6 w-6 text-purple-400" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-white">
              Instant Summaries
            </h3>
            <p className="text-white/70 leading-relaxed">
              Get concise, bulleted summaries of long chapters in seconds. Perfect
              for last-minute review sessions.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-2xl bg-white/5 border border-white/10 backdrop-blur p-8 shadow-xl hover:shadow-purple-500/10 transition"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-600/20">
              <Quote className="h-6 w-6 text-purple-400" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-white">
              Citation Tracking
            </h3>
            <p className="text-white/70 leading-relaxed">
              Every answer is backed by direct citations from your text. Click a
              citation to jump exactly to the source page.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative rounded-2xl bg-white/5 border border-white/10 backdrop-blur p-8 shadow-xl hover:shadow-purple-500/10 transition"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-600/20">
              <FileText className="h-6 w-6 text-purple-400" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-white">
              Multi-format Support
            </h3>
            <p className="text-white/70 leading-relaxed">
              Upload PDFs, DOCX, and PPT slides seamlessly. The AI unifies all your
              different notes into one knowledge base.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
