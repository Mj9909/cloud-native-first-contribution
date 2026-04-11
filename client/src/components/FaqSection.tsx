import * as Accordion from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'What is CNCF Lucknow?',
    a: 'A local community aligned with the Cloud Native Computing Foundation—sharing CNCF projects, running events in Lucknow, and helping newcomers contribute to open source.',
  },
  {
    q: 'How does this website relate to CNCF?',
    a: 'The design echoes the CNCF mission and links to official resources like cncf.io and the landscape. It is a chapter showcase and demo app for cloud-native-first-contribution, not an official CNCF property unless registered as such.',
  },
  {
    q: 'How do I make my first contribution?',
    a: 'Clone cloud-native-first-contribution, run it locally with Node or Docker, pick an issue (or improve this UI), and open a pull request. CONTRIBUTING.md in the repo walks through the workflow.',
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="scroll-mt-20 bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="font-display text-3xl font-bold tracking-tight text-cncf-navy sm:text-4xl">
          Frequently asked questions
        </h2>
        <Accordion.Root
          type="single"
          collapsible
          className="mt-8 space-y-3"
        >
          {faqs.map((item, i) => (
            <Accordion.Item
              key={item.q}
              value={`item-${i}`}
              className="overflow-hidden rounded-xl border border-slate-200 bg-white px-4 data-[state=open]:shadow-md"
            >
              <Accordion.Header>
                <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 py-4 text-left font-semibold text-cncf-navy hover:text-cncf-blue">
                  {item.q}
                  <ChevronDown
                    className="size-5 shrink-0 text-cncf-blue transition-transform duration-200 group-data-[state=open]:rotate-180"
                    aria-hidden
                  />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="overflow-hidden">
                <div className="pb-4 text-sm leading-relaxed text-slate-600">
                  {item.a}
                </div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  )
}
