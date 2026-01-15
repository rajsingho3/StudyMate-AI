"use client";

import { motion } from "framer-motion";
import Button from "../ui/Button";
import { Play } from "lucide-react";


export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0B061A]">

      {/* Gradient Blobs */}
      <div className="absolute -top-40 -left-40 h-125 w-125 rounded-full bg-purple-600/30 blur-[140px]" />
      <div className="absolute top-40 right-0 h-125 w-125 rounded-full bg-indigo-600/20 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-40 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-sm text-white/80 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            v1.0 is now live
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white">
            Ask questions <br />
            from your own <br />
            <span className="bg-linear-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              notes using AI
            </span>
          </h1>

          <p className="max-w-xl text-white/70">
            Upload PDFs, slides, and textbooks. Stop searching through <br /> hundreds
            of pages. Just ask and get instant, cited answers.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Button className="bg-linear-to-r from-purple-600 to-indigo-600 hover:opacity-90 rounded-xl px-6 py-3 text-white shadow-lg shadow-purple-500/30">
              Get Started for Free →
            </Button>

            <Button
              variant="secondary"
              className="rounded-xl px-6 py-3 border border-white/20 bg-white/10 text-white hover:bg-white/20 backdrop-blur"
            >
              <Play className="h-4 w-4 mr-2" />
              Watch Demo
            </Button>
          </div>

          
        </motion.div>

        {/* RIGHT MOCKUP */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          className="relative"
        >
          <div className="relative rounded-2xl bg-white/5 border border-white/10 backdrop-blur p-6 shadow-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
            </div>

            <div className="space-y-4">
              <div className="self-end ml-auto max-w-sm rounded-xl bg-linear-to-r from-purple-600 to-indigo-600 p-4 text-sm text-white shadow-lg">
                Can you summarize the key differences between supervised and
                unsupervised learning from Chapter 3?
              </div>

              <div className="max-w-sm rounded-xl bg-white/10 p-4 text-sm text-white/80 border border-white/10">
                <p className="mb-2 font-medium">
                  Based on Chapter 3: Machine Learning Basics
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    <b>Supervised Learning:</b> Uses labeled data.
                  </li>
                  <li>
                    <b>Unsupervised Learning:</b> Finds hidden patterns.
                  </li>
                </ul>
                <div className="flex gap-2 mt-3">
                  <span className="rounded bg-white/10 px-2 py-0.5 text-xs">
                    Source: Page 42
                  </span>
                  <span className="rounded bg-white/10 px-2 py-0.5 text-xs">
                    Source: Page 45
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
