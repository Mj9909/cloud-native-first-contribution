import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import type { ReactNode } from 'react'

import { Button } from '@/components/ui/button'

type JoinChapterDialogProps = {
  children: ReactNode
}

export function JoinChapterDialog({ children }: JoinChapterDialogProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-cncf-navy/80 backdrop-blur-sm" />
        <Dialog.Content className="fixed top-1/2 left-1/2 z-50 w-[min(92vw,28rem)] -translate-x-1/2 -translate-y-1/2 rounded-xl border border-slate-200 bg-white p-6 shadow-2xl">
          <div className="flex items-start justify-between gap-4">
            <Dialog.Title className="font-display text-xl font-bold text-cncf-navy">
              Join CNCF Lucknow
            </Dialog.Title>
            <Dialog.Close
              className="rounded-md p-1 text-slate-500 hover:bg-slate-100 hover:text-slate-800"
              aria-label="Close"
            >
              <X className="size-5" />
            </Dialog.Close>
          </div>
          <Dialog.Description className="mt-3 text-sm leading-relaxed text-slate-600">
            Connect with practitioners, students, and maintainers across Uttar
            Pradesh. Follow the chapter on social channels, attend meetups, and
            open your first cloud-native pull request—everyone is welcome.
          </Dialog.Description>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600">
            <li>
              Introduce yourself in community chat when the chapter link is
              announced.
            </li>
            <li>
              Star{' '}
              <a
                className="font-medium text-cncf-blue underline"
                href="https://github.com/Mj9909/cloud-native-first-contribution"
                target="_blank"
                rel="noreferrer"
              >
                cloud-native-first-contribution
              </a>{' '}
              and pick a good-first-issue.
            </li>
            <li>
              Read the{' '}
              <a
                className="font-medium text-cncf-blue underline"
                href="https://www.cncf.io/code-of-conduct/"
                target="_blank"
                rel="noreferrer"
              >
                CNCF Code of Conduct
              </a>
              .
            </li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <Dialog.Close asChild>
              <Button variant="secondary" className="text-cncf-navy">
                Close
              </Button>
            </Dialog.Close>
            <Button variant="default" asChild>
              <a
                href="https://github.com/cncf"
                target="_blank"
                rel="noreferrer"
              >
                Explore CNCF on GitHub
              </a>
            </Button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
