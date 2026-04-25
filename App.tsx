import { useEffect, useMemo, useRef, useState } from "react";

const services = [
  {
    name: "Web development",
    line: "Fast launch pages, business sites, community portals, landing systems, and clean digital storefronts.",
    signal: "Front-end builds, responsive UI, maintenance",
  },
  {
    name: "Account removals",
    line: "Structured support for removing unwanted, duplicate, compromised, or outdated online accounts.",
    signal: "Case review, platform checks, evidence prep",
  },
  {
    name: "Account recoveries",
    line: "Guided recovery workflows for locked profiles, lost access, hacked accounts, and verification issues.",
    signal: "Recovery maps, appeal drafting, follow-up tracking",
  },
  {
    name: "Bot development",
    line: "Custom bots for communities, support queues, notifications, moderation, and business automation.",
    signal: "Discord, Telegram, WhatsApp-style flows",
  },
];

const process = [
  "Listen to the problem",
  "Map the safest route",
  "Build or recover",
  "Hand over with clarity",
];

function CinematicGrid() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_12%,rgba(255,42,64,0.28),transparent_34%),radial-gradient(circle_at_18%_72%,rgba(153,0,24,0.34),transparent_32%),linear-gradient(115deg,#070103_0%,#1a0208_42%,#3b020e_72%,#070103_100%)]" />
      <div className="scanline absolute inset-0 opacity-35" />
      <div className="absolute -left-[10vw] top-[8vh] h-[70vh] w-[70vh] rounded-full border border-red-500/20 blur-[1px]" />
      <div className="pulse-orb absolute right-[7vw] top-[14vh] h-[34rem] w-[34rem] rounded-full bg-red-700/20 blur-3xl" />
      <div className="drift absolute bottom-[-24vh] left-1/2 h-[55vh] w-[140vw] -translate-x-1/2 rotate-[-3deg] bg-[linear-gradient(90deg,transparent,rgba(255,32,56,0.26),transparent)] blur-2xl" />
      <svg className="absolute inset-x-0 bottom-0 h-[58vh] w-full opacity-70" viewBox="0 0 1440 620" fill="none" preserveAspectRatio="none">
        <path d="M0 572C189 496 291 493 474 538C644 579 745 608 919 549C1117 482 1237 478 1440 522V620H0V572Z" fill="url(#floor)" />
        <path d="M0 602H1440M86 563H1356M189 526H1262M303 489H1142M432 453H1014M570 417H872" stroke="#ff2a3d" strokeOpacity="0.22" />
        <path d="M719 395L206 620M719 395L433 620M719 395L624 620M719 395L816 620M719 395L1014 620M719 395L1252 620" stroke="#ff2a3d" strokeOpacity="0.18" />
        <path className="data-path" d="M182 266C306 186 397 208 530 250C677 296 784 298 938 190C1052 110 1197 93 1321 151" stroke="#ff4053" strokeWidth="2" strokeLinecap="round" />
        <path d="M149 314C283 241 397 262 541 310C691 360 811 356 963 245C1084 157 1207 146 1348 205" stroke="#ff4053" strokeOpacity="0.24" strokeLinecap="round" />
        <circle cx="182" cy="266" r="5" fill="#ff4053" />
        <circle cx="938" cy="190" r="5" fill="#ff4053" />
        <circle cx="1321" cy="151" r="5" fill="#ff4053" />
        <defs>
          <linearGradient id="floor" x1="720" x2="720" y1="395" y2="620" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2a0209" stopOpacity="0" />
            <stop offset="1" stopColor="#090104" stopOpacity="0.96" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function HeroConsole() {
  return (
    <div className="hero-console pointer-events-none absolute bottom-[10vh] right-[3vw] hidden w-[42vw] max-w-[650px] text-red-100/70 lg:block" aria-hidden="true">
      <div className="mb-5 h-px w-full bg-gradient-to-r from-transparent via-red-400/60 to-transparent" />
      <div className="grid grid-cols-[1.15fr_0.85fr] gap-5 font-mono text-[11px] uppercase tracking-[0.22em]">
        <div className="space-y-3">
          <p className="text-red-300">service stack online</p>
          <p className="text-red-100/90">web.deploy / recovery.flow / bot.logic</p>
          <p className="text-red-200/70">community channel linked</p>
        </div>
        <div className="relative min-h-36">
          <span className="absolute left-0 top-10 h-2 w-2 rounded-full bg-red-300 shadow-[0_0_22px_#ff4358]" />
          <span className="absolute left-1/3 top-2 h-2 w-2 rounded-full bg-red-500 shadow-[0_0_22px_#ff2238]" />
          <span className="absolute bottom-5 right-10 h-2 w-2 rounded-full bg-red-200 shadow-[0_0_22px_#ffb3bc]" />
          <span className="absolute left-1 top-11 h-px w-40 rotate-[-14deg] bg-red-400/45" />
          <span className="absolute left-[34%] top-3 h-px w-32 rotate-[37deg] bg-red-400/35" />
          <span className="absolute bottom-6 right-11 h-px w-44 rotate-[163deg] bg-red-400/30" />
        </div>
      </div>
    </div>
  );
}

function CursorAura() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    const glow = glowRef.current;

    if (!dot || !ring || !glow) {
      return;
    }

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let lastX = mouseX;
    let lastY = mouseY;
    let frame = 0;

    const setVisibility = (opacity: string) => {
      dot.style.opacity = opacity;
      ring.style.opacity = opacity;
      glow.style.opacity = opacity === "0" ? "0" : "0.75";
    };

    const move = (event: PointerEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      const speed = Math.hypot(mouseX - lastX, mouseY - lastY);
      const hue = 345 + Math.min(speed * 1.4, 55);
      const color = `hsl(${hue}, 100%, 64%)`;

      dot.style.background = color;
      ring.style.borderColor = color;
      glow.style.background = `radial-gradient(circle, hsla(${hue}, 100%, 58%, 0.38), transparent 64%)`;
      document.documentElement.style.setProperty("--cursor-hue", `${hue}`);

      lastX = mouseX;
      lastY = mouseY;
      setVisibility("1");
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.16;
      ringY += (mouseY - ringY) * 0.16;

      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      glow.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;

      frame = window.requestAnimationFrame(animate);
    };

    window.addEventListener("pointermove", move);
    document.addEventListener("pointerleave", () => setVisibility("0"));
    frame = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("pointermove", move);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="cursor-layer" aria-hidden="true">
      <div ref={glowRef} className="cursor-glow" />
      <div ref={ringRef} className="cursor-ring" />
      <div ref={dotRef} className="cursor-dot" />
    </div>
  );
}

