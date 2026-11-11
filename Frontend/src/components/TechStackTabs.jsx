import { useState } from 'react'

const STACK_CATEGORIES = [
  {
    id: 'mobile',
    label: 'Mobile Frameworks',
    summary: 'Native speed or single-codebase velocity tailored to your mobile product roadmap.',
    items: [
      { name: 'Flutter', role: 'Cross-Platform UI' },
      { name: 'React Native', role: 'JS/TS Mobile Apps' },
      { name: 'Kotlin + Jetpack Compose', role: 'Native Android' },
      { name: 'Swift + SwiftUI', role: 'Native iOS' },
    ],
  },
  {
    id: 'ai',
    label: 'AI & OCR Vision',
    summary: 'Battle-tested in Appzys live mobile apps with ~1M+ combined installs.',
    items: [
      { name: 'Google ML Kit & Vision', role: 'On-Device OCR' },
      { name: 'OpenAI / Gemini SDKs', role: 'In-App AI Features' },
      { name: 'Tesseract & Custom OCR', role: 'Multi-Lang Scanning' },
      { name: 'TensorFlow Lite', role: 'Edge Inference' },
    ],
  },
  {
    id: 'uiux',
    label: 'Mobile UI/UX & Motion',
    summary: 'Thumb-friendly layouts, design systems, and fluid animations built for high retention.',
    items: [
      { name: 'Figma Prototypes', role: 'Interactive Flows' },
      { name: 'Material 3 & Apple HIG', role: 'Platform Guidelines' },
      { name: 'Lottie & Rive', role: '60fps Micro-Animations' },
      { name: 'Adaptive Dark / Light UI', role: 'Accessibility First' },
    ],
  },
  {
    id: 'quality',
    label: 'App Store & Quality',
    summary: 'End-to-end release engineering, crash reduction, and store growth optimization.',
    items: [
      { name: 'TestFlight & Play Console', role: 'Weekly Beta Builds' },
      { name: 'Firebase Crashlytics', role: '99.8% Crash-Free QA' },
      { name: 'ASO & Store Optimization', role: 'Organic App Growth' },
      { name: 'SQLite / Room Cache', role: 'Fast Offline Experience' },
    ],
  },
]

export default function TechStackTabs() {
  const [activeTab, setActiveTab] = useState('mobile')
  const current = STACK_CATEGORIES.find((c) => c.id === activeTab) || STACK_CATEGORIES[0]

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
              Proven Mobile Stack
            </span>
            <h2 className="mt-2 font-display text-2xl font-extrabold text-[#0B132B] sm:text-3xl">
              Mobile Technologies We Ship With Daily
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {STACK_CATEGORIES.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-xl px-4 py-2 text-xs font-semibold transition sm:text-sm ${
                  tab.id === activeTab
                    ? 'bg-[#0B132B] text-white shadow-sm'
                    : 'border border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-[#0B132B]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
          <p className="text-sm text-slate-600">{current.summary}</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {current.items.map((tech) => (
              <div
                key={tech.name}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-indigo-300"
              >
                <div className="font-display text-base font-bold text-[#0B132B]">{tech.name}</div>
                <div className="mt-1 text-xs font-medium text-indigo-600">{tech.role}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
