import { motion } from 'framer-motion'

const stats = [
  { label: 'CNCF projects', value: '200+', hint: 'Graduated to Sandbox' },
  { label: 'Global contributors', value: '300K+', hint: '#TeamCloudNative' },
  { label: 'First PR focus', value: 'You', hint: 'This repo is for you' },
]

const item = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.15 * i,
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
}

export function StatsRow() {
  return (
    <section className="border-b border-slate-200 bg-white py-12 sm:py-14">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:grid-cols-3 sm:px-6">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            className="text-center sm:text-left"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-40px' }}
            variants={item}
            custom={i}
          >
            <p className="font-display text-3xl font-bold text-cncf-navy sm:text-4xl">
              {s.value}
            </p>
            <p className="mt-1 text-sm font-semibold text-slate-800">
              {s.label}
            </p>
            <p className="text-xs text-slate-500">{s.hint}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
