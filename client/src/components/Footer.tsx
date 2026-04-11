export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-cncf-navy py-12 text-slate-300">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:flex-row sm:items-start sm:justify-between sm:px-6">
        <div>
          <p className="font-display text-lg font-bold text-white">
            CNCF Lucknow
          </p>
          <p className="mt-2 max-w-md text-sm leading-relaxed">
            Chapter-themed landing for{' '}
            <span className="text-cncf-teal">cloud-native-first-contribution</span>
            —learn Docker, Kubernetes, and open source the CNCF way.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <a
            className="hover:text-white"
            href="https://www.cncf.io/"
            target="_blank"
            rel="noreferrer"
          >
            CNCF
          </a>
          <a
            className="hover:text-white"
            href="https://landscape.cncf.io/"
            target="_blank"
            rel="noreferrer"
          >
            Cloud Native Landscape
          </a>
          <a
            className="hover:text-white"
            href="https://www.cncf.io/code-of-conduct/"
            target="_blank"
            rel="noreferrer"
          >
            Code of Conduct
          </a>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-6xl px-4 text-xs text-slate-500 sm:px-6">
        Hero and banner photos are from{' '}
        <a
          className="underline hover:text-slate-300"
          href="https://unsplash.com"
          target="_blank"
          rel="noreferrer"
        >
          Unsplash
        </a>{' '}
        (Lucknow-inspired cityscape and heritage imagery). CNCF® and related
        marks are trademarks of their respective owners.
      </p>
    </footer>
  )
}
