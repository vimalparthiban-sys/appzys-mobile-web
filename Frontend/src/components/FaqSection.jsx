import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const FAQS = [
  {
    q: 'How much does it cost to build a custom mobile app with Appzys?',
    a: 'Most focused MVP mobile apps start around $4,500–$8,500 depending on whether you choose Flutter/React Native or dual native apps. Use our interactive Cost Estimator above for an instant breakdown tailored to your features.',
  },
  {
    q: 'Why choose Appzys instead of a large generic agency?',
    a: 'With large agencies, senior architects pitch you and junior developers build your app. At Appzys, the veteran engineers who built and scaled our own ~1M+ install mobile apps directly architect and code your product—with faster communication and zero agency bloat.',
  },
  {
    q: 'Do we get 100% ownership of our app source code and intellectual property?',
    a: 'Yes, 100%. We sign an NDA before reviewing your idea, commit directly into your GitHub/GitLab repository during sprints, and transfer complete IP ownership.',
  },
  {
    q: 'Can Appzys help with Google Play & Apple App Store approval and ASO?',
    a: 'Yes. Having published and maintained our own live Android and iOS apps, we handle store metadata, screenshots, privacy compliance, and review troubleshooting end-to-end.',
  },
]

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
            Frequently Asked Questions
          </span>
          <h2 className="mt-2 font-display text-2xl font-extrabold text-[#0B132B] sm:text-3xl">
            Clear Answers Before You Start
          </h2>
        </div>

        <div className="mt-8 space-y-3">
          {FAQS.map((item, idx) => {
            const isOpen = openIndex === idx
            return (
              <div
                key={item.q}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
                >
                  <span className="font-display text-sm font-bold text-[#0B132B] sm:text-base">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-slate-500 transition-transform ${
                      isOpen ? 'rotate-180 text-indigo-600' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="border-t border-slate-100 px-6 pb-5 pt-3 text-sm leading-relaxed text-slate-600">
                    {item.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
