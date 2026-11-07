import Link from 'next/link';
import { Github, Linkedin, Globe, Moon } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto border-b border-zinc-800/50">
      <Link href="/" className="flex items-center gap-2 font-bold text-lg tracking-wider">
        <span className="bg-rose-600 text-white px-2 py-0.5 rounded text-sm">A</span>
        <span>Ahmed</span>
      </Link>

      <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-400">
        <Link href="#about" className="hover:text-white transition">About Me</Link>
        <Link href="#projects" className="hover:text-white transition">My Projects</Link>
        <Link href="#skills" className="hover:text-white transition">Skills</Link>
      </nav>

      <div className="flex items-center gap-4 text-zinc-400">
        <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition">
          <Github size={20} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition">
          <Linkedin size={20} />
        </a>
        <button aria-label="Toggle Theme" className="hover:text-white transition">
          <Moon size={20} />
        </button>
        <button aria-label="Select Locale" className="hover:text-white transition">
          <Globe size={20} />
        </button>
      </div>
    </header>
  );
}