const accentColors = ["#FF3AF2", "#00F5D4", "#FFE600", "#FF6B35", "#7B2FFF"];

const services = [
  {
    title: "UGC Video Packages",
    items: [
      "Concepts, hooks, scripting, filming, and editing.",
      "Captions, ad variants, and channel-specific formats.",
      "Authentic creator-style storytelling that converts.",
    ],
    emoji: "🎬",
  },
  {
    title: "Web Development",
    items: [
      "Landing pages and complete marketing sites.",
      "Performance optimization and conversion UX improvements.",
      "SEO-ready foundations with clear analytics events.",
    ],
    emoji: "💻",
  },
  {
    title: "Optional Add-Ons",
    items: [
      "Creative strategy and offer positioning.",
      "A/B testing plans for hooks, layouts, and CTAs.",
      "Content repurposing across paid and organic channels.",
    ],
    emoji: "⚡",
  },
];

const pricing = [
  {
    plan: "Starter UGC",
    detail: "3 videos / month",
    note: "Discovery call and revision rounds included.",
  },
  {
    plan: "Growth UGC",
    detail: "8 videos / month",
    note: "High-volume hooks, edits, and variant testing.",
  },
  {
    plan: "Web Dev Sprint",
    detail: "Single-page or multi-page site",
    note: "Fast launch cycle with optimization pass.",
  },
];

const testimonials = [
  {
    quote:
      "Abie made creator ads that felt native and still drove measurable intent. CTR jumped by 28%.",
    by: "DTC Skincare Founder",
  },
  {
    quote:
      "We shipped our new site in 10 days, and the conversion path finally felt intentional.",
    by: "SaaS Product Team",
  },
  {
    quote:
      "The blend of software engineering and UGC strategy is rare. Faster pages and better campaign performance.",
    by: "Consumer Brand Marketing Lead",
  },
];

const borderStyles = ["border-solid", "border-dashed", "border-double"];