export default function App() {
  const [activeService, setActiveService] = useState(0);
  const active = services[activeService];
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <main className="min-h-screen overflow-hidden bg-[#070103] text-red-50 selection:bg-red-500 selection:text-white">
      <CursorAura />
      <section className="relative flex min-h-screen items-center px-5 py-8 sm:px-8 lg:px-14">
        <CinematicGrid />
        <HeroConsole />

        <nav className="absolute left-5 right-5 top-5 z-20 flex items-center justify-between text-sm sm:left-8 sm:right-8 lg:left-14 lg:right-14">
          <a className="font-black uppercase tracking-[0.28em] text-red-50" href="#top" aria-label="Morphers home">
            Morphers
          </a>
          <div className="hidden items-center gap-7 sm:flex">
            <a className="group relative text-red-100/80 transition hover:text-white" href="#community">
              Join community
              <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-red-300 transition group-hover:scale-x-100" />
            </a>
            <a className="group relative text-red-100/80 transition hover:text-white" href="#contact">
              Contact
              <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-red-300 transition group-hover:scale-x-100" />
            </a>
          </div>
        </nav>

        <div id="top" className="relative z-10 mx-auto w-full max-w-7xl pt-20">
          <div className="max-w-5xl">
            <p className="reveal mb-5 font-mono text-xs uppercase tracking-[0.42em] text-red-200/80">Community-built digital services</p>
            <h1 className="brand-title reveal max-w-5xl text-[clamp(4.8rem,15vw,13.5rem)] font-black uppercase leading-[0.72] tracking-[-0.09em] text-red-50">
              Morphers
            </h1>
            <h2 className="reveal mt-6 max-w-4xl text-[clamp(2rem,6vw,5.8rem)] font-black leading-[0.86] tracking-[-0.07em] text-red-200">
              Webs, recoveries, removals and bots with a dark-future edge.
            </h2>
            <p className="reveal mt-7 max-w-2xl text-lg leading-8 text-red-100/78 sm:text-xl">
              A no-fluff community business for people who need digital work handled: sharp websites, account support, automation, and practical technical help without expensive extras.
            </p>
            <div className="reveal mt-10 flex flex-col gap-4 sm:flex-row">
              <a className="rounded-full border border-red-200/45 bg-red-950/10 px-7 py-4 text-center text-sm font-black uppercase tracking-[0.24em] text-red-50 backdrop-blur-md transition hover:-translate-y-1 hover:border-red-100 hover:bg-red-500/10 hover:shadow-[0_0_34px_rgba(255,70,85,0.34)]" href="#contact">
                Contact us
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="relative px-5 py-24 sm:px-8 lg:px-14">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-500/45 to-transparent" />
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.38em] text-red-300/80">Skill matrix</p>
            <h2 className="mt-4 max-w-2xl text-[clamp(2.6rem,7vw,6.5rem)] font-black uppercase leading-[0.82] tracking-[-0.08em] text-red-50">
              Pick the mission.
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-8 text-red-100/70">
              Tap a service to see what it covers. The site is built so you can replace the name, contact link, and wording later without needing to understand the whole codebase.
            </p>
          </div>

          <div className="service-panel rounded-[2rem] border border-red-300/15 bg-red-950/20 p-4 backdrop-blur-md sm:p-6">
            <div className="grid gap-3 sm:grid-cols-2">
              {services.map((service, index) => (
                <button
                  key={service.name}
                  className={`group min-h-32 rounded-[1.4rem] border p-5 text-left transition duration-300 ${
                    activeService === index
                      ? "border-red-200/55 bg-red-50 text-[#190106] shadow-[0_0_40px_rgba(255,36,56,0.22)]"
                      : "border-red-300/12 bg-black/12 text-red-50 hover:-translate-y-1 hover:border-red-200/45 hover:bg-red-900/25"
                  }`}
                  onClick={() => setActiveService(index)}
                  type="button"
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.32em] opacity-65">0{index + 1}</span>
                  <span className="mt-4 block text-2xl font-black tracking-[-0.04em]">{service.name}</span>
                </button>
              ))}
            </div>
            <div className="mt-7 border-t border-red-200/15 pt-7">
              <p className="font-mono text-xs uppercase tracking-[0.32em] text-red-300/80">Active brief</p>
              <h3 className="mt-3 text-4xl font-black tracking-[-0.06em] text-red-50 sm:text-6xl">{active.name}</h3>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-red-100/76">{active.line}</p>
              <p className="mt-6 font-mono text-sm uppercase tracking-[0.24em] text-red-200/80">{active.signal}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-5 py-24 sm:px-8 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-xs uppercase tracking-[0.38em] text-red-300/80">How it works</p>
          <h2 className="mt-4 max-w-4xl text-[clamp(2.6rem,8vw,7rem)] font-black uppercase leading-[0.82] tracking-[-0.08em] text-red-50">
            Simple process. Heavy presence.
          </h2>
          <div className="mt-14 grid gap-7 md:grid-cols-4">
            {process.map((step, index) => (
              <div key={step} className="process-line relative border-t border-red-300/22 pt-6">
                <span className="font-mono text-xs uppercase tracking-[0.34em] text-red-300/70">phase 0{index + 1}</span>
                <p className="mt-4 text-3xl font-black leading-none tracking-[-0.05em] text-red-50">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="community" className="relative px-5 py-24 sm:px-8 lg:px-14">
        <div className="mx-auto grid max-w-7xl gap-10 border-y border-red-300/20 py-16 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.38em] text-red-300/80">Join the signal</p>
            <h2 className="mt-4 max-w-4xl text-[clamp(3rem,9vw,8rem)] font-black uppercase leading-[0.8] tracking-[-0.09em] text-red-50">
              Enter the Morphers network.
            </h2>
          </div>
          <div>
            <p className="text-lg leading-8 text-red-100/72">
              Join the Telegram community for updates, requests, service drops, and direct connection with the team.
            </p>
            <a
              className="mt-8 inline-flex rounded-full bg-red-50 px-7 py-4 text-sm font-black uppercase tracking-[0.24em] text-[#190106] transition hover:-translate-y-1 hover:bg-white hover:shadow-[0_0_34px_rgba(255,70,85,0.48)]"
              href="https://t.me/team_morphers"
              target="_blank"
              rel="noreferrer"
            >
              Open Telegram
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="relative px-5 py-24 sm:px-8 lg:px-14">
        <div className="mx-auto max-w-7xl py-16">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.38em] text-red-300/80">Direct contact</p>
              <h2 className="mt-4 max-w-4xl text-[clamp(3rem,9vw,8rem)] font-black uppercase leading-[0.8] tracking-[-0.09em] text-red-50">
                Bring the problem. We shape the fix.
              </h2>
            </div>
            <div className="lg:pb-3">
              <p className="text-lg leading-8 text-red-100/72">
                Send your service request by email, or move faster through the Telegram community channel.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  className="inline-flex rounded-full bg-red-50 px-7 py-4 text-center text-sm font-black uppercase tracking-[0.24em] text-[#190106] transition hover:-translate-y-1 hover:bg-white hover:shadow-[0_0_34px_rgba(255,70,85,0.48)]"
                  href="mailto:p81226449@gmail.com?subject=Service%20request%20for%20Morphers"
                >
                  Email Morphers
                </a>
                <a
                  className="inline-flex rounded-full border border-red-200/35 px-7 py-4 text-center text-sm font-black uppercase tracking-[0.24em] text-red-50 transition hover:-translate-y-1 hover:border-red-100 hover:bg-red-50/10"
                  href="https://t.me/team_morphers"
                  target="_blank"
                  rel="noreferrer"
                >
                  Telegram
                </a>
              </div>
              <p className="mt-6 break-all font-mono text-sm uppercase tracking-[0.2em] text-red-200/55">p81226449@gmail.com</p>
            </div>
          </div>
        </div>
        <footer className="mx-auto flex max-w-7xl flex-col gap-3 py-8 font-mono text-xs uppercase tracking-[0.26em] text-red-200/45 sm:flex-row sm:items-center sm:justify-between">
          <span>Morphers / Community tech services</span>
          <span>{year}</span>
        </footer>
      </section>
    </main>
  );
}