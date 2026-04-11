import { motion } from 'framer-motion'

const SPLASH =
  'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=2400&q=85'

export function LucknowSplash() {
  return (
    <section className="relative py-0">
      <div className="relative h-[min(70vh,36rem)] w-full overflow-hidden">
        <img
          src={SPLASH}
          alt="Cityscape and heritage detail representing Lucknow and the Gomti basin"
          className="h-full w-full object-cover"
        />
        <div
          className="absolute inset-0 bg-cncf-navy/55"
          aria-hidden
        />
        <motion.div
          className="absolute inset-0 flex items-center justify-center px-4"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <blockquote className="max-w-3xl text-center font-display text-2xl font-semibold leading-snug text-white sm:text-3xl">
            “From the Gomti riverfront to production clusters—Lucknow builds
            with the same open APIs and inclusive community that power the{' '}
            <span className="text-cncf-teal">CNCF landscape</span>.”
          </blockquote>
        </motion.div>
      </div>
    </section>
  )
}
