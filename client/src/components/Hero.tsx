import { motion } from 'framer-motion'

import { JoinChapterDialog } from '@/components/JoinChapterDialog'
import { Button } from '@/components/ui/button'

/** Splash imagery: Lucknow heritage & riverfront (Unsplash, free to use). */
const HERO_IMAGE =
  'https://images.unsplash.com/photo-1595658658481-bbf4b25e6e6d?auto=format&fit=crop&w=2400&q=85'

const lineVariants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.12 + i * 0.1,
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-cncf-navy text-white">
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Historic architecture and skyline evocative of Lucknow"
          className="h-full w-full object-cover opacity-40"
        />
        <div
          className="absolute inset-0 bg-gradient-to-br from-cncf-navy via-cncf-navy/95 to-cncf-blue/80"
          aria-hidden
        />
      </div>

      <div className="relative mx-auto flex min-h-[min(88vh,52rem)] max-w-6xl flex-col justify-center px-4 py-20 sm:px-6 sm:py-24">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-cncf-teal sm:text-sm">
          Cloud Native Computing Foundation · Community chapter
        </p>

        <div className="font-display">
          <motion.h1
            className="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
            initial="hidden"
            animate="show"
          >
            <motion.span
              className="block text-white"
              variants={lineVariants}
              custom={0}
            >
              Make cloud native
            </motion.span>
            <motion.span
              className="mt-1 block bg-gradient-to-r from-white via-cncf-teal to-lucknow-gold bg-clip-text text-transparent sm:mt-2"
              variants={lineVariants}
              custom={1}
            >
              ubiquitous in Lucknow
            </motion.span>
          </motion.h1>
        </div>

        <motion.p
          className="mt-6 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.5 }}
        >
          We are the Lucknow chapter of the global CNCF community—hosting
          meetups, mentoring first-time contributors, and growing the cloud
          native ecosystem across the city of nawabs and Kubernetes.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap items-center gap-4"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.45 }}
        >
          <JoinChapterDialog>
            <Button variant="secondary" size="lg">
              Start contributing
            </Button>
          </JoinChapterDialog>
          <Button variant="outline" size="lg" asChild>
            <a
              href="https://www.cncf.io/"
              target="_blank"
              rel="noreferrer"
            >
              About CNCF
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
