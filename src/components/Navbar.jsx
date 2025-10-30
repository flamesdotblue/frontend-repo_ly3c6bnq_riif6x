import React from 'react'
import { Rocket, Star, User } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 text-slate-900">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-amber-400 grid place-items-center text-white shadow-lg shadow-indigo-500/20">
            <Rocket size={18} />
          </div>
          <span className="font-semibold tracking-tight">Vibe Starter</span>
        </a>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-600">
          <a className="hover:text-slate-900 transition" href="#features">Features</a>
          <a className="hover:text-slate-900 transition" href="#about">About</a>
          <a className="hover:text-slate-900 transition" href="#contact">Contact</a>
        </nav>
        <button className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-4 py-2 text-sm shadow hover:shadow-md transition active:scale-[.98]">
          <Star size={16} />
          Get Started
        </button>
      </div>
    </header>
  )
}
