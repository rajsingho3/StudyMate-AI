"use client";

import { Upload, Brain, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Working() {
  return (
    <section id="working" className="relative py-24 bg-[#0B061A] text-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            How it works
          </h2>

          <div className="space-y-10">

            {/* Step 1 */}
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 flex items-center justify-center rounded-full bg-purple-600/20 text-purple-500">
                <Upload size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Upload Your Material</h4>
                <p className="text-white/60 text-sm mt-1">
                  Drag and drop your PDFs, lecture slides, or scanned notes.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 flex items-center justify-center rounded-full bg-purple-600/20 text-purple-500">
                <Brain size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-lg">AI Analyzes Content</h4>
                <p className="text-white/60 text-sm mt-1">
                  Our engine processes your documents, indexing key concepts in seconds.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 flex items-center justify-center rounded-full bg-purple-600/20 text-purple-500">
                <MessageCircle size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Chat & Learn</h4>
                <p className="text-white/60 text-sm mt-1">
                  Ask any question and get instant answers based strictly on your material.
                </p>
              </div>
            </div>

          </div>
        </motion.div>

        {/* RIGHT CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative"
        >
          <div className="h-95 w-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur flex flex-col items-center justify-center text-center">
            <div className="h-14 w-14 rounded-full bg-purple-600/20 flex items-center justify-center text-purple-500 mb-4">
              <Upload size={26} />
            </div>
            <h4 className="font-semibold text-lg">Ready to process</h4>
            <p className="text-sm text-white/60 mt-1">
              Support for PDF, DOCX, PPTX
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
