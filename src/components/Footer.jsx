import React from 'react'

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-black/5 bg-white/70 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600">
        <p>
          © {new Date().getFullYear()} Vibe Starter. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-slate-900 transition">Twitter</a>
          <a href="#" className="hover:text-slate-900 transition">GitHub</a>
          <a href="#" className="hover:text-slate-900 transition">Contact</a>
        </div>
      </div>
    </footer>
  )
}
