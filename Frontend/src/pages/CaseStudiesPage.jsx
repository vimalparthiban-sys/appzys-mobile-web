import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Star } from 'lucide-react'
import { api } from '../services/api'
import { FALLBACK_CASE_STUDIES } from '../data/appData'

export default function CaseStudiesPage() {
  const [studies, setStudies] = useState(FALLBACK_CASE_STUDIES)

  useEffect(() => {
    let active = true
    api
      .getCaseStudies()
      .then((res) => {
        if (active && Array.isArray(res.data) && res.data.length > 0) {
          setStudies(res.data)
        }
      })
      .catch(() => {
        // Fallback keeps page working even when Spring Boot API is offline
      })
    return () => {
      active = false
    }
  }, [])

  return (
    <div className="py-14 sm:py-18">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <span className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-cyan-700">
              Built by Appzys
            </span>
            <h1 className="mt-3 font-display text-3xl font-extrabold text-[#0B132B] sm:text-4xl">
              Real Mobile Products Shipped &amp; Scaled by Our Team
            </h1>
            <p className="mt-3 text-base text-slate-600">
              Explore how our engineering team solves OCR accuracy, latency, and retention across
              our live consumer apps.
            </p>
          </div>
        </div>

        <div className="mt-10 space-y-6">
          {studies.map((item) => (
            <article
              key={item.slug}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs sm:p-8"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                    {item.category}
                  </span>
                  <span className="text-xs font-bold text-emerald-700">{item.installsLabel}</span>
                </div>
                <span className="inline-flex items-center gap-1 text-sm font-bold text-amber-600">
                  <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                  {item.rating} Store Rating
                </span>
              </div>

              <h2 className="mt-4 font-display text-2xl font-extrabold text-[#0B132B]">
                {item.appName}
              </h2>
              <p className="mt-2 text-sm text-slate-600 sm:text-base">{item.summary}</p>

              <div className="mt-6 grid gap-5 md:grid-cols-2">
                <div className="rounded-xl bg-slate-50 p-4">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Engineering Challenge
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-700">{item.challenge}</p>
                </div>
                <div className="rounded-xl bg-indigo-50/70 p-4">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-700">
                    Appzys Architecture &amp; Solution
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-800">{item.solution}</p>
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
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:text-indigo-700"
                >
                  Build a Similar App <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
