import CyberEffects from "@/components/cyber-effects";
import BackgroundMusic from "@/components/background-music";
import PortfolioInteractions from "@/components/portfolio-interactions";
import { About, Experience, Hero, Projects, Skills } from "@/components/portfolio-sections";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <CyberEffects />
      <BackgroundMusic />
      <PortfolioInteractions />
      <nav className="glass-card fixed z-50 w-full border-x-0 border-t-0 border-b-rose/15">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 sm:px-8">
          <a href="#hero" className="font-display text-2xl italic text-ink">fatin<span className="text-rose">.</span></a>
          <div className="hidden items-center gap-7 text-sm text-ink/65 md:flex">
            {[["#about", "About"], ["#skills", "What I do"], ["#experience", "My story"], ["#projects", "Interesting about me"]].map(([href, label]) => (
              <a key={href} href={href} className="transition-colors hover:text-rose">{label}</a>
            ))}
          </div>
          <a href="mailto:hello@fatin.dev" className="rounded-full border border-rose/30 px-4 py-2 text-xs font-semibold text-rose transition-colors hover:bg-rose hover:text-white">Let&apos;s talk ✦</a>
        </div>
      </nav>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <footer className="relative z-10 border-t border-rose/10 bg-white/30 px-4 py-10 text-center text-sm text-ink/50">
        <p className="font-hand text-2xl text-rose">made with care &amp; a little sparkle ✦</p>
        <p className="mt-2">© 2025 Fatin. Thanks for stopping by.</p>
      </footer>
    </main>
  );
}
