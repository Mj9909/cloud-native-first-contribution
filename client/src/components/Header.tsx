import { Menu } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'

import { JoinChapterDialog } from '@/components/JoinChapterDialog'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navLinkClass =
  'rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-cncf-navy'

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur-md"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#" className="flex items-center gap-2">
          <span className="font-display text-lg font-bold tracking-tight text-cncf-navy sm:text-xl">
            CNCF <span className="text-cncf-blue">Lucknow</span>
          </span>
        </a>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Primary"
        >
          <a className={navLinkClass} href="#mission">
            Mission
          </a>
          <a className={navLinkClass} href="#pillars">
            Pillars
          </a>
          <a
            className={navLinkClass}
            href="https://www.cncf.io/projects/"
            target="_blank"
            rel="noreferrer"
          >
            CNCF Projects
          </a>
          <a
            className={navLinkClass}
            href="https://landscape.cncf.io/"
            target="_blank"
            rel="noreferrer"
          >
            Landscape
          </a>
          <a className={navLinkClass} href="#faq">
            FAQ
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <JoinChapterDialog>
            <Button
              variant="default"
              size="sm"
              className="hidden sm:inline-flex"
            >
              Join the chapter
            </Button>
          </JoinChapterDialog>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-label="Open menu"
            onClick={() => setMobileOpen((o) => !o)}
          >
            <Menu className="size-5" />
          </Button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="border-t border-slate-200 bg-white px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            <a
              className={cn(navLinkClass, 'block')}
              href="#mission"
              onClick={() => setMobileOpen(false)}
            >
              Mission
            </a>
            <a
              className={cn(navLinkClass, 'block')}
              href="#pillars"
              onClick={() => setMobileOpen(false)}
            >
              Pillars
            </a>
            <a
              className={cn(navLinkClass, 'block')}
              href="https://www.cncf.io/projects/"
              target="_blank"
              rel="noreferrer"
            >
              CNCF Projects
            </a>
            <a
              className={cn(navLinkClass, 'block')}
              href="#faq"
              onClick={() => setMobileOpen(false)}
            >
              FAQ
            </a>
            <JoinChapterDialog>
              <Button
                variant="secondary"
                className="mt-2 w-full text-cncf-navy"
              >
                Join the chapter
              </Button>
            </JoinChapterDialog>
          </nav>
        </div>
      ) : null}
    </motion.header>
  )
}
