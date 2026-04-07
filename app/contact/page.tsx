"use client";
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    // ── Formspree integration ──
    // 1. Go to formspree.io and create a free form
    // 2. Replace YOUR_FORM_ID below with your actual Formspree endpoint
    // 3. Remove the setTimeout simulation below and uncomment the fetch block

    // const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
    //   method: "POST",
    //   body: data,
    //   headers: { Accept: "application/json" },
    // });
    // if (res.ok) setSubmitted(true);

    // Simulated success for now — remove when Formspree is wired up
    await new Promise((r) => setTimeout(r, 1000));
    console.log("Form data:", Object.fromEntries(data));
    setSubmitted(true);
    setLoading(false);
  }

  return (
    <div className="font-body">

      {/* ─── HERO ─── */}
      <section className="relative bg-gradient-to-br from-[#0d0420] via-[#1a0a2e] to-[#2a0e4a] pt-40 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_70%,#571F81_0%,transparent_55%)] opacity-50" />
        <div className="relative max-w-3xl mx-auto text-center">
          <span className="font-heading text-[#DFB24A] text-lg tracking-[0.4em] mb-6 block">PRIVATE COACHING</span>
          <h1 className="font-heading text-white text-6xl md:text-8xl leading-none mb-6">
            APPLY FOR<br />
            <span className="text-[#DFB24A]">COACHING.</span>
          </h1>
          <p className="text-white/70 text-xl leading-relaxed">
            Viveka works with a small number of clients at any given time. Fill out the form below and she&apos;ll be in touch within 48 hours.
          </p>
        </div>
      </section>

      {/* ─── FORM ─── */}
      <section className="bg-gray-50 py-24 px-6">
        <div className="max-w-3xl mx-auto">

          {submitted ? (
            <div className="bg-white border-l-4 border-[#DFB24A] p-12 text-center">
              <div className="font-heading text-[#DFB24A] text-6xl mb-6">✓</div>
              <h2 className="font-heading text-[#571F81] text-4xl mb-4">Application Received.</h2>
              <p className="text-gray-600 text-lg leading-relaxed max-w-lg mx-auto">
                Viveka will review your application and be in touch within 48 hours. In the meantime, start with the free Legacy Business Roadmap if you haven&apos;t already.
              </p>
              <a
                href="https://legacy-business-roadmap.lovable.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-8 bg-[#DFB24A] text-[#0d0420] font-bold px-8 py-4 text-sm tracking-[0.2em] uppercase hover:bg-[#eac66e] transition-colors"
              >
                Get the Free Roadmap
              </a>
            </div>
          ) : (
            <div className="bg-white p-10 md:p-16">
              <span className="gold-line" />
              <h2 className="font-heading text-[#571F81] text-4xl md:text-5xl mb-2 leading-none">
                TELL ME ABOUT YOURSELF.
              </h2>
              <p className="text-gray-500 mb-10">All fields are required unless marked optional.</p>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Name */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-heading text-[#571F81] text-lg tracking-wider mb-2">
                      First Name
                    </label>
                    <input
                      name="firstName"
                      type="text"
                      required
                      className="w-full border border-gray-200 px-4 py-3 text-gray-700 focus:outline-none focus:border-[#571F81] transition-colors"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block font-heading text-[#571F81] text-lg tracking-wider mb-2">
                      Last Name
                    </label>
                    <input
                      name="lastName"
                      type="text"
                      required
                      className="w-full border border-gray-200 px-4 py-3 text-gray-700 focus:outline-none focus:border-[#571F81] transition-colors"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block font-heading text-[#571F81] text-lg tracking-wider mb-2">
                    Email Address
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full border border-gray-200 px-4 py-3 text-gray-700 focus:outline-none focus:border-[#571F81] transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                {/* LinkedIn */}
                <div>
                  <label className="block font-heading text-[#571F81] text-lg tracking-wider mb-2">
                    LinkedIn Profile URL <span className="text-gray-400 font-body text-sm normal-case">(optional)</span>
                  </label>
                  <input
                    name="linkedin"
                    type="url"
                    className="w-full border border-gray-200 px-4 py-3 text-gray-700 focus:outline-none focus:border-[#571F81] transition-colors"
                    placeholder="https://linkedin.com/in/yourprofile"
                  />
                </div>

                {/* Current situation */}
                <div>
                  <label className="block font-heading text-[#571F81] text-lg tracking-wider mb-2">
                    Where Are You Right Now?
                  </label>
                  <p className="text-gray-400 text-sm mb-3">
                    Brief description of your current role, career stage, or what&apos;s prompting you to reach out.
                  </p>
                  <textarea
                    name="currentSituation"
                    required
                    rows={4}
                    className="w-full border border-gray-200 px-4 py-3 text-gray-700 focus:outline-none focus:border-[#571F81] transition-colors resize-none"
                    placeholder="I'm currently..."
                  />
                </div>

                {/* What they're building */}
                <div>
                  <label className="block font-heading text-[#571F81] text-lg tracking-wider mb-2">
                    What Are You Building?
                  </label>
                  <p className="text-gray-400 text-sm mb-3">
                    What&apos;s the next chapter you&apos;re working toward? What does success look like in 12 months?
                  </p>
                  <textarea
                    name="buildingNext"
                    required
                    rows={4}
                    className="w-full border border-gray-200 px-4 py-3 text-gray-700 focus:outline-none focus:border-[#571F81] transition-colors resize-none"
                    placeholder="I want to build..."
                  />
                </div>

                {/* Biggest challenge */}
                <div>
                  <label className="block font-heading text-[#571F81] text-lg tracking-wider mb-2">
                    What&apos;s in the Way?
                  </label>
                  <p className="text-gray-400 text-sm mb-3">
                    What&apos;s the single biggest obstacle between you and that next chapter?
                  </p>
                  <textarea
                    name="obstacle"
                    required
                    rows={3}
                    className="w-full border border-gray-200 px-4 py-3 text-gray-700 focus:outline-none focus:border-[#571F81] transition-colors resize-none"
                    placeholder="The main thing in the way is..."
                  />
                </div>

                {/* Investment readiness */}
                <div>
                  <label className="block font-heading text-[#571F81] text-lg tracking-wider mb-2">
                    Investment Range
                  </label>
                  <p className="text-gray-400 text-sm mb-3">
                    Which program level are you most interested in exploring?
                  </p>
                  <select
                    name="investmentRange"
                    required
                    className="w-full border border-gray-200 px-4 py-3 text-gray-700 focus:outline-none focus:border-[#571F81] transition-colors bg-white"
                  >
                    <option value="">Select one</option>
                    <option value="2000">Visible Authority Intensive — $2,000</option>
                    <option value="9000">Legacy Business Accelerator — $9,000 (6 months)</option>
                    <option value="15000">Legacy Business Mastery — $15,000 (12 months)</option>
                    <option value="unsure">Not sure yet — open to a conversation</option>
                  </select>
                </div>

                {/* How they heard */}
                <div>
                  <label className="block font-heading text-[#571F81] text-lg tracking-wider mb-2">
                    How Did You Find Me? <span className="text-gray-400 font-body text-sm normal-case">(optional)</span>
                  </label>
                  <input
                    name="referralSource"
                    type="text"
                    className="w-full border border-gray-200 px-4 py-3 text-gray-700 focus:outline-none focus:border-[#571F81] transition-colors"
                    placeholder="LinkedIn, referral, podcast, Google..."
                  />
                </div>

                {/* Submit */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#571F81] text-white font-bold py-5 text-sm tracking-[0.25em] uppercase hover:bg-[#3d1660] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? "Submitting..." : "Submit Application"}
                  </button>
                  <p className="text-gray-400 text-xs text-center mt-4">
                    Viveka will respond within 48 business hours.
                  </p>
                </div>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* ─── ALTERNATIVE: START FOR FREE ─── */}
      <section className="bg-[#1a0a2e] py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-white/50 text-sm tracking-widest uppercase mb-4">NOT READY TO APPLY YET?</p>
          <h2 className="font-heading text-white text-4xl md:text-5xl mb-6 leading-none">
            Start with the free roadmap.
          </h2>
          <p className="text-white/60 text-lg mb-10">
            The Legacy Business Roadmap maps where you are, where you&apos;re going, and what&apos;s actually in the way. Free, and useful on its own.
          </p>
          <a
            href="https://legacy-business-roadmap.lovable.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-[#DFB24A] text-[#DFB24A] px-10 py-4 font-bold text-sm tracking-[0.2em] uppercase hover:bg-[#DFB24A] hover:text-[#0d0420] transition-colors"
          >
            Get Your Free Roadmap
          </a>
        </div>
      </section>
    </div>
  );
}
