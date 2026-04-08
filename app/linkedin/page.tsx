import Link from "next/link";

export const metadata = {
  title: "LinkedIn Legacy Launch™ | Von Rosen Consulting",
  description:
    "19+ years of LinkedIn expertise in a personalized, actionable experience. Position yourself as a leader in your industry with a LinkedIn presence that opens doors.",
};

export default function LinkedInPage() {
  return (
    <div className="font-body">

      {/* ─── HERO ─── */}
      <section className="relative min-h-[70vh] flex items-end bg-gradient-to-br from-[#0d0420] via-[#1a0a2e] to-[#0e2a35] pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_70%,#2C97AF_0%,transparent_50%)] opacity-30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_30%,#571F81_0%,transparent_50%)] opacity-40" />

        <div className="relative max-w-7xl mx-auto px-6 pb-20 w-full">
          <span className="font-heading text-[#2C97AF] text-lg tracking-[0.4em] mb-6 block">LINKEDIN STRATEGY</span>
          <h1 className="font-heading leading-none mb-6">
            <span className="block text-white text-6xl md:text-8xl lg:text-[7rem]">LINKEDIN</span>
            <span className="block text-[#DFB24A] text-6xl md:text-8xl lg:text-[7rem]">LEGACY LAUNCH™</span>
          </h1>
          <p className="text-white/70 text-xl max-w-2xl leading-relaxed mb-10">
            Transform your LinkedIn presence from a digital resume into a platform for leadership, influence, and opportunity — guided by 19+ years of LinkedIn expertise.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#DFB24A] text-[#0d0420] font-bold px-10 py-4 text-sm tracking-[0.2em] uppercase hover:bg-[#eac66e] transition-colors"
          >
            Apply Now
          </Link>
        </div>
      </section>

      {/* ─── PROBLEM ─── */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <span className="gold-line" />
          <h2 className="font-heading text-[#571F81] text-5xl md:text-7xl mb-10 leading-none">
            IS YOUR LINKEDIN<br />KEEPING UP WITH<br />YOUR AMBITIONS?
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-700 text-xl leading-relaxed mb-6">
                You&apos;ve already achieved success — in corporate leadership, entrepreneurship, consulting, or professional practice.
              </p>
              <p className="text-gray-700 text-xl leading-relaxed mb-6">
                Now you&apos;re ready for your next level: greater impact, stronger visibility, a trusted authority presence.
              </p>
              <p className="text-gray-700 text-xl leading-relaxed mb-6">
                The challenge? Translating decades of experience into a compelling online presence that resonates with the right audience, opens new doors, and reflects where you&apos;re going — not just where you&apos;ve been.
              </p>
              <p className="text-[#571F81] font-bold text-xl">
                LinkedIn can either be your best asset or a missed opportunity. Let&apos;s make it the former.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              {[
                "Pivoting industries or repositioning after a career transition",
                "Scaling a business and need inbound visibility",
                "Launching a consulting or coaching practice",
                "Preparing for board or advisory roles",
                "Building a thought leadership platform that reflects your real value",
              ].map((item, i) => (
                <div key={i} className="border-l-2 border-[#2C97AF] pl-6">
                  <p className="text-gray-600 text-lg leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY VIVEKA ─── */}
      <section className="bg-[#1a0a2e] py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="font-heading text-[#DFB24A] text-lg tracking-[0.4em] mb-6 block">19+ YEARS OF LINKEDIN EXPERTISE</span>
            <h2 className="font-heading text-white text-4xl md:text-5xl mb-8 leading-tight">
              WHY ME. WHY YOU. WHY NOW.
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              In today&apos;s digital-first business world, LinkedIn is more than a profile. It&apos;s a platform for leadership, influence, and opportunity.
            </p>
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              I&apos;ve spent 19+ years helping professionals — from solopreneurs to Fortune 500s — build LinkedIn presences that generate real-world results.
            </p>
            <p className="text-white/70 text-lg leading-relaxed">
              As co-founder of Vengreso, one of the world&apos;s largest digital sales transformation companies, and author of seven books on LinkedIn and business strategy, I&apos;ve seen exactly how a strategic presence drives new clients, speaking engagements, partnership opportunities, media visibility, and career pivots.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { stat: "19+", label: "Years of LinkedIn Expertise" },
              { stat: "7", label: "Books on LinkedIn Strategy" },
              { stat: "1B+", label: "LinkedIn Users We Navigate" },
              { stat: "$100K+", label: "Business Generated by Clients" },
            ].map((item) => (
              <div key={item.stat} className="border border-[#DFB24A]/20 p-6 text-center">
                <div className="font-heading text-[#DFB24A] text-5xl mb-2">{item.stat}</div>
                <p className="text-white/50 text-xs tracking-widest uppercase leading-relaxed">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHAT'S INCLUDED ─── */}
      <section className="bg-gray-50 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <span className="gold-line" />
          <h2 className="font-heading text-[#571F81] text-5xl md:text-7xl mb-16 leading-none">
            WHAT&apos;S INCLUDED.
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "Deep-Dive Strategy Session",
                items: [
                  "Clarity on your professional vision and goals",
                  "Identify your ideal audience for business alignment",
                  "Strategic keywords for LinkedIn search visibility",
                  "Personal brand storytelling framework",
                ],
              },
              {
                num: "02",
                title: "Custom Profile Optimization",
                items: [
                  "Headline that captures attention and conveys leadership",
                  "Compelling About section with authority and authenticity",
                  "Showcase accomplishments for maximum impact",
                  "Profile built to convert, not just inform",
                ],
              },
              {
                num: "03",
                title: "Visibility & Thought Leadership Strategy",
                items: [
                  "Advanced content creation techniques (including AI-driven)",
                  "LinkedIn messaging and engagement strategies",
                  "Lead generation and opportunity-building framework",
                  "Ongoing momentum plan beyond the session",
                ],
              },
            ].map((section) => (
              <div key={section.num} className="bg-white p-8 border-t-4 border-[#571F81]">
                <div className="font-heading text-[#DFB24A] text-5xl mb-4">{section.num}</div>
                <h3 className="font-heading text-[#571F81] text-2xl mb-6 leading-tight">{section.title}</h3>
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-gray-700 text-sm">
                      <span className="text-[#DFB24A] font-bold mt-0.5">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── OUTCOMES ─── */}
      <section className="bg-[#571F81] py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <span className="gold-line mx-auto" />
          <h2 className="font-heading text-white text-5xl md:text-6xl mb-16 leading-none">
            WHAT YOU&apos;LL GAIN.
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Immediate Impact",
                body: "Stand out among 1 billion+ LinkedIn users and attract opportunities aligned with your expertise.",
              },
              {
                title: "Long-Term Results",
                body: "Build a consistent pipeline of inbound interest and thought leadership positioning.",
              },
              {
                title: "Confidence & Clarity",
                body: "A polished, authentic presence that reflects your true value to clients, peers, and decision-makers.",
              },
            ].map((item) => (
              <div key={item.title}>
                <h3 className="font-heading text-[#DFB24A] text-3xl mb-4">{item.title}</h3>
                <p className="text-white/70 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <span className="gold-line" />
          <h2 className="font-heading text-[#571F81] text-5xl md:text-6xl mb-16 leading-none">
            CLIENT RESULTS.
          </h2>

          {/* Featured — full width */}
          <div className="bg-gray-50 p-10 border-l-4 border-[#DFB24A] mb-8">
            <p className="text-gray-700 text-lg leading-relaxed mb-8 italic">
              &ldquo;Viveka is my secret weapon for using LinkedIn to generate leads. I have taken every class she has offered and applied what I learned. As a result, I have sold over $100k of consulting business via LinkedIn over the last few years. She always knows what the latest trends are, and has graciously continued to advise me. I can&apos;t thank her enough.&rdquo;
            </p>
            <div>
              <p className="font-bold text-[#571F81]">Diane Valenti</p>
              <p className="text-gray-500 text-sm">Transformational Learning and Process Consultant</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-10 border-l-4 border-[#DFB24A]">
              <p className="text-gray-700 text-lg leading-relaxed mb-8 italic">
                &ldquo;Viveka is highly articulate and always on the forefront of everything concerning LinkedIn, including every new feature as soon as it becomes available. Her value as a professional coach, speaker and adviser is outstanding in every way.&rdquo;
              </p>
              <div>
                <p className="font-bold text-[#571F81]">John E. Burget</p>
                <p className="text-gray-500 text-sm">President, Project Capital Strategies</p>
              </div>
            </div>

            <div className="bg-gray-50 p-10 border-l-4 border-[#DFB24A]">
              <p className="text-gray-700 text-lg leading-relaxed mb-8 italic">
                &ldquo;One session with Viveka and I now really get it. She showed me so many things behind the scenes that I never knew existed and that only an insider would know.&rdquo;
              </p>
              <div>
                <p className="font-bold text-[#571F81]">Deberah Bringelson</p>
                <p className="text-gray-500 text-sm">C-Suite Advisor / International Profit-Producing Authority</p>
              </div>
            </div>

            <div className="bg-gray-50 p-10 border-l-4 border-[#DFB24A]">
              <p className="text-gray-700 text-lg leading-relaxed mb-8 italic">
                &ldquo;Hire her! She is incredible. Viveka has the ability to take a possibly complex idea and simplify it for immediate implementation.&rdquo;
              </p>
              <div>
                <p className="font-bold text-[#571F81]">Neen James</p>
                <p className="text-gray-500 text-sm">Keynote Speaker for Luxury and Legacy Brands</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-[#1a0a2e] py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="gold-line mx-auto" />
          <h2 className="font-heading text-white text-5xl md:text-7xl mb-6 leading-none">
            READY TO BUILD YOUR LINKEDIN LEGACY?
          </h2>
          <p className="text-white/60 text-xl leading-relaxed mb-12">
            Apply below and we&apos;ll find the right place to start.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#DFB24A] text-[#0d0420] font-bold px-12 py-5 text-sm tracking-[0.25em] uppercase hover:bg-[#eac66e] transition-colors"
          >
            Apply for LinkedIn Legacy Launch™
          </Link>
        </div>
      </section>
    </div>
  );
}
