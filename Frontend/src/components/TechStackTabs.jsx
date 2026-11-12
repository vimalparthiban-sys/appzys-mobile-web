import { useState } from 'react'
import {
  CheckCircle2,
  Database,
  Layers,
  Mic,
  Plug,
  Rocket,
  ScanText,
  ShieldCheck,
  Smartphone,
} from 'lucide-react'

const TECH_NODES = [
  {
    id: 'flutter',
    name: 'Flutter & Dart',
    role: 'Cross-Platform Core',
    icon: Smartphone,
    summary:
      'Single shared Dart codebase engineered to deliver smooth Android and iOS mobile applications with clean UI screens, layouts, and navigation.',
    highlights: [
      'Cross-platform Android & iOS from one codebase',
      'Structured screens, custom widgets & navigation',
      'Figma-to-Flutter implementation & responsive layouts',
    ],
    tags: ['Flutter SDK', 'Dart', 'Android & iOS'],
  },
  {
    id: 'provider',
    name: 'Provider State',
    role: 'Predictable App State',
    icon: Layers,
    summary:
      'Clean separation between presentation UI, Provider-based state management, and modular Service/Data repositories for maintainable apps.',
    highlights: [
      'Provider-based reactive state & user workflows',
      'Typed data models, repositories & serialization',
      'Clean separation of UI and client business logic',
    ],
    tags: ['Provider', 'Service Layer', 'Modular'],
  },
  {
    id: 'firebase',
    name: 'Firebase Auth & DB',
    role: 'Application Services',
    icon: Database,
    summary:
      'Production-ready Firebase integration for user authentication, structured database sync, and real-time product analytics.',
    highlights: [
      'Firebase Authentication & user session flows',
      'Cloud database integration & real-time sync',
      'Firebase Analytics event & feature usage tracking',
    ],
    tags: ['Firebase Auth', 'Firestore', 'Analytics'],
  },
  {
    id: 'cloud-functions',
    name: 'Cloud Functions',
    role: 'API-Key Protection',
    icon: ShieldCheck,
    summary:
      'Server-side API mediation via Firebase Cloud Functions so sensitive AI keys, billing enforcement, and privileged operations stay off the device.',
    highlights: [
      'Server-side API-key protection & validation',
      'Token limits, rate limiting & AI cost safeguards',
      'Structured response parsing & retry handling',
    ],
    tags: ['Cloud Functions', 'Rate Limits', 'Secure Proxy'],
  },
  {
    id: 'rest-api',
    name: 'REST APIs',
    role: 'Backend Connectivity',
    icon: Plug,
    summary:
      'Seamless mobile integration with your existing backend servers, payment gateways, and third-party SaaS APIs.',
    highlights: [
      'Integration with existing client REST backends',
      'Error handling, loading states & offline tolerance',
      'Third-party SDK & payment gateway integration',
    ],
    tags: ['REST APIs', 'JSON Models', '3rd-Party SDKs'],
  },
  {
    id: 'speech-ai',
    name: 'Speech & Audio AI',
    role: 'Transcription & Learning',
    icon: Mic,
    summary:
      'Applied audio and conversational AI workflows backed by our live AI Transcript app—covering transcription, summaries, and AI study tools.',
    highlights: [
      'Audio/video-to-text & live speech transcription',
      'Transcript summaries, translation & Q&A chat',
      'AI-generated study summaries, quizzes & flashcards',
    ],
    tags: ['Speech-to-Text', 'AI Chat', 'EdTech AI'],
  },
  {
    id: 'ocr-vision',
    name: 'OCR & PDF Vision',
    role: 'Document Intelligence',
    icon: ScanText,
    summary:
      'Battle-tested image, screenshot, PDF, and handwriting extraction workflows from our published Copy Text On Screen and AI Text Scanner apps.',
    highlights: [
      'Camera scanning, screenshot & PDF text extraction',
      'Handwriting recognition & editable results',
      'Context-based PDF document Q&A & batch export',
    ],
    tags: ['Multilingual OCR', 'PDF Q&A', 'Handwriting'],
  },
  {
    id: 'qa-release',
    name: 'Store QA & Release',
    role: 'Testing & Maintenance',
    icon: Rocket,
    summary:
      'End-to-end functional and widget testing, Flutter SDK dependency upgrades, and guided Google Play & Apple App Store releases.',
    highlights: [
      'Scoped functional, widget & regression testing',
      'Flutter & dependency upgrades for existing apps',
      'Play Store & App Store build & release support',
    ],
    tags: ['Play Store', 'App Store', 'SDK Upgrades'],
  },
]

const ORBIT_RADIUS = 38

