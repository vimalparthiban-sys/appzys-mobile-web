import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Cpu,
  ShieldCheck,
  Smartphone,
  Star,
} from 'lucide-react'
import { api } from '../services/api'
import { FALLBACK_CASE_STUDIES } from '../data/appData'

export default function CaseStudyDetailPage() {
  const { slug } = useParams()
  const matched = FALLBACK_CASE_STUDIES.find((item) => item.slug === slug)
  const [study, setStudy] = useState(matched || FALLBACK_CASE_STUDIES[0])
  const [notFound, setNotFound] = useState(!matched)

  useEffect(() => {
    const fallbackItem = FALLBACK_CASE_STUDIES.find((item) => item.slug === slug)
    if (fallbackItem) {
      setStudy(fallbackItem)
      setNotFound(false)
    } else {
      setNotFound(true)
    }
  }, [slug])

  if (notFound) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
        <h1 className="font-display text-3xl font-extrabold text-[#0A192F]">
          Case Study Not Found
        </h1>
        <p className="mt-3 text-slate-600">
          Explore our live production mobile apps shipped on Google Play and the Apple App Store.
        </p>
        <Link
          to="/case-studies"
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#2563EB] px-5 py-3 text-sm font-semibold text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to All Case Studies
        </Link>
      </div>
    )
  }

  const otherStudies = FALLBACK_CASE_STUDIES.filter((item) => item.slug !== study.slug)

  return (
    <div className="py-14 sm:py-18">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Link
          to="/case-studies"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to All Case Studies
        </Link>

        {/* Hero Summary Card */}
        <div className="mt-6 rounded-3xl bg-[#0A192F] p-8 text-white shadow-xl sm:p-10">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-blue-400/30 bg-blue-500/20 px-3 py-1 text-xs font-semibold text-blue-200">
                {study.category}
              </span>
              <span className="rounded-full bg-blue-500/20 px-3 py-1 text-xs font-bold text-blue-300">
                {study.installsLabel}
              </span>
            </div>
            <span className="inline-flex items-center gap-1 text-sm font-bold text-blue-400">
              <Star className="h-4 w-4 fill-blue-400 text-blue-400" />
              {study.rating} Store Rating
            </span>
          </div>

          <h1 className="mt-5 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            {study.appName}
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-300">
            {study.summary}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {(study.techStack || []).map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-1.5 text-xs font-medium text-blue-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Step-by-Step Story Arc: 01 Challenge -> 02 Architecture -> 03 Store Metrics */}
        <div className="mt-8 space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                <Smartphone className="h-4 w-4 text-blue-600" />
                01. Product &amp; Mobile Engineering Challenge
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">
                {study.challenge}
              </p>
            </div>

            <div className="rounded-2xl border border-blue-200 bg-blue-50/50 p-6 shadow-xs">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700">
                <Cpu className="h-4 w-4 text-blue-600" />
                02. Mobile &amp; AI Architecture Solution
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-800 sm:text-base">
                {study.solution}
              </p>
            </div>
          </div>

          {/* 03. Verified Store Metrics & Production Benchmarks */}
          <div className="rounded-2xl border border-blue-200 bg-blue-50/40 p-6 sm:p-8">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-800">
              <BarChart3 className="h-4 w-4 text-blue-700" />
              03. Store Metrics &amp; Production Benchmarks
            </div>
            <div className="mt-5 grid gap-4 sm:grid-cols-4">
              <div className="rounded-xl border border-blue-200/80 bg-white p-4">
                <div className="font-display text-xl font-extrabold text-[#0A192F]">
                  {study.installsLabel}
                </div>
                <div className="mt-1 text-xs text-slate-600">Production Adoption</div>
              </div>
              <div className="rounded-xl border border-blue-200/80 bg-white p-4">
                <div className="font-display text-xl font-extrabold text-blue-600">
                  {study.rating}&#9733;
                </div>
                <div className="mt-1 text-xs text-slate-600">Verified Store Average</div>
              </div>
              <div className="rounded-xl border border-blue-200/80 bg-white p-4">
                <div className="font-display text-xl font-extrabold text-blue-700">99.8%</div>
                <div className="mt-1 text-xs text-slate-600">Crash-Free Sessions</div>
              </div>
              <div className="rounded-xl border border-blue-200/80 bg-white p-4">
                <div className="font-display text-xl font-extrabold text-blue-700">&lt; 1.2s</div>
                <div className="mt-1 text-xs text-slate-600">Cold Startup Target</div>
              </div>
            </div>
          </div>
        </div>

        {/* Client Translation Value Box */}
        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
          <h2 className="font-display text-xl font-bold text-[#0A192F]">
            How We Apply This Exact Engineering to Your App
          </h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl bg-slate-50 p-4">
              <CheckCircle2 className="h-5 w-5 text-blue-600" />
              <div className="mt-2 font-display text-sm font-bold text-[#0A192F]">
                On-Device Performance
              </div>
              <p className="mt-1 text-xs leading-relaxed text-slate-600">
                Sub-second startup and smooth 60fps mobile interactions tuned even for budget devices.
              </p>
            </div>
            <div className="rounded-xl bg-slate-50 p-4">
              <ShieldCheck className="h-5 w-5 text-blue-600" />
              <div className="mt-2 font-display text-sm font-bold text-[#0A192F]">
                Store Review Ready
              </div>
              <p className="mt-1 text-xs leading-relaxed text-slate-600">
                Built to meet Google Play and Apple App Store privacy, permission, and billing rules.
              </p>
            </div>
            <div className="rounded-xl bg-slate-50 p-4">
              <Cpu className="h-5 w-5 text-blue-600" />
              <div className="mt-2 font-display text-sm font-bold text-[#0A192F]">
                100% Client IP Transfer
              </div>
              <p className="mt-1 text-xs leading-relaxed text-slate-600">
                Direct Git repository delivery with full NDA protection and zero vendor lock-in.
              </p>
            </div>
          </div>

          <div className="mt-7 flex flex-col items-start justify-between gap-4 border-t border-slate-100 pt-6 sm:flex-row sm:items-center">
            <div>
              <div className="font-display text-base font-bold text-[#0A192F]">
                Planning a mobile or AI app like {study.appName}?
              </div>
              <div className="text-xs text-slate-600">
                Receive a custom mobile architecture blueprint and timeline in 48 hours.
              </div>
            </div>
            <Link
              to={`/contact?service=${encodeURIComponent('AI / OCR / Document Scanner App')}&ref=${encodeURIComponent(study.appName)}`}
              className="inline-flex items-center gap-2 rounded-xl bg-[#2563EB] px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
            >
              Build a Similar App
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Next Case Studies Navigation */}
        {otherStudies.length > 0 && (
          <div className="mt-10">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              More Built by Appzys Case Studies
            </h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {otherStudies.map((other) => (
                <Link
                  key={other.slug}
                  to={`/case-studies/${other.slug}`}
                  className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-blue-300"
                >
                  <div className="flex items-center justify-between text-xs font-semibold text-blue-700">
                    <span>{other.category}</span>
                    <span>{other.installsLabel}</span>
                  </div>
                  <div className="mt-2 font-display text-lg font-bold text-[#0A192F] group-hover:text-blue-700">
                    {other.appName}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
