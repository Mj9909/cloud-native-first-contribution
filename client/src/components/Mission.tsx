import * as Separator from '@radix-ui/react-separator'
import { motion } from 'framer-motion'

export function Mission() {
  return (
    <section
      id="mission"
      className="scroll-mt-20 bg-slate-50 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-3xl font-bold tracking-tight text-cncf-navy sm:text-4xl">
            Cloud native is for Lucknow
          </h2>
          <Separator.Root
            orientation="horizontal"
            decorative
            className="my-6 h-px w-24 bg-gradient-to-r from-cncf-blue to-cncf-teal"
          />
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <p className="text-base leading-relaxed text-slate-600">
              Inspired by the{' '}
              <a
                className="font-medium text-cncf-blue underline decoration-cncf-teal/60 underline-offset-2 hover:decoration-cncf-blue"
                href="https://www.cncf.io/"
                target="_blank"
                rel="noreferrer"
              >
                Cloud Native Computing Foundation
              </a>
              , we bring vendor-neutral education, open source culture, and
              hands-on practice to students and professionals in Lucknow—from
              Kubernetes and observability to security and platform engineering.
            </p>
            <p className="text-base leading-relaxed text-slate-600">
              The{' '}
              <strong className="text-slate-800">cloud-native-first-contribution</strong>{' '}
              project is a friendly on-ramp: containerize the app, read the
              health checks, open a pull request, and experience the same
              workflows used across CNCF graduated projects.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
