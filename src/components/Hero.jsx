import React from 'react'
import { Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(99,102,241,0.25)_0%,rgba(255,255,255,0)_60%)]" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-16 sm:pt-24 pb-12 sm:pb-20 relative">
        <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs text-slate-600 backdrop-blur">
          <Sparkles size={14} className="text-indigo-500" />
          Welcome
        </div>
        <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight text-slate-900">
          Hiiii — let’s build something delightful
        </h1>
        <p className="mt-4 max-w-2xl text-slate-600 text-lg">
          A clean, aesthetic starter powered by React and Tailwind. Crafted components, smooth gradients, and a focus on great vibes.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#features" className="rounded-lg bg-slate-900 text-white px-5 py-3 text-sm font-medium shadow hover:shadow-md transition">
            Explore features
          </a>
          <a href="#about" className="rounded-lg bg-white text-slate-900 px-5 py-3 text-sm font-medium border border-black/10 hover:bg-slate-50 transition">
            Learn more
          </a>
        </div>
      </div>
    </section>
  )
}
