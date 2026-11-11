import { useState } from 'react'
import { ScanText, Languages, CheckCircle2, Sparkles, ArrowUpRight } from 'lucide-react'

const DEMO_MODES = [
  {
    id: 'ocr',
    label: 'OCR Screen Scan',
    badge: '700K+ Installs',
    inputTitle: 'Receipt / Screen Image',
    sampleInput: 'Invoice #APP-2026 • Total: $2,450 • Support: +91 98XXX XXXXX',
    extracted: [
      { type: 'Document ID', value: '#APP-2026' },
      { type: 'Amount', value: '$2,450.00' },
      { type: 'Contact', value: '+91 98XXX XXXXX' },
    ],
    latency: '140ms on-device',
  },
  {
    id: 'translate',
    label: '100+ Language AI',
    badge: 'Multi-Lang Engine',
    inputTitle: 'Captured Text Block',
    sampleInput: 'Scan documents, extract structured fields, and translate instantly.',
    extracted: [
      { type: 'Detected', value: 'English (99.4% confidence)' },
      { type: 'Spanish', value: 'Escanee documentos y extraiga datos al instante.' },
      { type: 'Tamil', value: 'ஆவணங்களை ஸ்கேன் செய்து உடனடியாக மொழிபெயர்க்கவும்.' },
    ],
    latency: '210ms instant sync',
  },
  {
    id: 'sprint',
    label: 'Client Build Tracker',
    badge: 'Weekly Transparency',
    inputTitle: 'Live Sprint Milestone #3',
    sampleInput: 'iOS TestFlight v1.4 & Android Play Internal Build Ready',
    extracted: [
      { type: 'Crash-Free Users', value: '99.8%' },
      { type: 'App Startup', value: '< 1.2s Cold Launch' },
      { type: 'IP Ownership', value: '100% Client Git Repo' },
    ],
    latency: 'Weekly Friday Demo',
  },
]

export default function InteractivePhoneShowcase() {
  const [activeIndex, setActiveIndex] = useState(0)
  const current = DEMO_MODES[activeIndex]

  return (
    <div className="relative mx-auto w-full max-w-[340px]">
      <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-tr from-indigo-500/25 via-cyan-400/20 to-emerald-400/15 blur-2xl" />

      <div className="rounded-[2.2rem] border-[6px] border-slate-800 bg-[#0B132B] p-4 text-white shadow-2xl">
        <div className="mx-auto mb-3 h-1.5 w-16 rounded-full bg-slate-700" />

        <div className="flex items-center justify-between rounded-xl bg-slate-900/90 px-3 py-2 text-xs">
          <span className="inline-flex items-center gap-1.5 font-semibold text-cyan-300">
            <Sparkles className="h-3.5 w-3.5" />
            Interactive Appzys Demo
          </span>
          <span className="rounded-full bg-indigo-500/20 px-2 py-0.5 text-[10px] font-semibold text-indigo-200">
            {current.badge}
          </span>
        </div>

        <div className="mt-3 grid grid-cols-3 gap-1.5">
          {DEMO_MODES.map((mode, idx) => (
            <button
              key={mode.id}
              type="button"
              onClick={() => setActiveIndex(idx)}
              className={`rounded-lg px-2 py-1.5 text-[11px] font-semibold transition ${
                idx === activeIndex
                  ? 'bg-[#4F46E5] text-white shadow-sm'
                  : 'bg-slate-900 text-slate-400 hover:text-white'
              }`}
            >
              {mode.label}
            </button>
          ))}
        </div>

        <div className="mt-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-3.5">
          <div className="flex items-center justify-between text-[11px] text-slate-400">
            <span className="inline-flex items-center gap-1 font-medium text-slate-300">
              {activeIndex === 1 ? (
                <Languages className="h-3.5 w-3.5 text-cyan-400" />
              ) : (
                <ScanText className="h-3.5 w-3.5 text-cyan-400" />
              )}
              {current.inputTitle}
            </span>
            <span className="text-emerald-400">{current.latency}</span>
          </div>

          <p className="mt-2 rounded-lg bg-slate-950/80 p-2.5 text-xs leading-relaxed text-slate-300">
            {current.sampleInput}
          </p>

          <div className="mt-3 space-y-2">
            {current.extracted.map((row) => (
              <div
                key={row.type}
                className="flex items-start justify-between gap-2 rounded-lg border border-slate-800 bg-slate-950/50 px-2.5 py-2 text-xs"
              >
                <span className="shrink-0 font-medium text-slate-400">{row.type}</span>
                <span className="text-right font-semibold text-cyan-200">{row.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between px-1 text-[11px] text-slate-400">
          <span className="inline-flex items-center gap-1 text-emerald-400">
            <CheckCircle2 className="h-3.5 w-3.5" />
            Live Production Engine
          </span>
          <span className="inline-flex items-center gap-0.5 text-indigo-300">
            Tap tabs to test <ArrowUpRight className="h-3 w-3" />
          </span>
        </div>
      </div>
    </div>
  )
}