export default function TechStackTabs() {
  const [activeIdx, setActiveIdx] = useState(0)
  const current = TECH_NODES[activeIdx]
  const ActiveIcon = current.icon

  return (
    <section className="border-t border-slate-200 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
            Proven Mobile Stack
          </span>
          <h2 className="mt-2 font-display text-2xl font-extrabold text-black sm:text-3xl">
            Mobile Technologies We Ship With Daily
          </h2>
          <p className="mt-2 text-sm text-black sm:text-base">
            Hover or tap any technology node to inspect how APPZYS engineers cross-platform Flutter and AI mobile products.
          </p>
        </div>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-12">
          {/* Left: OrangeMantra-Style Interactive Radial Hub Wheel */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto aspect-square w-full max-w-[330px] sm:max-w-[430px]">
              {/* Subtle concentric orbit rings */}
              <div className="pointer-events-none absolute inset-[12%] rounded-full border border-slate-100" />
              <div className="pointer-events-none absolute inset-[28%] rounded-full border border-blue-100/60" />

              {/* SVG Connecting Spokes */}
              <svg
                className="pointer-events-none absolute inset-0 h-full w-full"
                viewBox="0 0 100 100"
                aria-hidden="true"
              >
                {TECH_NODES.map((node, idx) => {
                  const angleRad = ((-90 + idx * 45) * Math.PI) / 180
                  const x2 = 50 + ORBIT_RADIUS * Math.cos(angleRad)
                  const y2 = 50 + ORBIT_RADIUS * Math.sin(angleRad)
                  const isActive = idx === activeIdx
                  return (
                    <line
                      key={node.id}
                      x1="50"
                      y1="50"
                      x2={x2}
                      y2={y2}
                      stroke={isActive ? '#1D63ED' : '#E2E8F0'}
                      strokeWidth={isActive ? '0.75' : '0.4'}
                      className="transition-all duration-300"
                    />
                  )
                })}
              </svg>

              {/* Glowing Center Orb */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-blue-500/10 sm:h-24 sm:w-24">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#2563EB] to-[#1D63ED] text-center text-white shadow-[0_0_32px_rgba(29,99,237,0.4)] sm:h-16 sm:w-16">
                  <span className="font-display text-[11px] font-extrabold leading-tight sm:text-xs">
                    APPZYS
                    <br />
                    Flutter
                  </span>
                </div>
              </div>

              {/* 8 Orbiting Technology Nodes */}
              {TECH_NODES.map((node, idx) => {
                const Icon = node.icon
                const angleRad = ((-90 + idx * 45) * Math.PI) / 180
                const leftPct = 50 + ORBIT_RADIUS * Math.cos(angleRad)
                const topPct = 50 + ORBIT_RADIUS * Math.sin(angleRad)
                const isActive = idx === activeIdx

                return (
                  <button
                    key={node.id}
                    type="button"
                    onMouseEnter={() => setActiveIdx(idx)}
                    onFocus={() => setActiveIdx(idx)}
                    onClick={() => setActiveIdx(idx)}
                    aria-label={node.name}
                    aria-pressed={isActive}
                    style={{ left: `${leftPct}%`, top: `${topPct}%` }}
                    className="group absolute -translate-x-1/2 -translate-y-1/2 focus:outline-none"
                  >
                    <div
                      className={`mx-auto flex h-11 w-11 items-center justify-center rounded-2xl border bg-white transition-all duration-200 sm:h-13 sm:w-13 ${
                        isActive
                          ? 'scale-110 border-[#1D63ED] text-[#1D63ED] shadow-md ring-4 ring-blue-500/15'
                          : 'border-slate-200 text-slate-600 shadow-xs hover:scale-105 hover:border-blue-300 hover:text-[#1D63ED]'
                      }`}
                    >
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    <span
                      className={`mt-1.5 inline-block whitespace-nowrap rounded-full px-2 py-0.5 text-[10px] font-semibold transition sm:text-[11px] ${
                        isActive
                          ? 'border border-blue-200 bg-white text-black shadow-xs'
                          : 'hidden bg-white/90 text-slate-600 sm:inline-block'
                      }`}
                    >
                      {node.name}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Right: Dynamic Detail Card */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl border border-slate-200 bg-slate-50/80 p-7 shadow-xs transition-all duration-300 sm:p-9">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#1D63ED] shadow-xs ring-1 ring-slate-200/80">
                  <ActiveIcon className="h-7 w-7" />
                </div>
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-[#1D63ED]">
                  {current.role}
                </span>
              </div>

              <h3 className="mt-5 font-display text-2xl font-extrabold text-black">
                {current.name}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-black sm:text-base">
                {current.summary}
              </p>

              <ul className="mt-5 space-y-2.5 border-t border-slate-200/80 pt-5 text-xs text-black sm:text-sm">
                {current.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#1D63ED]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {current.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-blue-100 bg-white px-3 py-1 text-xs font-semibold text-[#1D63ED]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
