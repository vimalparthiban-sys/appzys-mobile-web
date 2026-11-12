import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronDown } from 'lucide-react'

const FAQS = [
  {
    q: 'Does APPZYS specialize exclusively in Flutter mobile app development?',
    a: 'Yes. APPZYS focuses on cross-platform Android and iOS mobile development using Flutter and Dart with Provider state management, Firebase services, Cloud Functions, and REST API integrations—giving you one clean shared codebase.',
  },
  {
    q: 'What are the 4 core services customers can purchase from APPZYS?',
    a: 'You can engage us for: (01) Mobile App Development (new Flutter Android & iOS apps/MVPs), (02) AI Integration & Applications, (03) App Enhancement & Maintenance for existing Flutter apps, and (04) Dedicated Flutter Development (team extension or white-label agency delivery).',
  },
  {
    q: 'How does APPZYS handle AI integration and API-key security?',
    a: 'We integrate proven third-party AI APIs for transcription, PDF document chat, OCR, and learning workflows. Sensitive API keys, billing safeguards, rate limits, and prompt validation are mediated server-side via Firebase Cloud Functions—never exposed in the mobile app.',
  },
  {
    q: 'We already have a Flutter app with bugs and pending features. How do we start?',
    a: 'For Service 03 (App Enhancement & Maintenance), we never guess a retainer blindly. We start with a structured Codebase Assessment & Technical Audit, build a prioritized improvement backlog with effort estimates, and execute via fixed enhancement or monthly retainer.',
  },
  {
    q: 'Can software or web agencies hire APPZYS as a white-label Flutter partner?',
    a: 'Yes. Under Service 04 (Dedicated Flutter Development), our Flutter engineers work directly alongside your React, Node.js, and QA team—or build white-label Flutter applications under your agency brand with strict confidentiality and NDA protection.',
  },
  {
    q: 'Do we get 100% ownership of our Flutter source code and IP?',
    a: 'Yes, 100%. We commit directly to your Git repository, sign NDAs upfront, and transfer full source code and intellectual property ownership upon delivery.',
  },
]

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
            Frequently Asked Questions
          </span>
          <h2 className="mt-2 font-display text-2xl font-extrabold text-black sm:text-3xl">
            Clear Answers Before You Start
          </h2>
        </div>

        <div className="mt-8 space-y-3">
          {FAQS.map((item, idx) => {
            const isOpen = openIndex === idx
            return (
              <div
                key={item.q}
                className={`group overflow-hidden rounded-2xl border transition ${
                  isOpen ? 'border-blue-400 bg-white shadow-xs' : 'border-slate-200 bg-white hover:border-blue-300'
                }`}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
                >
                  <span className="font-display text-sm font-bold text-black transition-colors group-hover:text-blue-600 sm:text-base">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-black transition-transform ${
                      isOpen ? 'rotate-180 text-blue-600' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="border-t border-slate-100 px-6 pb-5 pt-3 text-sm leading-relaxed text-black">
                    {item.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700"
          >
            Have a specific architecture question? Book a Free 48-Hr Audit
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
