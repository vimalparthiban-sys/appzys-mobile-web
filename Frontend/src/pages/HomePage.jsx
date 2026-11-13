import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Cpu,
  Download,
  Layers,
  ScanText,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
} from 'lucide-react'
import InteractivePhoneShowcase from '../components/InteractivePhoneShowcase'
import TrustMarquee from '../components/TrustMarquee'
import CaseStudyMiniPreview from '../components/CaseStudyMiniPreview'
import Reveal from '../components/Reveal'
import CostCalculator from '../components/CostCalculator'
import TechStackTabs from '../components/TechStackTabs'
import DevelopmentProcess from '../components/DevelopmentProcess'
import FaqSection from '../components/FaqSection'
import { api } from '../services/api'
import { FALLBACK_CASE_STUDIES, SERVICES_LIST } from '../data/appData'

const TRUST_METRICS = [
  {
    value: '500K+',
    label: 'Copy Text On Screen Google Play Downloads',
    icon: Download,
  },
  {
    value: '100K+',
    label: 'AI Text Scanner Google Play Downloads',
    icon: ScanText,
  },
  {
    value: '4.6 / 5',
    label: 'AI Scanner & Copy Text App Store Rating',
    icon: Star,
  },
  {
    value: '4 Live Apps',
    label: 'In-House AI, OCR & Audio Products',
    icon: Smartphone,
  },
]

