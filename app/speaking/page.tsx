import Link from "next/link";

export const metadata = {
  title: "Speaking | Von Rosen Consulting",
  description:
    "Bring Viveka von Rosen to your next event. Keynotes on AI, visible authority, and reinvention for high-achieving professionals navigating change.",
};

export default function SpeakingPage() {
  return (
    <div className="font-body">

      {/* ─── HERO ─── */}
      <section className="relative min-h-[70vh] flex items-end bg-gradient-to-br from-[#0d0420] via-[#1a0a2e] to-[#2a0e4a] pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_70%,#571F81_0%,transparent_55%)] opacity-60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,#2C97AF_0%,transparent_40%)] opacity-15" />

        <div className="relative max-w-7xl mx-auto px-6 pb-20 w-full">
          <span className="font-heading text-[#DFB24A] text-lg tracking-[0.4em] mb-6 block">KEYNOTE SPEAKER</span>
          <h1 className="font-heading text-white text-6xl md:text-8xl lg:text-[7rem] leading-none mb-6">
            BRING VIVEKA<br />
            <span className="text-[#DFB24A]">TO YOUR STAGE.</span>
          </h1>
          <p className="text-white/70 text-xl max-w-2xl leading-relaxed mb-10">
            More than inspiration. Decades of entrepreneurial experience, digital visibility expertise, and the ability to translate change into practical action your audience can use right away.
          </p>
          <a
            href="https://calendly.com/vivekacoach/speaking-inquiry"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#DFB24A] text-[#0d0420] font-bold px-10 py-4 text-sm tracking-[0.2em] uppercase hover:bg-[#eac66e] transition-colors"
          >
            Inquire About Your Event
          </a>
        </div>
      </section>

      {/* ─── AS SEEN IN ─── */}
      <section className="bg-[#571F81] py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-8 md:gap-16">
          {["FORBES", "FAST COMPANY", "MONEY MAGAZINE", "MIAMI HERALD", "DENVER POST"].map((pub) => (
            <span key={pub} className="font-heading text-xl tracking-[0.3em] text-white/40">
              {pub}
            </span>
          ))}
        </div>
      </section>

      {/* ─── BIO + PHOTO ─── */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="gold-line" />
            <h2 className="font-heading text-[#571F81] text-5xl md:text-6xl mb-8 leading-none">
              WHY EVENT PLANNERS BRING VIVEKA IN.
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Your audience doesn&apos;t need more hype. They need relevance, clarity, and practical ways to move forward.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Viveka speaks with the credibility of a founder, the clarity of a strategist, and the warmth of someone who understands reinvention from the inside.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Her business journey began in her early 20s and spans multiple successful ventures, including Linked Into Business, a LinkedIn consulting firm she built into a six-figure business, and Vengreso, which became one of the world&apos;s largest digital sales transformation companies.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-10">
              She has spoken to audiences from Auckland to Anchorage. Her work has been featured in Forbes, Fast Company, Money Magazine, and more. She is the author of seven books on LinkedIn and business strategy.
            </p>
            <a
              href="https://calendly.com/vivekacoach/speaking-inquiry"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#571F81] text-white font-bold px-8 py-4 text-sm tracking-[0.2em] uppercase hover:bg-[#3d1660] transition-colors"
            >
              Book a Speaking Inquiry Call
            </a>
          </div>

          <div className="relative">
            {/* Replace with actual speaking/stage photo */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://placehold.co/600x700/1a0a2e/DFB24A?text=Viveka+on+Stage"
              alt="Viveka von Rosen speaking"
              className="w-full object-cover"
            />
            <div className="absolute -bottom-4 -left-4 w-full h-full border border-[#DFB24A]/30 -z-10" />
          </div>
        </div>
      </section>

      {/* ─── SPEAKING TOPICS ─── */}
      <section className="bg-gray-50 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <span className="gold-line" />
          <h2 className="font-heading text-[#571F81] text-5xl md:text-7xl mb-4 leading-none">
            KEYNOTE TOPICS.
          </h2>
          <p className="text-gray-500 text-lg mb-16 max-w-xl">
            Tailored to your audience. Every session is practical, engaging, and designed to leave people with ideas they can use.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                tag: "AI & THE FUTURE OF WORK",
                title: "AI Is Not Coming for Your Job. But It Is Changing Everything.",
                body: "A practical, grounded look at how AI is reshaping professional life — and how experienced leaders can use it to build faster, work smarter, and stay relevant in a world that moves fast.",
              },
              {
                tag: "VISIBLE AUTHORITY",
                title: "Your Expertise Is Invisible. Here's How to Fix That.",
                body: "Why decades of experience don't automatically translate into authority online — and the specific steps high-achieving professionals can take to build a credible, visible presence that opens doors.",
              },
              {
                tag: "REINVENTION & LEADERSHIP",
                title: "The Liminal Zone: Leading Through the Gap.",
                body: "The space between who you were and who you're becoming is where most leaders get stuck. This session is for professionals navigating identity, transition, and the question of what comes next.",
              },
            ].map((topic) => (
              <div key={topic.tag} className="bg-white p-8 border-t-4 border-[#571F81] hover:shadow-lg transition-shadow">
                <div className="font-heading text-[#DFB24A] text-sm tracking-[0.3em] mb-4">{topic.tag}</div>
                <h3 className="font-heading text-[#571F81] text-2xl mb-4 leading-tight">{topic.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{topic.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SPEAKING STYLE ─── */}
      <section className="bg-[#1a0a2e] py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            {[
              { label: "Strategic", desc: "Every session connects to what your audience actually needs to do next." },
              { label: "Warm", desc: "Real stories. No corporate distance. Audiences feel seen, not lectured." },
              { label: "Actionable", desc: "They leave with language, strategy, and a clearer sense of what to do." },
            ].map((item) => (
              <div key={item.label}>
                <div className="font-heading text-[#DFB24A] text-5xl mb-4">{item.label}</div>
                <p className="text-white/60 leading-relaxed">{item.desc}</p>
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
            WHAT AUDIENCES SAY.
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-10 border-l-4 border-[#DFB24A]">
              <p className="text-gray-700 text-lg leading-relaxed mb-8 italic">
                &ldquo;[Add speaking testimonial here — audience member, event organizer, or conference planner quote.]&rdquo;
              </p>
              <div>
                <p className="font-bold text-[#571F81]">[Name]</p>
                <p className="text-gray-500 text-sm">[Title, Organization]</p>
              </div>
            </div>
            <div className="bg-gray-50 p-10 border-l-4 border-[#DFB24A]">
              <p className="text-gray-700 text-lg leading-relaxed mb-8 italic">
                &ldquo;[Add second speaking testimonial here.]&rdquo;
              </p>
              <div>
                <p className="font-bold text-[#571F81]">[Name]</p>
                <p className="text-gray-500 text-sm">[Title, Organization]</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-[#571F81] py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-white text-5xl md:text-7xl mb-6 leading-none">
            LET&apos;S TALK ABOUT YOUR EVENT.
          </h2>
          <p className="text-white/70 text-xl leading-relaxed mb-12 max-w-xl mx-auto">
            Viveka speaks at conferences, leadership retreats, corporate offsites, and association events. Virtual and in-person.
          </p>
          <a
            href="https://calendly.com/vivekacoach/speaking-inquiry"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#DFB24A] text-[#0d0420] font-bold px-12 py-5 text-sm tracking-[0.25em] uppercase hover:bg-[#eac66e] transition-colors"
          >
            Schedule a Speaking Inquiry Call
          </a>
        </div>
      </section>
    </div>
  );
}
