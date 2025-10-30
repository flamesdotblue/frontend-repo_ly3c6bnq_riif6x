import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <section id="about" className="py-16 sm:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Designed for great vibes</h2>
            <p className="mt-3 text-slate-600">
              This starter gives you a beautiful canvas to begin with. Edit content, swap colors, and make it yours — the structure is ready so you can focus on what matters.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
