import Image from "next/image";
import HappyFishGallery from "./happy-fish-gallery";
import ProfilePhoto from "./profile-photo";

const skills = [
  ["✦", "Office Administration", false],
  ["♡", "Calendar Management", true],
  ["✿", "Meeting Coordination", false],
  ["☁", "Document Control", true],
  ["✎", "Client Communication", false],
  ["⌁", "Event Planning", true],
] as const;

const projects = [
  {
    title: "Biker Girl",
    label: "Adventurous · Always exploring",
    description:
      "I love the freedom and excitement of riding. Being a biker girl reflects my adventurous side, my confidence, and my love for discovering new places along the way.",
    image: "/bikes.jpg",
    imageAlt: "Biker girl with motorcycles",
    tone: "rose",
  },
  {
    title: "Soft Girl",
    label: "Gentle · Thoughtful · Creative",
    description:
      "My soft girl side is caring, feminine, and thoughtful. I enjoy gentle details, pretty things, and creating a warm, peaceful feeling wherever I go.",
    image: "/soft.jpg",
    imageAlt: "Soft girl portrait with a gentle feminine aesthetic",
    tone: "lavender",
  },
] as const;

function SectionHeading({
  number,
  children,
  tone = "rose",
  reversed = false,
}: {
  number: string;
  children: React.ReactNode;
  tone?: "rose" | "lavender";
  reversed?: boolean;
}) {
  return (
    <div className="mb-12 flex items-center gap-4">
      {reversed && <div className={`section-rule-${tone} section-rule-reversed h-px flex-1`} />}
      <h2 className="font-display text-3xl text-ink md:text-4xl">
        <span className={tone === "rose" ? "text-rose" : "text-lavender"}>{number}</span>{" "}
        {children}
      </h2>
      {!reversed && <div className={`section-rule-${tone} h-px flex-1`} />}
    </div>
  );
}

export function Hero() {
  return (
    <section id="hero" className="hero-section relative flex min-h-screen items-center justify-center px-4 pt-20">
      <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
      <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-rose/30 bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-rose">
          <span className="status-dot" /> Available for sweet collaborations
        </div>
        <p className="mb-5 font-hand text-2xl text-lavender">Hello, I&apos;m Fatin ♡</p>
        <h1 className="font-display text-5xl font-semibold leading-[1.05] text-ink md:text-7xl lg:text-8xl">
          Organising every
          <span className="block italic text-rose">detail with care.</span>
        </h1>
        <p className="mx-auto mt-7 max-w-xl text-base leading-8 text-ink/65 md:text-lg">
          An organised and people-focused administrative executive creating calm,
          efficient workplaces through thoughtful coordination and dependable support.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a href="#projects" className="dream-button dream-button-rose">Bonus <span>↗</span></a>
          <a href="#about" className="dream-button dream-button-ghost">A little about me</a>
        </div>
      </div>
      <span className="scroll-note">Scroll to explore ↓</span>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="relative z-10 px-4 py-24 md:py-32">
      <div className="reveal mx-auto max-w-5xl">
        <SectionHeading number="01." >A little hello</SectionHeading>
        <div className="glass-card hello-cloud p-7 md:p-12">
          <div className="flex flex-col items-center gap-10 md:flex-row">
            <ProfilePhoto />
            <div className="flex-1 space-y-6">
              <p className="font-hand text-2xl text-rose">A calm organiser with a helpful heart.</p>
              <p className="text-lg leading-8 text-ink/70">
                I&apos;m an <strong className="font-semibold text-ink">administrative executive</strong> who enjoys
                bringing structure to busy days, supporting teams, and making sure every detail is handled
                with warmth and precision. I believe great administration gives people room to do their best work.
              </p>
              <div className="flex flex-wrap gap-3 pt-2 text-sm">
                <span className="soft-pill soft-pill-rose">♡ Kuala Lumpur, Malaysia</span>
                <span className="soft-pill soft-pill-lavender">✦ Open to opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative z-10 bg-white/30 px-4 py-24 md:py-32">
      <div className="reveal mx-auto max-w-5xl">
        <SectionHeading number="02." tone="lavender" reversed>Things I love</SectionHeading>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {skills.map(([icon, name, alternate]) => (
            <div key={name} className={`skill-node ${alternate ? "alt-glow" : ""}`}>
              <span className="skill-icon">{icon}</span><span>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="relative z-10 px-4 py-24 md:py-32">
      <div className="reveal mx-auto max-w-5xl">
        <SectionHeading number="03." tone="lavender" reversed>My story so far</SectionHeading>
        <div className="story-card relative">
          <div className="grid gap-5">
            <article className="story-entry">
              <p className="font-display text-sm uppercase tracking-[0.2em] text-lavender">My journey</p>
              <p className="mt-3 text-base leading-8 text-ink/65">
                Each role has helped me grow into a more organised, confident, and people-focused
                professional. I have learned to stay dependable in busy environments, communicate with
                care, and make sure the details behind everyday work are handled properly.
              </p>
            </article>
            <article className="story-entry">
              <p className="font-display text-sm uppercase tracking-[0.2em] text-rose">Apr 2021 — Sep 2023</p>
              <h3 className="mt-3 font-display text-2xl text-ink">Staff at Watson</h3>
              <p className="mt-3 max-w-2xl text-base leading-8 text-ink/65">
                My first role gave me a strong foundation in customer service, teamwork, and daily
                operations. Working in a busy retail environment taught me to stay attentive, helpful,
                and calm while supporting customers and keeping responsibilities organised.
              </p>
            </article>
            <article className="story-entry">
              <p className="font-display text-sm uppercase tracking-[0.2em] text-rose">Sep 2023 — Sep 2026</p>
              <h3 className="mt-3 font-display text-2xl text-ink">Admin Staff at Happy Fish Swim School</h3>
              <div className="mt-3 flex flex-col gap-6 md:flex-row md:items-center">
                <p className="max-w-2xl flex-1 text-base leading-8 text-ink/65">
                  This experience helped me develop my administrative strengths in a welcoming,
                  people-centred environment. I supported communication and everyday coordination while
                  learning how clear information, careful organisation, and a friendly approach can make
                  things easier for families, students, and the wider team.
                </p>
                <HappyFishGallery />
              </div>
            </article>
            <article className="story-entry">
              <p className="font-display text-sm uppercase tracking-[0.2em] text-rose">October 2026</p>
              <h3 className="mt-3 font-display text-2xl text-ink">Admin Executive at Hanamaru Trading Sdn Bhd</h3>
              <p className="mt-3 max-w-2xl text-base leading-8 text-ink/65">
                In my current role, I continue to build on my experience by taking a more structured
                approach to office administration and business support. I enjoy bringing order to busy
                days, keeping information clear, and helping work move forward with consistency and care.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative z-10 px-4 py-24 md:py-32">
      <div className="reveal mx-auto max-w-6xl">
        <SectionHeading number="04.">Interesting about me</SectionHeading>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.title} className={`project-card ${project.tone === "lavender" ? "project-card-lavender" : ""}`}>
              <div className="project-image">
                <Image src={project.image} alt={project.imageAlt} width={800} height={520} unoptimized />
              </div>
              <div className="flex flex-1 flex-col">
                <span className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-rose">{project.label}</span>
                <h3 className="font-display text-3xl text-ink">{project.title}</h3>
                <p className="mb-7 mt-4 flex-1 leading-7 text-ink/65">{project.description}</p>
                <a href="#projects" className="project-link">Get to know me <span>↗</span></a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
