import Link from "next/link";

export default function HomePage() {
  return (
    <div className="font-body">

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-[#0d0420] via-[#1a0a2e] to-[#2a0e4a] pt-20 overflow-hidden">
        {/* Radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_60%,#571F81_0%,transparent_55%)] opacity-50" />
        {/* Teal accent glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,#2C97AF_0%,transparent_40%)] opacity-20" />
        {/* Vertical gold line */}
        <div className="absolute left-[4.5rem] top-24 bottom-24 w-px bg-gradient-to-b from-transparent via-[#DFB24A]/40 to-transparent hidden md:block" />

        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-32 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-heading text-[#DFB24A] text-lg md:text-xl tracking-[0.4em] mb-8 animate-fade-up">
              VON ROSEN CONSULTING
            </p>
            <h1 className="font-heading leading-none animate-fade-up-delay">
              <span className="block text-white text-6xl md:text-8xl lg:text-[6.5rem]">YOU BUILT</span>
              <span className="block text-white text-6xl md:text-8xl lg:text-[6.5rem]">THE CAREER.</span>
              <span className="block text-[#DFB24A] text-6xl md:text-8xl lg:text-[6.5rem] mt-2">NOW BUILD</span>
              <span className="block text-[#DFB24A] text-6xl md:text-8xl lg:text-[6.5rem]">THE LEGACY.</span>
            </h1>
            <p className="text-white/70 text-lg md:text-xl leading-relaxed mt-8 mb-12 max-w-xl animate-fade-up-delay-2">
              Strategic consulting and coaching for executives, founders, and leaders 50+ who know their best work isn't behind them.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up-delay-2">
              <a
                href="https://legacy-business-roadmap.lovable.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#DFB24A] text-[#0d0420] font-bold px-8 py-4 text-sm tracking-[0.2em] uppercase hover:bg-[#eac66e] transition-colors text-center"
              >
                Get Your Free Roadmap
              </a>
              <Link
                href="/contact"
                className="border border-white/30 text-white px-8 py-4 text-sm tracking-[0.2em] uppercase hover:border-[#DFB24A] hover:text-[#DFB24A] transition-colors text-center"
              >
                Apply for Coaching
              </Link>
            </div>
          </div>

          {/* Right: transparent hero image floated over gradient */}
          <div className="hidden lg:flex items-end justify-center relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/viveka-hero.png"
              alt="Viveka von Rosen"
              className="relative z-10 w-full max-w-[520px] object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-white/30">
          <span className="font-heading text-sm tracking-[0.4em]">SCROLL</span>
          <span className="text-[#DFB24A]">↓</span>
        </div>
      </section>

      {/* ─── RECOGNITION: THE LIMINAL ZONE ─── */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <span className="gold-line" />
          <h2 className="font-heading text-[#571F81] text-5xl md:text-7xl lg:text-8xl mb-10 leading-none">
            YOU&apos;RE IN THE<br />LIMINAL ZONE.
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-700 text-xl leading-relaxed mb-6">
                You built something real. You led teams, made hard calls, delivered results. Now you&apos;re standing at the threshold between who you were and what you&apos;re building next.
              </p>
              <p className="text-gray-700 text-xl leading-relaxed mb-6">
                Terrifying and exhilarating in equal measure.
              </p>
              <p className="text-[#571F81] text-xl font-bold leading-relaxed">
                That&apos;s exactly where I work.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              {[
                "Your brilliance feels invisible. The people around you don't quite see what you're building.",
                "You know you have real value to offer. You just can't get traction.",
                "You're not starting over. But the old playbook doesn't fit the new game.",
                "You're frozen between fear of failure and fear of what success actually demands.",
              ].map((text, i) => (
                <div key={i} className="border-l-2 border-[#2C97AF] pl-6">
                  <p className="text-gray-600 text-lg leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FREE OFFER CTA ─── */}
      <section className="bg-[#1a0a2e] py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,#571F81_0%,transparent_60%)] opacity-30" />
        <div className="relative max-w-4xl mx-auto text-center">
          <span className="font-heading text-[#DFB24A] text-lg tracking-[0.4em] mb-4 block">START HERE</span>
          <h2 className="font-heading text-white text-5xl md:text-7xl mb-6 leading-none">
            START WITH CLARITY.
          </h2>
          <p className="text-white/70 text-xl leading-relaxed mb-4 max-w-2xl mx-auto">
            The Legacy Business Roadmap maps where you are, where you&apos;re going, and what&apos;s actually in the way.
          </p>
          <p className="text-[#DFB24A] text-lg font-bold mb-12">
            Free. No pitch. Just useful.
          </p>
          <a
            href="https://legacy-business-roadmap.lovable.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#DFB24A] text-[#0d0420] font-bold px-12 py-5 text-sm tracking-[0.25em] uppercase hover:bg-[#eac66e] transition-colors"
          >
            Get Your Free Roadmap →
          </a>
        </div>
      </section>

      {/* ─── HOW I WORK ─── */}
      <section className="bg-gray-50 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <span className="gold-line" />
          <h2 className="font-heading text-[#571F81] text-5xl md:text-7xl mb-4 leading-none">
            HOW I GUIDE THIS WORK.
          </h2>
          <p className="text-gray-500 text-lg mb-16 max-w-xl">
            Most leaders in transition need four things. Rarely in one place.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: "01",
                title: "Identity Transition",
                body: "Move beyond the old title and into what's next — with real clarity about who you are now and the authority that comes with it.",
              },
              {
                num: "02",
                title: "Business Strategy",
                body: "Turn your experience into clear offers, a sharp message, and a business model that actually fits your life and your values.",
              },
              {
                num: "03",
                title: "Visibility Infrastructure",
                body: "Build the systems that let the right people find you, understand your value, and trust you enough to engage.",
              },
              {
                num: "04",
                title: "Practical Tech Fluency",
                body: "AI, LinkedIn, and the right tools working for you — not another source of overwhelm or digital clutter.",
              },
            ].map((pillar) => (
              <div
                key={pillar.num}
                className="bg-white p-8 border-t-4 border-[#571F81] hover:shadow-lg transition-shadow"
              >
                <div className="font-heading text-[#DFB24A] text-5xl mb-4">{pillar.num}</div>
                <h3 className="font-heading text-[#571F81] text-2xl mb-4 leading-tight">{pillar.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{pillar.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COACHING PROGRAMS ─── */}
      <section id="coaching" className="bg-white py-24 px-6 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <span className="gold-line" />
          <h2 className="font-heading text-[#571F81] text-5xl md:text-7xl mb-4 leading-none">
            PRIVATE COACHING PROGRAMS.
          </h2>
          <p className="text-gray-500 text-lg mb-16 max-w-2xl">
            Three ways to work together, depending on where you are and how fast you want to move.
          </p>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="border border-gray-200 p-10 flex flex-col hover:border-[#571F81] transition-colors group">
              <div className="font-heading text-[#2C97AF] text-base tracking-[0.3em] mb-3">ENTRY POINT</div>
              <h3 className="font-heading text-[#571F81] text-4xl mb-4 leading-tight">
                Visible Authority Intensive
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
                Focused strategy in a short time window. Three 90-minute sessions or a half-day in-person intensive. You choose what fits.
              </p>
              <ul className="space-y-3 mb-10">
                {[
                  "Clearer business blueprint",
                  "Stronger positioning and messaging",
                  "Right tools for your goals",
                  "Practical next steps to implement right away",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-700 text-sm">
                    <span className="text-[#DFB24A] font-bold mt-0.5">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="border-t border-gray-100 pt-8 mt-auto">
                <div className="font-heading text-[#571F81] text-5xl mb-6">$2,000</div>
                <Link
                  href="/contact"
                  className="block text-center bg-[#0d0420] text-white px-6 py-4 text-sm font-bold tracking-[0.2em] uppercase hover:bg-[#571F81] transition-colors"
                >
                  Apply Now
                </Link>
              </div>
            </div>

            {/* Card 2 — Featured */}
            <div className="border-2 border-[#571F81] p-10 flex flex-col relative bg-[#faf8fd]">
              <div className="absolute -top-4 left-8 bg-[#DFB24A] text-[#0d0420] font-bold px-5 py-1 text-xs tracking-[0.2em] uppercase">
                Most Popular
              </div>
              <div className="font-heading text-[#2C97AF] text-base tracking-[0.3em] mb-3">6 MONTHS</div>
              <h3 className="font-heading text-[#571F81] text-4xl mb-4 leading-tight">
                Legacy Business Accelerator
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
                Six months of focused momentum. Private coaching to turn your experience into visible authority, stronger positioning, and steady traction.
              </p>
              <ul className="space-y-3 mb-10">
                {[
                  "Clearer business model",
                  "Stronger positioning and messaging",
                  "Greater visibility and authority",
                  "Right tech and systems for growth",
                  "Consistent momentum and accountability",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-700 text-sm">
                    <span className="text-[#DFB24A] font-bold mt-0.5">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="border-t border-[#571F81]/20 pt-8 mt-auto">
                <div className="font-heading text-[#571F81] text-5xl mb-6">$9,000</div>
                <Link
                  href="/contact"
                  className="block text-center bg-[#571F81] text-white px-6 py-4 text-sm font-bold tracking-[0.2em] uppercase hover:bg-[#3d1660] transition-colors"
                >
                  Apply Now
                </Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className="border border-gray-200 p-10 flex flex-col hover:border-[#571F81] transition-colors group">
              <div className="font-heading text-[#2C97AF] text-base tracking-[0.3em] mb-3">12 MONTHS</div>
              <h3 className="font-heading text-[#571F81] text-4xl mb-4 leading-tight">
                Legacy Business Mastery
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
                Build something that outlasts the hustle. The full 12-month experience for executives who want depth, staying power, and real alignment.
              </p>
              <ul className="space-y-3 mb-10">
                {[
                  "Clear and credible business direction",
                  "Visible authority in your space",
                  "Offers and messaging that reflect your real value",
                  "Deeper confidence in your next chapter",
                  "A business built for impact, income, and freedom",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-700 text-sm">
                    <span className="text-[#DFB24A] font-bold mt-0.5">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="border-t border-gray-100 pt-8 mt-auto">
                <div className="font-heading text-[#571F81] text-5xl mb-6">$15,000</div>
                <Link
                  href="/contact"
                  className="block text-center bg-[#0d0420] text-white px-6 py-4 text-sm font-bold tracking-[0.2em] uppercase hover:bg-[#571F81] transition-colors"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CREDENTIALS / PROOF ─── */}
      <section className="bg-[#571F81] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="font-heading text-[#DFB24A] text-base tracking-[0.4em] text-center mb-10">
            AS SEEN IN
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-16">
            {["FORBES", "FAST COMPANY", "MONEY MAGAZINE", "MIAMI HERALD", "DENVER POST"].map((pub) => (
              <span key={pub} className="font-heading text-xl md:text-2xl tracking-[0.3em] text-white/80">
                {pub}
              </span>
            ))}
          </div>

          <div className="w-px h-12 bg-[#DFB24A]/30 mx-auto mb-16" />

          <div className="grid sm:grid-cols-3 gap-12 text-center">
            {[
              { stat: "19+", label: "Years Building Visible Authority" },
              { stat: "7", label: "Books on LinkedIn & Business Strategy" },
              { stat: "500K+", label: "Reach Across LinkedIn & Media" },
            ].map((item) => (
              <div key={item.stat}>
                <div className="font-heading text-[#DFB24A] text-7xl md:text-8xl mb-3">{item.stat}</div>
                <p className="text-white/60 tracking-widest text-sm uppercase">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="bg-gray-50 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <span className="gold-line" />
          <h2 className="font-heading text-[#571F81] text-5xl md:text-7xl mb-16 leading-none">
            WHAT CLIENTS SAY.
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-10 border-l-4 border-[#DFB24A]">
              <p className="text-gray-700 text-lg leading-relaxed mb-8 italic">
                &ldquo;Working with Viveka has been the best decision I&apos;ve made all year — possibly in the past five years. Her coaching has given me clarity, confidence, and a renewed sense of purpose. Viveka has that rare combination of wisdom, intuition, and strategic brilliance that helps you see both the big picture and the practical next step.&rdquo;
              </p>
              <div>
                <p className="font-bold text-[#571F81]">Lori Gama</p>
                <p className="text-gray-500 text-sm">Founder and President, DaGama Digital Marketing Agency</p>
              </div>
            </div>

            <div className="bg-white p-10 border-l-4 border-[#DFB24A]">
              <p className="text-gray-700 text-lg leading-relaxed mb-8 italic">
                &ldquo;She is clearly a cutting edge expert in an increasingly valuable marketing tool. Her abilities are beyond just the tactical aspects. She has a keen eye for helping you build a brand strategy that will make a lasting impact on your business.&rdquo;
              </p>
              <div>
                <p className="font-bold text-[#571F81]">David Bishop</p>
                <p className="text-gray-500 text-sm">Chairman of the Board, Parrot Analytics</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FINAL APPLICATION CTA ─── */}
      <section className="bg-[#1a0a2e] py-32 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,#571F81_0%,transparent_60%)] opacity-40" />
        <div className="relative max-w-3xl mx-auto">
          <span className="gold-line mx-auto" />
          <h2 className="font-heading text-white text-5xl md:text-7xl lg:text-8xl mb-6 leading-none">
            READY TO BUILD YOUR NEXT CHAPTER?
          </h2>
          <p className="text-white/60 text-xl leading-relaxed mb-4 max-w-xl mx-auto">
            Private coaching with Viveka is selective. She works with a small number of clients at any given time.
          </p>
          <p className="text-[#DFB24A] text-lg font-bold mb-12">
            Apply below to start the conversation.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#DFB24A] text-[#0d0420] font-bold px-12 py-5 text-sm tracking-[0.25em] uppercase hover:bg-[#eac66e] transition-colors"
          >
            Apply for Private Coaching
          </Link>
        </div>
      </section>
    </div>
  );
}
