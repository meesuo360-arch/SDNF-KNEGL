import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center pt-24 pb-16 px-4 overflow-hidden">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-4xl leading-tight">
        Let&apos;s craft <span className="text-rose-600 font-serif italic mx-2">لَا تُنْسَى*</span> user experiences.
      </h1>

      <div className="flex items-center gap-4 mt-8">
        <Link 
          href="#projects" 
          className="bg-rose-600 hover:bg-rose-700 text-white font-medium px-6 py-3 rounded-full transition shadow-lg shadow-rose-600/20"
        >
          My Projects
        </Link>
        <a 
          href="/resume.pdf" 
          className="bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-medium px-6 py-3 rounded-full transition border border-zinc-700"
        >
          Resume
        </a>
      </div>

      <p className="text-xs text-zinc-500 mt-4">
        لَا تُنْسَى* unforgettable in English
      </p>

      <div className="w-full overflow-hidden mt-20 border-y border-zinc-800/80 py-4 bg-zinc-950/50">
        <div className="animate-marquee whitespace-nowrap text-zinc-600 font-mono text-lg tracking-widest">
          <span>coding-designing-web-api &nbsp;&bull;&nbsp; coding-designing-web-api &nbsp;&bull;&nbsp; coding-designing-web-api &nbsp;&bull;&nbsp;</span>
          <span>coding-designing-web-api &nbsp;&bull;&nbsp; coding-designing-web-api &nbsp;&bull;&nbsp; coding-designing-web-api &nbsp;&bull;&nbsp;</span>
        </div>
      </div>
    </section>
  );
}