import React from 'react'
import { Rocket, Shield, Star } from 'lucide-react'

const features = [
  {
    title: 'Fast by default',
    description:
      'Optimized build, modern tooling, and snappy interactions for a smooth developer and user experience.',
    icon: Rocket,
    color: 'from-indigo-500 to-sky-500',
  },
  {
    title: 'Polished UI',
    description:
      'Tasteful typography, soft shadows, and elegant gradients so your app feels premium from day one.',
    icon: Star,
    color: 'from-fuchsia-500 to-pink-500',
  },
  {
    title: 'Secure foundations',
    description:
      'Built with best practices and sensible defaults so you can ship confidently and securely.',
    icon: Shield,
    color: 'from-emerald-500 to-lime-500',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Features you’ll love</h2>
          <p className="mt-3 text-slate-600">
            Simple building blocks that help you launch quickly without sacrificing quality.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <article
              key={f.title}
              className="group rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className={`h-11 w-11 rounded-xl bg-gradient-to-br ${f.color} text-white grid place-items-center shadow`}> 
                <f.icon size={18} />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{f.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
