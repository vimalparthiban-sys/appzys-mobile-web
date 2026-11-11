import { Link } from 'react-router-dom'
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  Layers,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
} from 'lucide-react'
import InteractivePhoneShowcase from '../components/InteractivePhoneShowcase'
import CostCalculator from '../components/CostCalculator'
import TechStackTabs from '../components/TechStackTabs'
import DevelopmentProcess from '../components/DevelopmentProcess'
import FaqSection from '../components/FaqSection'
import { FALLBACK_CASE_STUDIES, SERVICES_LIST } from '../data/appData'

const TRUST_METRICS = [
  { value: '~1M+', label: 'Combined App Store & Play Installs' },
  { value: '700K+ / 4.1★', label: 'Flagship App (Copy Text On Screen)' },
  { value: 'Senior Team', label: 'Veteran Mobile App Engineers' },
  { value: '48-Hr Audit', label: 'Free Architecture & Timeline Plan' },
]

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#0B132B] py-16 text-white sm:py-22">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(79,70,229,0.28),transparent_48%),radial-gradient(circle_at_bottom_left,rgba(6,182,212,0.16),transparent_45%)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/15 px-3.5 py-1.5 text-xs font-semibold text-indigo-200">
              <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
              Engineered by Real AI &amp; Mobile App Publishers
            </div>

            <h1 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
              Custom Mobile &amp; AI Apps Built to Scale to Millions of Users
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              We don&apos;t just write client code—our senior product team builds, launches, and
              scales our own AI &amp; OCR mobile apps to nearly 1M+ real users. Now we bring that
              exact product engineering to your iOS, Android, and Flutter app.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#4F46E5] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:bg-indigo-500"
              >
                Get Free 48-Hr App Architecture Audit
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/70 px-6 py-3.5 text-sm font-semibold text-slate-100 transition hover:border-slate-500"
              >
                Explore Our Live Apps
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-300">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                Zero Junior Handoffs
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                Weekly TestFlight / Play Builds
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                100% Client IP Ownership
              </span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <InteractivePhoneShowcase />
          </div>
        </div>
      </section>

      {/* Store Trust Strip */}
      <section className="border-b border-slate-200 bg-white py-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
          {TRUST_METRICS.map((item) => (
            <div key={item.label} className="rounded-xl border border-slate-200/80 bg-slate-50 p-4">
              <div className="font-display text-2xl font-extrabold text-[#4F46E5]">
                {item.value}
              </div>
              <div className="mt-1 text-xs font-medium text-slate-600">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Bento Grid */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
                Full-Cycle Mobile Engineering
              </span>
              <h2 className="mt-2 font-display text-2xl font-extrabold text-[#0B132B] sm:text-3xl">
                Everything You Need From Concept to App Store Scale
              </h2>
            </div>
            <Link
              to="/services/mobile-app-development"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:text-indigo-700"
            >
              View All Mobile Services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES_LIST.map((service, index) => (
              <div
                key={service.title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-xs transition hover:-translate-y-0.5 hover:border-indigo-300 hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    {index % 3 === 0 ? (
                      <Smartphone className="h-5 w-5" />
                    ) : index % 3 === 1 ? (
                      <Layers className="h-5 w-5" />
                    ) : (
                      <Cpu className="h-5 w-5" />
                    )}
                  </span>
                  <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-600">
                    {service.tag}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-[#0B132B]">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Built by Appzys Case Studies Preview */}
      <section className="border-y border-slate-200 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-700">
              Proven Production Apps
            </span>
            <h2 className="mt-2 font-display text-2xl font-extrabold text-[#0B132B] sm:text-3xl">
              Built by Appzys: Real Store Proof, Not Static Mockups
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
              Before building for clients, we mastered mobile UX, OCR/AI pipelines, and Play Store
              retention on our own flagship products.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {FALLBACK_CASE_STUDIES.map((app) => (
              <div
                key={app.slug}
                className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded-full bg-indigo-50 px-2.5 py-1 text-[11px] font-semibold text-indigo-700">
                      {app.category}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-600">
                      <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
                      {app.rating}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-xl font-bold text-[#0B132B]">
                    {app.appName}
                  </h3>
                  <p className="mt-1 text-xs font-semibold text-emerald-700">{app.installsLabel}</p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{app.summary}</p>
                </div>

                <div className="mt-5 flex flex-wrap gap-1.5 border-t border-slate-200 pt-4">
                  {app.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-white px-2 py-1 text-[11px] font-medium text-slate-700 ring-1 ring-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 rounded-xl bg-[#0B132B] px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Read Full Engineering Case Studies
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Day 2 Upgrades: Interactive Cost Estimator, Tech Stack, Process & FAQs */}
      <CostCalculator />
      <TechStackTabs />
      <DevelopmentProcess />
      <FaqSection />

      {/* Bottom CTA Banner */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-gradient-to-r from-[#0B132B] via-[#1E1B4B] to-[#312E81] p-8 text-white sm:p-12 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-300">
                <ShieldCheck className="h-4 w-4" />
                Direct Senior Engineering Team • Tamil Nadu, India
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
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#0B132B] shadow-md transition hover:bg-indigo-50"
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
