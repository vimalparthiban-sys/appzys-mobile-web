import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Calculator,
  CheckCircle2,
  Cpu,
  Layers,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Wrench,
  Users,
} from 'lucide-react'
import TrustMarquee from '../components/TrustMarquee'
import {
  AI_CAPABILITIES,
  FLUTTER_ARCHITECTURE_LAYERS,
  SERVICE_COMPARISON,
  SERVICES_LIST,
} from '../data/appData'

const ENGAGEMENT_MODELS = [
  {
    name: 'Fixed-Price / Milestone MVP',
    timeline: 'Service 01 & 02',
    idealFor: 'Startups & businesses launching a new Android & iOS Flutter app or AI product with agreed scope.',
    serviceQuery: '01. Mobile App Development (Flutter)',
    points: [
      'Flutter & Dart shared Android/iOS codebase',
      'Provider state, Firebase & REST API integration',
      'Production build & store release support',
    ],
  },
  {
    name: 'Enhancement & Monthly Retainer',
    timeline: 'Service 03',
    idealFor: 'Businesses with an existing Flutter app needing bug fixes, SDK upgrades & new feature sprints.',
    serviceQuery: '03. App Enhancement & Maintenance',
    points: [
      'Starts with Codebase Assessment & Backlog',
      'Agreed monthly hours + dependency review',
      'Regression testing & monthly release support',
    ],
  },
  {
    name: 'Dedicated Flutter / White-Label',
    timeline: 'Service 04',
    idealFor: 'Software agencies & product teams needing Flutter capacity alongside React, Node & QA teams.',
    serviceQuery: '04. Dedicated Flutter Development / White-Label',
    points: [
      'Full-time or part-time monthly developer allocation',
      'White-label delivery under your agency brand',
      'NDA, IP protection & weekly sprint reporting',
    ],
  },
]

const SERVICE_TAGS = [
  ['Android & iOS', 'Provider State', 'Firebase & REST'],
  ['Audio / Speech AI', 'PDF & OCR', 'Cloud Functions Proxy'],
  ['Codebase Audit', 'Bug Fixes & SDK Upgrades', 'Monthly Retainer'],
  ['Team Extension', 'White-Label Agency', 'Monthly Allocation'],
]

const INCLUDED_SCOPE = [
  'Cross-platform Flutter & Dart Android and iOS app',
  'UI implementation (screens, layouts, navigation)',
  'Provider state management & client business logic',
  'REST API & Firebase (Auth, DB, Cloud Functions) integration',
  'Third-party AI API workflows with server-side key protection',
  'Scoped widget/functional testing & store submission support',
]

const BOUNDARY_SCOPE = [
  'Custom enterprise backend platform rebuilds (we integrate with yours)',
  'Training custom foundation LLMs or speech recognition models',
  'Full UX research practice (we implement from clear specs/Figma)',
  'Unlimited un-scoped post-launch feature changes',
  'Guaranteeing third-party AI model output accuracy',
  '24/7 on-call SLA or paid user-acquisition marketing',
]

const SERVICE_ICONS = [Smartphone, Sparkles, Wrench, Users]