export default function HomePage() {
  const [featuredStudies] = useState(FALLBACK_CASE_STUDIES)
  const carouselRef = useRef(null)

  const scrollCases = (dir) => {
    carouselRef.current?.scrollBy({ left: dir * 420, behavior: 'smooth' })
  }

  return (
    <div>
      {/* Hero Section: Full-Bleed Cinematic AI & Mobile Studio Hero Banner */}
      <section className="relative overflow-hidden bg-[#0A192F] py-10 text-white sm:py-14 lg:py-16">
        {/* Full-Bleed Cinematic Tech Background Image: Exactly fits 100% width and height without cropping */}
        <div className="pointer-events-none absolute inset-0">
          <img
            src="/home-hero-banner.png"
            alt="Appzys AI Mobile Engineering Studio"
            className="h-full w-full object-fill"
          />
          {/* Subtle balanced gradient overlay: text readable on left, robotic hand & holographic brain vibrant on right */}
          <div className="absolute inset-0 bg-[#0A192F]/40 md:bg-gradient-to-r md:from-[#0A192F]/85 md:via-[#0A192F]/45 md:to-[#0A192F]/15" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.2),transparent_50%)]" />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/15 px-3.5 py-1.5 text-xs font-semibold text-blue-200">
              <Sparkles className="h-3.5 w-3.5 text-blue-300" />
              Flutter Mobile App Development &amp; AI Integration
            </div>

            <h1 className="mt-5 font-display text-3xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-[3.35rem]">
              Flutter Mobile &amp; AI Apps Built to Scale to{' '}
              <span className="bg-gradient-to-r from-blue-300 via-blue-200 to-blue-300 bg-clip-text text-transparent">
                Real Store Users
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              APPZYS builds cross-platform Android and iOS mobile apps using Flutter &amp; Dart,
              Provider state management, Firebase, and third-party AI APIs&mdash;backed by real
              production experience in AI transcription, OCR scanning, PDF chat, and study apps.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1D63ED] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/25 transition hover:bg-[#1652CA]"
              >
                Get Free 48-Hr App Architecture Audit
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/70 px-6 py-3.5 text-sm font-semibold text-slate-100 backdrop-blur transition hover:border-blue-400/50"
              >
                Explore Our Live Apps
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-300">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-blue-400" />
                Zero Junior Handoffs
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-blue-400" />
                Weekly TestFlight / Play Builds
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-blue-400" />
                100% Client IP Ownership
              </span>
            </div>
          </div>

          <div className="animate-float lg:col-span-5">
            <InteractivePhoneShowcase />
          </div>
        </div>
      </section>

      {/* OrangeMantra-Style Live Scrolling Trust Marquee */}
      <TrustMarquee />

      {/* Store Proof Metric Strip */}
      <section className="border-b border-slate-200 bg-slate-50 py-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 sm:gap-6 sm:px-6 lg:grid-cols-4 lg:px-8">
          {TRUST_METRICS.map((item, idx) => {
            const Icon = item.icon
            return (
              <Reveal key={item.label} delay={idx * 60} className="h-full">
                <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-xs transition duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:border-blue-300 hover:shadow-lg">
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#2563EB] via-blue-400 to-[#1D63ED] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="flex items-start">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100 transition-colors duration-300 group-hover:bg-[#1D63ED] group-hover:text-white group-hover:ring-[#1D63ED]">
                      <Icon className="h-5 w-5 transition-transform duration-500 ease-out group-hover:rotate-[360deg]" />
                    </span>
                  </div>
                  <div className="mt-4 font-display text-2xl font-extrabold text-[#0A192F] transition-colors duration-300 group-hover:text-[#1D63ED]">
                    {item.value}
                  </div>
                  <div className="mt-1.5 text-xs font-medium leading-relaxed text-slate-600">
                    {item.label}
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </section>

      {/* Services Section: MindInventory-Style Sticky Split Editorial Layout */}
      <section className="bg-white py-16 sm:py-22">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-24">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#1D63ED]">
                4 Core Flutter &amp; AI Services
              </span>
              <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight text-black sm:text-4xl">
                Everything You Need in Flutter Mobile Engineering
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-black sm:text-base">
                Whether you need a new Android &amp; iOS Flutter MVP, AI feature integration,
                ongoing maintenance for an existing Flutter app, or dedicated Flutter capacity for
                your agency team&mdash;APPZYS has a focused service model.
              </p>

              <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-600">
                  Core Engineering Stack
                </div>
                <div className="mt-2 font-display text-lg font-bold text-black">
                  Flutter &amp; Dart &middot; Provider &middot; Firebase &amp; Cloud Functions &middot; AI APIs
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/services/mobile-app-development"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#1D63ED] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1652CA]"
                >
                  Explore Mobile Pillar Page <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="#estimator"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-400"
                >
                  Estimate Cost
                </a>
              </div>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
            {SERVICES_LIST.map((service, index) => (
              <Reveal key={service.title} delay={index * 55}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:bg-white hover:shadow-lg">
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#2563EB] via-blue-400 to-[#1D63ED] opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white text-blue-600 shadow-xs ring-1 ring-slate-200/80 transition group-hover:bg-[#1D63ED] group-hover:text-white [&>svg]:transition-transform [&>svg]:duration-500 [&>svg]:ease-out group-hover:[&>svg]:rotate-[360deg]">
                      {index % 3 === 0 ? (
                        <Smartphone className="h-5 w-5" />
                      ) : index % 3 === 1 ? (
                        <Layers className="h-5 w-5" />
                      ) : (
                        <Cpu className="h-5 w-5" />
                      )}
                    </span>
                    <span className="rounded-full bg-white px-2.5 py-1 text-[11px] font-semibold text-slate-700 ring-1 ring-slate-200">
                      {service.tag}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-black transition-colors group-hover:text-blue-600">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-black">
                    {service.summary || service.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Showcase: Clean White Sheet Canvas + 3D Studio Cards */}
      <section className="border-t border-slate-200 bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                Product Portfolio / In-House Case Studies
              </span>
              <h2 className="mt-2 font-display text-2xl font-extrabold text-black sm:text-4xl">
                Built by Us. Used in the Real World.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-black sm:text-base">
                APPZYS Technologies builds and operates its own Android &amp; iOS mobile
                applications&mdash;giving us firsthand experience across product engineering, AI
                integration, store publishing, and continuous improvement.
              </p>
            </div>
            <div className="flex items-center gap-2.5 self-start md:self-auto">
              <button
                type="button"
                onClick={() => scrollCases(-1)}
                aria-label="Previous case studies"
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-300 bg-white text-slate-700 shadow-2xs transition hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => scrollCases(1)}
                aria-label="Next case studies"
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-300 bg-white text-slate-700 shadow-2xs transition hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
              <Link
                to="/case-studies"
                className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#1D63ED] px-5 py-3 text-sm font-semibold text-white shadow-md shadow-blue-500/20 transition hover:bg-[#1652CA]"
              >
                Read Full Case Studies
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div
            ref={carouselRef}
            className="mt-8 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {featuredStudies.map((app) => (
              <div
                key={app.slug}
                className="group relative h-[470px] w-[86%] shrink-0 snap-start sm:w-[62%] lg:w-[calc((100%-3rem)/3)] perspective-1000"
              >
                {app.frontImage ? (
                  <div className="transform-style-3d relative h-full w-full transition-transform duration-700 ease-in-out group-hover:rotate-y-180">
                    {/* FRONT FACE: High-Resolution Studio Visual */}
                    <div className="backface-hidden absolute inset-0 overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 shadow-md">
                      <img
                        src={app.frontImage}
                        alt={app.appName}
                        className="h-full w-full object-cover"
                      />

                      {/* Top Right Rating Badge */}
                      <div className="absolute top-3.5 right-3.5 z-10 inline-flex items-center gap-1 rounded-full border border-amber-400/30 bg-slate-950/75 backdrop-blur-md px-2.5 py-1 text-xs font-bold text-amber-300 shadow-md">
                        <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                        <span>{app.rating}</span>
                      </div>

                      {/* Bottom Info: App Name (Left) + Google Play Badge (Right) */}
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-4 pt-12">
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-display text-sm font-bold text-white sm:text-base">
                            {app.appName}
                          </span>
                          <span className="shrink-0 rounded-full border border-blue-400/40 bg-blue-500/25 px-2.5 py-0.5 text-[11px] font-semibold text-blue-200 shadow-sm">
                            {app.installsLabel}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* BACK FACE: Detailed Engineering Breakdown & Links */}
                    <div className="backface-hidden rotate-y-180 absolute inset-0 flex flex-col justify-between overflow-y-auto rounded-2xl border border-blue-400/60 bg-[#080E20] p-6 shadow-2xl">
                      <div>
                        <div className="flex items-center justify-between gap-2">
                          <span className="rounded-full bg-blue-500/20 px-2.5 py-1 text-[11px] font-semibold text-blue-200">
                            {app.category}
                          </span>
                          <span className="inline-flex items-center gap-1 text-xs font-bold text-blue-400">
                            <Star className="h-3.5 w-3.5 fill-blue-400 text-blue-400" />
                            {app.rating}
                          </span>
                        </div>

                        {/* Visual Mini Phone Screen Preview */}
                        <div className="mt-3">
                          <CaseStudyMiniPreview slug={app.slug} />
                        </div>

                        <h3 className="mt-3 font-display text-lg font-bold text-white">
                          {app.appName}
                        </h3>
                        <p className="mt-0.5 text-xs font-semibold text-blue-400">
                          {app.installsLabel}
                        </p>
                        <p className="mt-2 text-xs leading-relaxed text-slate-300">
                          {app.summary}
                        </p>
                      </div>

                      <div className="mt-4 border-t border-slate-800 pt-3">
                        <div className="flex flex-wrap gap-1.5">
                          {(app.techStack || []).map((tech) => (
                            <span
                              key={tech}
                              className="rounded-md border border-slate-700 bg-slate-950/70 px-2 py-0.5 text-[10px] font-medium text-slate-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <Link
                          to={`/case-studies/${app.slug}`}
                          className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-blue-300 transition-colors hover:text-white"
                        >
                          Read Engineering Breakdown
                          <ArrowRight className="h-3.5 w-3.5 transition-transform hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={`/case-studies/${app.slug}`}
                    className="group flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-md transition duration-300 hover:-translate-y-1 hover:border-blue-400 hover:shadow-lg"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[11px] font-semibold text-blue-700">
                          {app.category}
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-blue-600">
                          <Star className="h-3.5 w-3.5 fill-blue-500 text-blue-500" />
                          {app.rating}
                        </span>
                      </div>

                      {/* Visual Mini Phone Screen Preview */}
                      <div className="mt-3">
                        <CaseStudyMiniPreview slug={app.slug} />
                      </div>

                      <h3 className="mt-3 font-display text-lg font-bold text-black group-hover:text-blue-600">
                        {app.appName}
                      </h3>
                      <p className="mt-0.5 text-xs font-semibold text-blue-600">
                        {app.installsLabel}
                      </p>
                      <p className="mt-2 text-xs leading-relaxed text-slate-600">{app.summary}</p>
                    </div>

                    <div className="mt-4 border-t border-slate-100 pt-3">
                      <div className="flex flex-wrap gap-1.5">
                        {(app.techStack || []).map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 text-[10px] font-medium text-slate-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-blue-600">
                        Read Engineering Breakdown
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Cost Estimator, Tech Stack, Process & FAQs */}
      <CostCalculator />
      <TechStackTabs />
      <DevelopmentProcess />
      <FaqSection />

      {/* Bottom High-Contrast Conversion Banner */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0A192F] via-[#0F2557] to-[#1D4ED8] p-8 text-white shadow-2xl sm:p-12">
              <div className="pointer-events-none absolute -right-12 -top-12 h-52 w-52 rounded-full bg-[#1D63ED]/25 blur-3xl" />
              <div className="relative flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
                <div className="max-w-2xl">
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-blue-300">
                    <ShieldCheck className="h-4 w-4" />
                    Direct Senior Engineering Team &bull; Tamil Nadu, India
                  </div>
                  <h2 className="mt-2 font-display text-2xl font-extrabold sm:text-3xl">
                    Ready to Turn Your Mobile App Idea Into a Store-Ready Product?
                  </h2>
                  <p className="mt-2 text-sm text-slate-300 sm:text-base">
                    Send your idea and receive a free architecture flow, recommended tech stack, and
                    realistic launch timeline within 48 hours.
                  </p>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#1D63ED] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/25 transition hover:bg-[#1652CA]"
                >
                  Request Free 48-Hr Audit
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
