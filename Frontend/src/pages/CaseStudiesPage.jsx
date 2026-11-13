import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, BarChart3, Cpu, ShieldCheck, Smartphone, Star } from 'lucide-react'
import CaseStudyMiniPreview from '../components/CaseStudyMiniPreview'
import { EMERGING_PRODUCTS, FALLBACK_CASE_STUDIES } from '../data/appData'

export default function CaseStudiesPage() {
  const [studies] = useState(FALLBACK_CASE_STUDIES)
  const [activeCategory, setActiveCategory] = useState('All Apps')

  const categories = useMemo(() => {
    const unique = Array.from(new Set(studies.map((s) => s.category).filter(Boolean)))
    return ['All Apps', ...unique]
  }, [studies])

  const filteredStudies = useMemo(() => {
    if (activeCategory === 'All Apps') return studies
    return studies.filter((s) => s.category === activeCategory)
  }, [studies, activeCategory])

  return (
    <div className="py-14 sm:py-18">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header & Portfolio Proof Banner */}
        <div className="relative overflow-hidden rounded-3xl bg-[#0A192F] p-8 text-white shadow-xl sm:p-10">
          {/* Right-side 3D App Trio Banner Image */}
          <div className="pointer-events-none absolute inset-y-0 right-0 w-full md:w-[65%] lg:w-[55%]">
            <img
              src="/case-studies-banner.png"
              alt="Appzys In-House Live Mobile Portfolio"
              className="h-full w-full object-cover object-right"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F] via-[#0A192F]/80 to-transparent sm:via-[#0A192F]/50 md:via-[#0A192F]/20" />
          </div>

          <div className="relative z-10 max-w-2xl">
            <span className="rounded-full border border-blue-400/30 bg-blue-500/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-200">
              In-House Product Portfolio
            </span>
            <h1 className="mt-4 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              Built by Us. Used in the Real World.
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
              These are APPZYS Technologies&apos; own published and maintained Android &amp; iOS
              applications&mdash;demonstrating practical engineering, AI integration, product
              ownership, and continuous improvement.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-4 border-t border-slate-800/80 pt-6 sm:grid-cols-4">
              <div>
                <div className="font-display text-xl font-extrabold text-blue-300">500K+</div>
                <div className="text-xs text-slate-300">Copy Text On Screen (Play)</div>
              </div>
              <div>
                <div className="font-display text-xl font-extrabold text-blue-300">100K+</div>
                <div className="text-xs text-slate-300">AI Text Scanner (Play)</div>
              </div>
              <div>
                <div className="font-display text-xl font-extrabold text-blue-300">4.6 / 5</div>
                <div className="text-xs text-slate-300">App Store Rating</div>
              </div>
              <div>
                <div className="font-display text-xl font-extrabold text-blue-300">10K+</div>
                <div className="text-xs text-slate-300">AI Transcript &amp; Audio</div>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`rounded-xl px-4 py-2 text-xs font-semibold transition sm:text-sm ${
                  activeCategory === cat
                    ? 'bg-[#1D63ED] text-white shadow-xs'
                    : 'border border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-[#1D63ED]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <span className="text-xs font-medium text-slate-500">
            Showing {filteredStudies.length} production case {filteredStudies.length === 1 ? 'study' : 'studies'}
          </span>
        </div>

        {/* Case Studies List: Challenge -> Architecture -> Store Metrics */}
        <div className="mt-8 space-y-6">
          {filteredStudies.map((item) => (
            <article
              key={item.slug}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs transition hover:border-blue-200 sm:p-8"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                    {item.category}
                  </span>
                  <span className="text-xs font-bold text-blue-700">{item.installsLabel}</span>
                </div>
                <span className="inline-flex items-center gap-1 text-sm font-bold text-blue-600">
                  <Star className="h-4 w-4 fill-blue-500 text-blue-500" />
                  {item.rating} Store Rating
                </span>
              </div>

              <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
                <div className="max-w-2xl">
                  <h2 className="mt-4 font-display text-2xl font-extrabold text-[#0A192F]">
                    <Link to={`/case-studies/${item.slug}`} className="hover:text-blue-700">
                      {item.appName}
                    </Link>
                  </h2>
                  <p className="mt-2 text-sm text-slate-600 sm:text-base">{item.summary}</p>
                </div>
                <div className="w-full shrink-0 lg:w-72">
                  <CaseStudyMiniPreview slug={item.slug} />
                </div>
              </div>

              {/* 3-Column Day 5 Engineering Flow: Challenge -> Architecture -> Store Metrics */}
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-500">
                    <Smartphone className="h-3.5 w-3.5 text-blue-600" />
                    01. Challenge
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-700">{item.challenge}</p>
                </div>

                <div className="rounded-xl border border-blue-200 bg-blue-50/70 p-4">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-700">
                    <Cpu className="h-3.5 w-3.5 text-blue-600" />
                    02. Architecture
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-800">{item.solution}</p>
                </div>

                <div className="rounded-xl border border-blue-200 bg-blue-50/60 p-4">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-800">
                    <BarChart3 className="h-3.5 w-3.5 text-blue-700" />
                    03. Store Metrics
                  </div>
                  <ul className="mt-2 space-y-1.5 text-sm font-medium text-blue-950">
                    <li>&bull; Reach: {item.installsLabel}</li>
                    <li>&bull; Rating: {item.rating}&#9733; Store Avg</li>
                    <li>&bull; QA: 99.8% Crash-Free Target</li>
                  </ul>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-4">
                <div className="flex flex-wrap gap-2">
                  {(item.techStack || []).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    to={`/case-studies/${item.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0A192F] hover:text-blue-600"
                  >
                    Full Architecture Breakdown <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to={`/contact?service=${encodeURIComponent('02. AI Integration & Applications')}&ref=${encodeURIComponent(item.appName)}`}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-blue-50 px-3.5 py-2 text-sm font-semibold text-blue-700 transition hover:bg-blue-100"
                  >
                    Build a Similar App <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Emerging Products: What We Are Building Next */}
        <div className="mt-14">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              What We Are Building Next
            </span>
            <h2 className="mt-2 font-display text-2xl font-extrabold text-black sm:text-3xl">
              Emerging Products in Active Development
            </h2>
            <p className="mt-2 text-sm text-black">
              Early-stage applications currently evolving in our product lab, kept separate from our four established case studies above.
            </p>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {EMERGING_PRODUCTS.map((prod) => (
              <div
                key={prod.name}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#2563EB] via-blue-400 to-[#1D63ED] opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-[#1D63ED]">
                    {prod.category}
                  </span>
                  <span className="text-xs font-semibold text-slate-600">{prod.status}</span>
                </div>
                <h3 className="mt-4 font-display text-xl font-bold text-black transition-colors group-hover:text-blue-600">
                  {prod.name}
                </h3>
                <p className="mt-1 text-xs font-semibold text-[#1D63ED]">{prod.tagline}</p>
                <p className="mt-2.5 text-sm leading-relaxed text-black">{prod.summary}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Pitch CTA */}
        <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-3xl bg-[#0A192F] p-8 text-white sm:flex-row sm:items-center">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-blue-300">
              <ShieldCheck className="h-4 w-4" />
              Practical Mobile &amp; AI Product Experience
            </div>
            <h2 className="mt-1.5 font-display text-2xl font-extrabold">
              Have a Product Idea or Software Challenge?
            </h2>
          </div>
          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#1D63ED] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1652CA]"
          >
            Request Free 48-Hr Audit <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