export default function Home() {
  return (
    <div className="relative overflow-x-clip pb-20">
      <div
        className="floating-shape animate-float left-[5%] top-[4%] text-6xl"
        aria-hidden="true"
      >
        ✨
      </div>
      <div
        className="floating-shape animate-float-reverse right-[8%] top-[9%] text-7xl"
        aria-hidden="true"
      >
        💫
      </div>
      <div
        className="floating-shape animate-bounce-subtle left-[10%] top-[35%] text-6xl"
        aria-hidden="true"
      >
        🚀
      </div>
      <div
        className="floating-shape animate-wiggle right-[12%] top-[43%] text-6xl"
        aria-hidden="true"
      >
        🔥
      </div>
      <div
        className="floating-shape animate-float left-[6%] top-[68%] text-6xl"
        aria-hidden="true"
      >
        🎯
      </div>
      <div
        className="floating-shape animate-float-reverse right-[10%] top-[74%] text-7xl"
        aria-hidden="true"
      >
        ⚡
      </div>

      <main className="mx-auto w-full max-w-7xl px-6 py-24 md:px-8">
        <section className="relative mb-28 overflow-hidden rounded-[2rem] border-8 border-dashed border-[#FFE600] p-8 pattern-dots md:p-14">
          <div
            className="absolute inset-0 pattern-mesh opacity-90"
            aria-hidden="true"
          />
          <div className="massive-bg-word left-[-5%] top-[2%] text-[#ff3af2]">
            WOW
          </div>
          <div className="massive-bg-word bottom-[-8%] right-[-6%] text-[#00f5d4]">
            GO
          </div>

          <div className="relative z-10 grid gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:items-end">
            <div className="space-y-8">
              <p className="font-display text-lg uppercase tracking-[0.2em] text-[#00F5D4] text-shadow-double sm:text-xl">
                Abie Maxey • Digital Nomad • Software Engineer
              </p>
              <h1 className="font-heading text-5xl font-black uppercase leading-[0.88] tracking-tight text-shadow-mega sm:text-6xl md:text-7xl lg:text-8xl">
                UGC Videos +{" "}
                <span className="gradient-text">Web Development</span> For
                Brands That Move
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-white/90 sm:text-xl">
                Creator-first content and modern web builds for teams that want
                measurable growth, faster launches, and better conversion flow.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href="https://cal.com/"
                  className="max-button max-glow animate-pulse-glow inline-flex h-14 items-center justify-center border-[#FFE600] bg-gradient-to-r from-[#FF3AF2] via-[#7B2FFF] to-[#00F5D4] px-10 text-sm text-[#0d0d1a]"
                >
                  Book a Free Consult
                </a>
                <a
                  href="#work"
                  className="max-button shadow-hard-double inline-flex h-14 items-center justify-center border-[#00F5D4] bg-[#2D1B4E]/70 px-10 text-sm text-white"
                >
                  View Work
                </a>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
              {[
                "100+ videos delivered",
                "5 years in dev",
                "Remote worldwide",
                "Launch-ready systems",
              ].map((stat, index) => (
                <article
                  key={stat}
                  className="max-card p-6 shadow-hard-double"
                  style={{
                    borderColor: accentColors[index % accentColors.length],
                    transform:
                      index % 2 === 1
                        ? "translateY(18px) rotate(-1deg)"
                        : "rotate(1deg)",
                  }}
                >
                  <p className="font-heading text-2xl font-black uppercase tracking-wide text-shadow-double">
                    {stat}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="about"
          className="relative mb-28 rounded-[2rem] border-8 border-[#FF6B35] p-8 pattern-stripes md:p-14"
        >
          <div
            className="absolute inset-0 pattern-checker opacity-60"
            aria-hidden="true"
          />
          <div className="massive-bg-word left-[-3%] top-[12%] text-[#7b2fff]">
            YES
          </div>

          <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div className="space-y-6">
              <h2 className="font-heading text-4xl font-black uppercase leading-tight text-shadow-triple sm:text-6xl">
                About Abie
              </h2>
              <p className="text-lg leading-relaxed text-white/90 sm:text-xl">
                I combine software-engineer precision with creator energy to
                build assets that look great and perform under pressure. Speed,
                authenticity, and measurable growth guide every sprint.
              </p>
              <p className="text-lg font-bold uppercase tracking-wide text-[#FFE600] text-shadow-single">
                Currently based in Lisbon, traveling worldwide.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {["✈️", "📸", "🎥", "🧠"].map((item, index) => (
                <div
                  key={item}
                  className="max-card flex min-h-40 items-center justify-center border-4 p-6 text-6xl shadow-hard-double"
                  style={{
                    borderColor:
                      accentColors[(index + 1) % accentColors.length],
                    transform:
                      index % 2 === 0
                        ? "translateY(-8px) rotate(2deg)"
                        : "translateY(12px) rotate(-2deg)",
                  }}
                  aria-hidden="true"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="services"
          className="relative mb-28 rounded-[2rem] border-8 border-[#00F5D4] p-8 pattern-dots md:p-14"
        >
          <div
            className="absolute inset-0 pattern-mesh opacity-75"
            aria-hidden="true"
          />
          <div className="relative z-10 mb-12 flex items-center justify-between gap-6">
            <h2 className="font-heading text-4xl font-black uppercase leading-tight text-shadow-triple sm:text-6xl">
              Services <span aria-hidden="true">⚙️</span>
            </h2>
            <p className="font-display text-lg uppercase tracking-[0.15em] text-[#ff6b35]">
              Built for speed
            </p>
          </div>

          <div id="work" className="relative z-10 grid gap-8 lg:grid-cols-3">
            {services.map((service, index) => (
              <article
                key={service.title}
                className={`max-card ${borderStyles[index % borderStyles.length]} p-8 transition-all duration-300 ease-out hover:scale-[1.03]`}
                style={{
                  borderColor: accentColors[(index + 2) % accentColors.length],
                  transform:
                    index % 2 === 1
                      ? "translateY(20px) rotate(-1deg)"
                      : "rotate(1deg)",
                }}
              >
                <div className="mb-5 flex items-center justify-between border-b-4 border-dashed border-[#FFE600] pb-4">
                  <h3 className="font-heading text-2xl font-black uppercase tracking-tight text-shadow-double">
                    {service.title}
                  </h3>
                  <span
                    className="text-5xl animate-bounce-subtle"
                    aria-hidden="true"
                  >
                    {service.emoji}
                  </span>
                </div>
                <ul className="space-y-3 text-lg leading-relaxed text-white/90">
                  {service.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-1 text-[#00F5D4]" aria-hidden="true">
                        ◆
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section
          id="pricing"
          className="relative mb-28 rounded-[2rem] border-8 border-[#FF3AF2] p-8 pattern-stripes md:p-14"
        >
          <div
            className="absolute inset-0 pattern-checker opacity-70"
            aria-hidden="true"
          />
          <div className="massive-bg-word right-[-5%] top-[-6%] text-[#ffe600]">
            BOLD
          </div>
          <div className="relative z-10 mb-12 flex items-end justify-between gap-6">
            <h2 className="font-heading text-4xl font-black uppercase leading-tight text-shadow-triple sm:text-6xl">
              Pricing
            </h2>
            <span className="text-5xl animate-wiggle" aria-hidden="true">
              💰
            </span>
          </div>

          <div className="relative z-10 grid gap-8 lg:grid-cols-3">
            {pricing.map((item, index) => (
              <article
                key={item.plan}
                className="max-card p-8 shadow-hard-double"
                style={{
                  borderColor: accentColors[(index + 3) % accentColors.length],
                  transform:
                    index % 2 === 0
                      ? "rotate(-1deg)"
                      : "translateY(16px) rotate(1deg)",
                }}
              >
                <h3 className="font-heading text-3xl font-black uppercase text-shadow-double">
                  {item.plan}
                </h3>
                <p className="mt-3 font-display text-xl uppercase tracking-[0.14em] text-[#00F5D4]">
                  {item.detail}
                </p>
                <p className="mt-5 text-lg leading-relaxed text-white/85">
                  {item.note}
                </p>
              </article>
            ))}
          </div>

          <div className="relative z-10 mt-12">
            <a
              href="mailto:hello@abiemaxey.com?subject=Custom%20Quote"
              className="max-button max-glow inline-flex h-16 items-center justify-center border-[#FFE600] bg-gradient-to-r from-[#FF6B35] via-[#FF3AF2] to-[#00F5D4] px-12 text-sm text-[#0d0d1a]"
            >
              Request Custom Quote
            </a>
          </div>
        </section>

        <section
          id="testimonials"
          className="relative mb-28 rounded-[2rem] border-8 border-dashed border-[#7B2FFF] p-8 pattern-dots md:p-14"
        >
          <div
            className="absolute inset-0 pattern-mesh opacity-85"
            aria-hidden="true"
          />
          <div className="relative z-10 mb-12 flex items-center justify-between gap-6">
            <h2 className="font-heading text-4xl font-black uppercase leading-tight text-shadow-triple sm:text-6xl">
              Testimonials
            </h2>
            <span className="text-6xl animate-float" aria-hidden="true">
              💬
            </span>
          </div>

          <div className="relative z-10 grid gap-8 lg:grid-cols-3">
            {testimonials.map((item, index) => (
              <blockquote
                key={item.by}
                className="max-card border-4 border-solid p-8 shadow-hard-double"
                style={{
                  borderColor: accentColors[(index + 1) % accentColors.length],
                  transform:
                    index % 2 === 1
                      ? "translateY(14px) rotate(-1deg)"
                      : "rotate(1deg)",
                }}
              >
                <p className="text-lg leading-relaxed text-white/90">
                  "{item.quote}"
                </p>
                <footer className="mt-5 font-display text-base uppercase tracking-[0.14em] text-[#FFE600]">
                  {item.by}
                </footer>
              </blockquote>
            ))}
          </div>
        </section>

        <footer className="relative overflow-hidden rounded-[2rem] border-8 border-double border-[#00F5D4] p-8 pattern-checker md:p-14">
          <div
            className="absolute inset-0 pattern-stripes opacity-60"
            aria-hidden="true"
          />
          <div className="massive-bg-word left-[-4%] top-[-8%] text-[#ff6b35]">
            NOW
          </div>

          <div className="relative z-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-5">
              <h2 className="font-heading text-4xl font-black uppercase leading-tight text-shadow-triple sm:text-6xl">
                Let&apos;s Build Something Loud
              </h2>
              <p className="max-w-2xl text-lg leading-relaxed text-white/90 sm:text-xl">
                Contact for collaborations, campaigns, web builds, or mixed
                retainers. Working remotely worldwide.
              </p>
              <a
                href="mailto:hello@abiemaxey.com"
                className="max-button max-glow inline-flex h-14 items-center justify-center border-[#FF3AF2] bg-gradient-to-r from-[#FFE600] via-[#FF6B35] to-[#00F5D4] px-10 text-sm text-[#0d0d1a]"
              >
                hello@abiemaxey.com
              </a>
            </div>

            <div className="grid gap-4 text-lg font-bold uppercase tracking-[0.14em] sm:grid-cols-2">
              <a
                className="max-card border-4 border-[#FF3AF2] p-5 shadow-hard-double hover:scale-105"
                href="#about"
              >
                About
              </a>
              <a
                className="max-card border-4 border-dashed border-[#FFE600] p-5 shadow-hard-double hover:scale-105"
                href="#services"
              >
                Services
              </a>
              <a
                className="max-card border-4 border-[#00F5D4] p-5 shadow-hard-double hover:scale-105"
                href="#pricing"
              >
                Pricing
              </a>
              <a
                className="max-card border-4 border-double border-[#FF6B35] p-5 shadow-hard-double hover:scale-105"
                href="#testimonials"
              >
                Testimonials
              </a>
              <a
                className="max-card border-4 border-[#7B2FFF] p-5 shadow-hard-double hover:scale-105"
                href="https://www.tiktok.com"
              >
                TikTok
              </a>
              <a
                className="max-card border-4 border-dashed border-[#00F5D4] p-5 shadow-hard-double hover:scale-105"
                href="https://www.instagram.com"
              >
                Instagram
              </a>
              <a
                className="max-card border-4 border-[#FFE600] p-5 shadow-hard-double hover:scale-105"
                href="https://www.linkedin.com"
              >
                LinkedIn
              </a>
              <a
                className="max-card border-4 border-double border-[#FF3AF2] p-5 shadow-hard-double hover:scale-105"
                href="https://github.com"
              >
                GitHub
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
