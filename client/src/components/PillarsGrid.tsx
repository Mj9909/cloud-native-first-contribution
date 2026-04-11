import { Boxes, HeartHandshake, Rocket, ShieldCheck } from 'lucide-react'
import { motion } from 'framer-motion'

const pillars = [
  {
    title: 'Landscape literacy',
    body: 'Map real workloads to the CNCF landscape—know when to reach for Prometheus, Envoy, or Backstage.',
    icon: Boxes,
  },
  {
    title: 'First contribution',
    body: 'Use this repo’s Express + Docker + Kubernetes path to ship a small change with confidence.',
    icon: Rocket,
  },
  {
    title: 'Inclusive meetups',
    body: 'Beginner-friendly sessions in Lucknow: demos, lighting talks, and contributor hours.',
    icon: HeartHandshake,
  },
  {
    title: 'CNCF values',
    body: 'We follow the CNCF Code of Conduct—respect, safety, and welcome for every participant.',
    icon: ShieldCheck,
  },
]

export function PillarsGrid() {
  return (
    <section id="pillars" className="scroll-mt-20 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="font-display text-3xl font-bold tracking-tight text-cncf-navy sm:text-4xl">
          Chapter pillars
        </h2>
        <p className="mt-3 max-w-2xl text-slate-600">
          A CNCF-style landing for our Lucknow community—focused on learning,
          shipping, and growing together.
        </p>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {pillars.map((p, i) => (
            <motion.li
              key={p.title}
              className="rounded-2xl border border-slate-200 bg-slate-50/80 p-6 shadow-sm transition-shadow hover:shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
            >
              <p.icon
                className="size-10 text-cncf-blue"
                strokeWidth={1.5}
                aria-hidden
              />
              <h3 className="mt-4 font-display text-lg font-bold text-cncf-navy">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {p.body}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
