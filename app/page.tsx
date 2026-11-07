import Navbar from './components/Navbar';
import Hero from './components/Hero';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#09090b] text-zinc-100 selection:bg-rose-600 selection:text-white">
      <Navbar />
      <Hero />
      
      <section id="about" className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-bold mb-6 border-b border-zinc-800 pb-2">About Me</h2>
        <h3 className="text-xl font-semibold text-rose-500 mb-4">I&apos;m Ahmed Mohamed</h3>
        <p className="text-zinc-400 leading-relaxed mb-4">
          In 2018, I took the plunge into the world of custom Discord bots, immersing myself in the intricate realm of coding and web development. As time marched on, I found myself fortunate to craft software for a diverse array of clients.
        </p>
        <p className="text-zinc-400 leading-relaxed">
          Currently, my primary focus revolves around crafting products for clients at Mostaql. During my free time, I delve into exploring new concepts, trends, and emerging technologies.
        </p>
      </section>

      <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-bold mb-2">My Projects</h2>
        <p className="text-sm text-zinc-500 mb-10">I prioritize client privacy and only showcase projects with their explicit approval</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-5 hover:border-zinc-700 transition">
            <h3 className="text-lg font-bold text-white mb-2">BlitzMarks</h3>
            <p className="text-zinc-400 text-sm mb-4">Retrieve your high school exam results effortlessly with comprehensive performance details.</p>
            <div className="flex flex-wrap gap-2 text-xs text-rose-400 font-mono">
              <span className="bg-zinc-800 px-2 py-1 rounded">TypeScript</span>
              <span className="bg-zinc-800 px-2 py-1 rounded">Next.js</span>
              <span className="bg-zinc-800 px-2 py-1 rounded">React</span>
            </div>
          </div>

          <div className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-5 hover:border-zinc-700 transition">
            <h3 className="text-lg font-bold text-white mb-2">Ugurly</h3>
            <p className="text-zinc-400 text-sm mb-4">A URL shortener service shorten Your URL, Expand Your Possibilities.</p>
            <div className="flex flex-wrap gap-2 text-xs text-rose-400 font-mono">
              <span className="bg-zinc-800 px-2 py-1 rounded">TypeScript</span>
              <span className="bg-zinc-800 px-2 py-1 rounded">Node.js</span>
              <span className="bg-zinc-800 px-2 py-1 rounded">Next.js</span>
            </div>
          </div>

          <div className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-5 hover:border-zinc-700 transition">
            <h3 className="text-lg font-bold text-white mb-2">ShareMe</h3>
            <p className="text-zinc-400 text-sm mb-4">Discord bot for community content sharing and management.</p>
            <div className="flex flex-wrap gap-2 text-xs text-rose-400 font-mono">
              <span className="bg-zinc-800 px-2 py-1 rounded">TypeScript</span>
              <span className="bg-zinc-800 px-2 py-1 rounded">Next.js</span>
              <span className="bg-zinc-800 px-2 py-1 rounded">React</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="text-center py-10 border-t border-zinc-900 text-sm text-zinc-600">
        Copyright © 2026 Ahmed Mohamed. All rights reserved.
      </footer>
    </main>
  );
}