export default function MobileAppServicePage() {
  const [activeServiceIdx, setActiveServiceIdx] = useState(0)
  const cardRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute('data-idx'))
            if (!Number.isNaN(idx)) {
              setActiveServiceIdx(idx)
            }
          }
        })
      },
      { rootMargin: '-35% 0px -45% 0px', threshold: 0.1 }
    )

    cardRefs.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToService = (idx) => {
    setActiveServiceIdx(idx)
    const target = cardRefs.current[idx]
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-grid-dark relative overflow-hidden bg-[#0A192F] py-16 text-white sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.34),transparent_48%),radial-gradient(circle_at_bottom_left,rgba(29,99,237,0.16),transparent_42%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-400/30 bg-blue-500/15 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-200">
              <Sparkles className="h-3.5 w-3.5 text-blue-300" />
              Flutter Mobile App Development &amp; AI Integration
            </span>
            <h1 className="mt-4 font-display text-3xl font-extrabold leading-tight sm:text-5xl">
              Focused Flutter Engineering, AI Integration &amp; Dedicated Capacity
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
              APPZYS builds cross-platform Android and iOS applications exclusively with Flutter and
              Dart&mdash;paired with Provider state management, Firebase, Cloud Functions, and
              real-world AI API workflows.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact?service=01.%20Mobile%20App%20Development%20(Flutter)"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1D63ED] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/25 transition hover:bg-[#1652CA]"
              >
                Book Free 48-Hr Flutter Audit
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="/#estimator"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/70 px-6 py-3.5 text-sm font-semibold text-slate-100 transition hover:border-blue-400/50"
              >
                <Calculator className="h-4 w-4" />
                Estimate Project Cost
              </a>
            </div>
          </div>

          <div className="mt-10 grid gap-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-5 sm:grid-cols-4">
            <div>
              <div className="font-display text-2xl font-extrabold text-blue-300">Flutter</div>
              <div className="text-xs text-slate-300">Android &amp; iOS Shared Codebase</div>
            </div>
            <div>
              <div className="font-display text-2xl font-extrabold text-blue-300">4 Services</div>
              <div className="text-xs text-slate-300">New App, AI, Maintenance &amp; Team</div>
            </div>
            <div>
              <div className="font-display text-2xl font-extrabold text-blue-300">Firebase</div>
              <div className="text-xs text-slate-300">Auth, DB &amp; Cloud Functions Proxy</div>
            </div>
            <div>
              <div className="font-display text-2xl font-extrabold text-blue-300">White-Label</div>
              <div className="text-xs text-slate-300">Agency &amp; Team Extension Ready</div>
            </div>
          </div>
        </div>
      </section>

      <TrustMarquee />

      {/* 4 Core Services: OrangeMantra-Style Sticky Left Nav + Scroll-Synced Cards */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Our 4 Official Services
            </span>
            <h2 className="mt-2 font-display text-2xl font-extrabold text-black sm:text-3xl">
              Clear Services Built Around Real Flutter Capabilities
            </h2>
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-12">
            {/* Left Sticky Navigation */}
            <div className="lg:col-span-4">
              <div className="border-l-2 border-slate-200 lg:sticky lg:top-24">
                {SERVICES_LIST.map((item, idx) => {
                  const Icon = SERVICE_ICONS[idx % SERVICE_ICONS.length]
                  const isActive = activeServiceIdx === idx
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => scrollToService(idx)}
                      className={`-ml-[2px] flex w-full items-center gap-3.5 border-l-2 px-4 py-3.5 text-left transition ${
                        isActive
                          ? 'border-[#1D63ED] bg-blue-50/50'
                          : 'border-transparent hover:bg-slate-50'
                      }`}
                    >
                      <span
                        className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition ${
                          isActive
                            ? 'bg-blue-100 text-[#1D63ED] ring-1 ring-blue-200'
                            : 'bg-slate-100 text-slate-500'
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                      </span>
                      <span
                        className={`font-display text-sm transition ${
                          isActive ? 'font-bold text-black' : 'font-medium text-slate-600'
                        }`}
                      >
                        {item.title}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Right Scrollable Cards */}
            <div className="space-y-6 lg:col-span-8">
              {SERVICES_LIST.map((item, idx) => {
                const Icon = SERVICE_ICONS[idx % SERVICE_ICONS.length]
                const isActive = activeServiceIdx === idx
                const tags = SERVICE_TAGS[idx] || []
                return (
                  <div
                    key={item.title}
                    id={`service-card-${idx}`}
                    data-idx={idx}
                    ref={(el) => {
                      cardRefs.current[idx] = el
                    }}
                    className={`group relative overflow-hidden rounded-3xl border bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg sm:p-9 ${
                      isActive
                        ? 'border-blue-300 shadow-lg shadow-blue-950/5'
                        : 'border-slate-200'
                    }`}
                  >
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#2563EB] via-blue-400 to-[#1D63ED] opacity-0 transition-opacity group-hover:opacity-100" />
                    <div className="flex items-start justify-between gap-4">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-[#1D63ED] transition group-hover:bg-[#1D63ED] group-hover:text-white">
                        <Icon className="h-6 w-6 transition-transform duration-500 ease-out group-hover:rotate-[360deg]" />
                      </span>
                      <span className="select-none font-display text-5xl font-extrabold leading-none text-slate-100">
                        {item.id}
                      </span>
                    </div>

                    <h3 className="mt-5 font-display text-xl font-extrabold text-black transition-colors group-hover:text-blue-600 sm:text-2xl">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-black sm:text-base">
                      {item.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-blue-100 bg-blue-50/70 px-3 py-1 text-xs font-semibold text-[#1D63ED]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <ul className="mt-5 space-y-2 border-t border-slate-100 pt-5 text-xs text-black sm:text-sm">
                      {item.capabilities.map((cap) => (
                        <li key={cap} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#1D63ED]" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      to={`/contact?service=${encodeURIComponent(item.title)}`}
                      className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-[#1D63ED] hover:text-[#1652CA]"
                    >
                      Inquire About Service {item.id} <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Side-by-Side Service Comparison Table */}
      <section className="border-y border-slate-200 bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Service Comparison
            </span>
            <h2 className="mt-2 font-display text-2xl font-extrabold text-black sm:text-3xl">
              Which APPZYS Service Fits Your Situation?
            </h2>
          </div>

          <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-xs">
            <table className="w-full min-w-[680px] text-left text-sm">
              <thead className="bg-gradient-to-r from-[#0A192F] via-[#0F2557] to-[#1D4ED8] text-white">
                <tr>
                  <th className="px-5 py-4 font-semibold">Dimension</th>
                  <th className="px-5 py-4 font-semibold">01. Mobile App Dev</th>
                  <th className="px-5 py-4 font-semibold">02. AI Integration</th>
                  <th className="px-5 py-4 font-semibold">03. Enhancement</th>
                  <th className="px-5 py-4 font-semibold">04. Dedicated Flutter</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {SERVICE_COMPARISON.map((row) => (
                  <tr key={row.dimension} className="hover:bg-slate-50/70">
                    <td className="px-5 py-4 font-bold text-black">{row.dimension}</td>
                    <td className="px-5 py-4 text-black">{row.s1}</td>
                    <td className="px-5 py-4 text-black">{row.s2}</td>
                    <td className="px-5 py-4 text-black">{row.s3}</td>
                    <td className="px-5 py-4 text-black">{row.s4}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 6 AI Capabilities */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Service 02 Deep Dive
            </span>
            <h2 className="mt-2 font-display text-2xl font-extrabold text-black sm:text-3xl">
              6 AI Capabilities We Integrate Into Flutter Apps
            </h2>
            <p className="mt-2 text-sm text-black">
              Built with prompt validation, token/cost safeguards, and Firebase Cloud Functions API-key protection.
            </p>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {AI_CAPABILITIES.map((cap) => (
              <div
                key={cap.code}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:bg-white hover:shadow-lg"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#2563EB] via-blue-400 to-[#1D63ED] opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white text-blue-600 shadow-xs ring-1 ring-slate-200/80 transition group-hover:bg-[#1D63ED] group-hover:text-white">
                    <Cpu className="h-4 w-4 transition-transform duration-500 ease-out group-hover:rotate-[360deg]" />
                  </span>
                  <span className="rounded-full bg-white px-2.5 py-1 text-[11px] font-bold text-slate-700 ring-1 ring-slate-200">
                    Capability {cap.code}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-base font-bold text-black transition-colors group-hover:text-blue-600">
                  {cap.title}
                </h3>
                <ul className="mt-3 space-y-1.5 text-xs text-black">
                  {cap.items.map((pt) => (
                    <li key={pt} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-blue-600" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 border-t border-slate-200 pt-3 text-[11px] font-medium text-slate-700">
                  Use cases: {cap.useCases}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 1: 5-Layer Flutter Architecture (Sticky Left + Vertical Dashed Timeline Right) */}
      <section className="border-y border-slate-200 bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Left Sticky Column */}
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-24">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  Technical Implementation
                </span>
                <h2 className="mt-2 font-display text-3xl font-extrabold leading-tight text-black sm:text-4xl">
                  Structured Flutter Architecture
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-black sm:text-base">
                  Clean separation between UI, Provider state, data repositories, Firebase services,
                  and external AI/REST APIs&mdash;engineered so your app stays fast and easy to
                  maintain.
                </p>
                <Link
                  to="/contact?service=01.%20Mobile%20App%20Development%20(Flutter)"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#1D63ED] px-6 py-3 text-sm font-bold text-white shadow-md shadow-blue-500/20 transition hover:bg-[#1652CA]"
                >
                  Talk To Our Flutter Experts
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Right Vertical Dashed Timeline + Layer Cards */}
            <div className="lg:col-span-8">
              <div className="relative space-y-5 pl-12 before:absolute before:bottom-6 before:left-[17px] before:top-6 before:border-l-2 before:border-dashed before:border-slate-300">
                {FLUTTER_ARCHITECTURE_LAYERS.map((item, idx) => {
                  const num = String(idx + 1).padStart(2, '0')
                  const cleanTitle = item.layer.replace(/^\d+\.\s*/, '')
                  return (
                    <div key={item.layer} className="group relative flex items-start">
                      <span className="absolute -left-12 top-5 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#1D63ED] bg-white font-display text-xs font-extrabold text-[#1D63ED] transition duration-300 group-hover:bg-[#1D63ED] group-hover:text-white">
                        {num}
                      </span>
                      <div className="w-full rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs transition duration-300 group-hover:-translate-y-1 group-hover:border-blue-400 group-hover:shadow-md">
                        <h3 className="font-display text-base font-bold text-black transition-colors group-hover:text-blue-600 sm:text-lg">
                          {cleanTitle}
                        </h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-black">
                          {item.details}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Transparent Delivery Boundaries (Full Width) */}
      <section className="border-b border-slate-200 bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Transparent Delivery Boundaries
            </span>
            <h2 className="mt-2 font-display text-2xl font-extrabold text-black sm:text-3xl">
              What Is Included &amp; Where Boundaries Sit
            </h2>
            <p className="mt-2 text-sm text-black">
              We keep scope boundaries clear upfront so founders, CTOs, and agency partners have zero surprises.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="group relative overflow-hidden rounded-2xl border border-blue-200 bg-slate-50/50 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:bg-white hover:shadow-lg sm:p-7">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#2563EB] via-blue-400 to-[#1D63ED] opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-[#1D63ED] group-hover:text-white">
                  <CheckCircle2 className="h-5 w-5 transition-transform duration-500 ease-out group-hover:rotate-[360deg]" />
                </span>
                <div className="font-display text-base font-bold text-black transition-colors group-hover:text-blue-600">
                  Included in APPZYS Delivery
                </div>
              </div>
              <ul className="mt-5 space-y-3 text-sm text-black">
                {INCLUDED_SCOPE.map((inc) => (
                  <li key={inc} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/50 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:bg-white hover:shadow-lg sm:p-7">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#2563EB] via-blue-400 to-[#1D63ED] opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white text-blue-600 ring-1 ring-slate-200/80 transition group-hover:bg-[#1D63ED] group-hover:text-white">
                  <ShieldCheck className="h-5 w-5 transition-transform duration-500 ease-out group-hover:rotate-[360deg]" />
                </span>
                <div className="font-display text-base font-bold text-black transition-colors group-hover:text-blue-600">
                  Scoped Separately / Not Default
                </div>
              </div>
              <ul className="mt-5 space-y-3 text-sm text-slate-700">
                {BOUNDARY_SCOPE.map((exc) => (
                  <li key={exc} className="flex items-start gap-2.5">
                    <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                    <span>{exc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-extrabold text-black sm:text-3xl">
            Commercial &amp; Partnership Models
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-black">
            Choose fixed-price MVP sprints, monthly maintenance retainers, or confidential white-label Flutter capacity.
          </p>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {ENGAGEMENT_MODELS.map((model) => (
              <div
                key={model.name}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#2563EB] via-blue-400 to-[#1D63ED] opacity-0 transition-opacity group-hover:opacity-100" />
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white text-blue-600 shadow-xs ring-1 ring-slate-200/80 transition group-hover:bg-[#1D63ED] group-hover:text-white">
                      <Layers className="h-5 w-5 transition-transform duration-500 ease-out group-hover:rotate-[360deg]" />
                    </span>
                    <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-[#1D63ED]">
                      {model.timeline}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-black transition-colors group-hover:text-blue-600">
                    {model.name}
                  </h3>
                  <p className="mt-2 text-sm text-black">{model.idealFor}</p>
                  <ul className="mt-4 space-y-2 border-t border-slate-200 pt-4 text-xs text-black">
                    {model.points.map((pt) => (
                      <li key={pt} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-600" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  to={`/contact?model=${encodeURIComponent(model.name)}&service=${encodeURIComponent(model.serviceQuery)}`}
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-[#1D63ED] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1652CA]"
                >
                  Select {model.name}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-14 flex flex-col items-start justify-between gap-6 rounded-3xl bg-gradient-to-r from-[#0A192F] via-[#0F2557] to-[#1D4ED8] p-8 text-white sm:p-10 lg:flex-row lg:items-center">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-200">
                <ShieldCheck className="h-4 w-4" />
                NDA + Technical Feasibility Assessment
              </div>
              <h2 className="mt-2 font-display text-2xl font-extrabold sm:text-3xl">
                Ready to Build, AI-Enable, or Scale Your Flutter App?
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-blue-100">
                Share your product goal, existing Flutter codebase, or agency capacity need. We&apos;ll send a scoped architecture and effort plan in 48 hours.
              </p>
            </div>
            <Link
              to="/contact?service=01.%20Mobile%20App%20Development%20(Flutter)"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#0A192F] transition hover:bg-blue-50"
            >
              Request Free 48-Hr Audit
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
