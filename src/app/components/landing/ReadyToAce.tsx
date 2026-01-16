"use client";

import Link from "next/link";

export default function ReadyToAce() {
  return (
    <section className="relative py-24 bg-[#0B061A]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl bg-linear-to-r from-purple-600 to-indigo-600 p-12 md:p-16 text-center">

          {/* Glow Effect */}
          <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-white/20 blur-[120px]" />
          <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-black/20 blur-[120px]" />

          {/* Content */}
          <h2 className="relative text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to ace your exams?
          </h2>
          <p className="relative text-white/80 max-w-2xl mx-auto mb-8">
            Join thousands of students who are saving hours of study time every week.
          </p>

          <div className="relative flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#"
              className="px-6 py-3 rounded-xl bg-white text-purple-700 font-semibold hover:bg-white/90 transition"
            >
              Start Free Trial
            </Link>

            <Link
              href="#"
              className="px-6 py-3 rounded-xl border border-white/30 text-white hover:bg-white/10 transition"
            >
              View Pricing
            </Link>
          </div>

          <p className="relative text-white/70 text-sm mt-4">
            No credit card required · 7-day free trial
          </p>
        </div>
      </div>
    </section>
  );
}
