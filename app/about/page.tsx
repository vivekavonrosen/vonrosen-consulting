import Link from "next/link";

export const metadata = {
  title: "About Viveka von Rosen | Von Rosen Consulting",
  description:
    "19+ years of building visible authority, authoring seven books on LinkedIn strategy, and helping leaders turn expertise into traction. Now she helps others do the same.",
};

export default function AboutPage() {
  return (
    <div className="font-body">

      {/* ─── HERO ─── */}
      <section className="relative bg-gradient-to-br from-[#0d0420] via-[#1a0a2e] to-[#2a0e4a] pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,#571F81_0%,transparent_55%)] opacity-50" />
        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="font-heading text-[#DFB24A] text-lg tracking-[0.4em] mb-6 block">VIVEKA VON ROSEN</span>
            <h1 className="font-heading text-white text-6xl md:text-8xl lg:text-[6rem] leading-none mb-8">
              LEGACY &amp;<br />
              <span className="text-[#DFB24A]">VISIBILITY</span><br />
              STRATEGIST.
            </h1>
            <p className="text-white/70 text-xl leading-relaxed max-w-lg">
              Author. Speaker. Entrepreneur. 19+ years turning expertise into authority — and helping others do the same.
            </p>
          </div>
          <div className="relative">
            {/* Replace with actual headshot */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/viveka-portrait.jpg"
              alt="Viveka von Rosen"
              className="w-full object-cover object-center"
            />
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#DFB24A]/30 -z-10" />
          </div>
        </div>
      </section>

      {/* ─── STORY ─── */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <span className="gold-line" />
          <h2 className="font-heading text-[#571F81] text-5xl md:text-7xl mb-12 leading-none">
            THE WORK.
          </h2>

          <div className="space-y-8 text-gray-700 text-xl leading-relaxed max-w-3xl">
            <p>
              Viveka&apos;s business journey began in her early 20s. She has spent the past two decades building companies, building audiences, and building systems that help other people build too.
            </p>
            <p>
              In 2006, she founded Linked Into Business, a LinkedIn consulting firm that grew into a six-figure business and established her as one of the world&apos;s foremost LinkedIn authorities. In 2017, she co-founded Vengreso, which became one of the world&apos;s largest digital sales transformation companies.
            </p>
            <p>
              She is the author of seven books including <em>LinkedIn Marketing: An Hour a Day</em> and <em>101 Ways to Rock LinkedIn</em>. Her work has been featured in Forbes, Fast Company, Money Magazine, the Miami Herald, the Denver Post, and more.
            </p>
            <p>
              As an international speaker, she has spoken to audiences from Auckland to Anchorage on digital transformation, personal branding, visible authority, leadership, and entrepreneurial growth.
            </p>
            <p>
              Now, through Von Rosen Consulting, she works directly with executives, founders, and leaders 50+ who are navigating what comes next — helping them convert decades of expertise into profitable, visible authority businesses using practical strategy, LinkedIn, and AI-powered workflows.
            </p>
          </div>
        </div>
      </section>

      {/* ─── CREDENTIALS ─── */}
      <section className="bg-gray-50 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <span className="gold-line" />
          <h2 className="font-heading text-[#571F81] text-5xl md:text-7xl mb-16 leading-none">
            CREDENTIALS.
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "LinkedIn Authority", desc: "One of the world's foremost LinkedIn strategy experts, with 19+ years on the platform." },
              { label: "7 Books Published", desc: "On LinkedIn strategy, business growth, and professional transformation." },
              { label: "International Speaker", desc: "Keynotes and trainings from Auckland to Anchorage on AI, visibility, and reinvention." },
              { label: "500K+ Reach", desc: "Across LinkedIn, newsletters, podcast platforms, and media features." },
            ].map((item) => (
              <div key={item.label} className="bg-white p-8 border-t-4 border-[#2C97AF]">
                <h3 className="font-heading text-[#571F81] text-2xl mb-4">{item.label}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHAT DRIVES THIS WORK ─── */}
      <section className="bg-[#571F81] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <span className="block w-16 h-px bg-[#DFB24A] mb-8" />
          <h2 className="font-heading text-white text-5xl md:text-7xl mb-12 leading-none">
            WHAT DRIVES THIS WORK.
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <p className="text-white/80 text-xl leading-relaxed">
              There is a specific person Viveka built this work for. Successful. Wise. Outwardly confident, privately uncertain. Standing at the threshold of something important without a clear map.
            </p>
            <p className="text-white/80 text-xl leading-relaxed">
              That liminal zone — the gap between who you were and who you&apos;re becoming — is where most experienced leaders get stuck. Not because they lack capability. Because the old playbook doesn&apos;t fit the new game, and no one has shown them a better one.
            </p>
          </div>
          <div className="mt-12">
            <p className="text-[#DFB24A] text-2xl font-bold">That&apos;s what this work is for.</p>
          </div>
        </div>
      </section>

      {/* ─── MEDIA LOGOS ─── */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="font-heading text-gray-300 text-base tracking-[0.4em] mb-10">AS SEEN IN</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {["FORBES", "FAST COMPANY", "MONEY MAGAZINE", "MIAMI HERALD", "DENVER POST"].map((pub) => (
              <span key={pub} className="font-heading text-2xl tracking-[0.3em] text-gray-200">
                {pub}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-[#1a0a2e] py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="block w-16 h-px bg-[#DFB24A] mx-auto mb-8" />
          <h2 className="font-heading text-white text-5xl md:text-7xl mb-6 leading-none">
            READY TO WORK TOGETHER?
          </h2>
          <p className="text-white/60 text-xl mb-12">
            Start with the free roadmap or apply for private coaching below.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://legacy-business-roadmap.lovable.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-[#DFB24A] text-[#DFB24A] px-10 py-4 font-bold text-sm tracking-[0.2em] uppercase hover:bg-[#DFB24A] hover:text-[#0d0420] transition-colors"
            >
              Free Roadmap
            </a>
            <Link
              href="/contact"
              className="inline-block bg-[#DFB24A] text-[#0d0420] font-bold px-10 py-4 text-sm tracking-[0.2em] uppercase hover:bg-[#eac66e] transition-colors"
            >
              Apply for Coaching
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
