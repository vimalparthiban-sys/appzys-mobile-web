import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { SERVICES_LIST } from '../data/appData'

const ENGAGEMENT_MODELS = [
  {
    name: 'Fixed-Scope MVP Sprint',
    timeline: '4–8 Weeks',
    idealFor: 'Founders validating a new iOS/Android product fast with predictable cost.',
    points: ['Clickable UI/UX Prototype', 'Core Mobile + Spring Boot API', 'Play Store & App Store Launch'],
  },
  {
    name: 'Dedicated Senior Pod',
    timeline: 'Monthly Retainer',
    idealFor: 'Growing teams needing direct access to veteran mobile & AI engineers.',
    points: ['Weekly Sprint Demos', 'Direct Slack/WhatsApp Access', '100% Source Code in Your Git'],
  },
  {
    name: 'AI & OCR Modernization',
    timeline: '2–5 Weeks',
    idealFor: 'Existing apps adding document scanning, smart extraction, or LLM workflows.',
    points: ['On-Device / Cloud ML Integration', 'Latency & Accuracy Tuning', 'Zero Disruption to Live Users'],
  },
]

export default function MobileAppServicePage() {
  return (
    <div className="py-14 sm:py-18">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-indigo-700">
            Mobile Application Development Services
          </span>
          <h1 className="mt-4 font-display text-3xl font-extrabold text-[#0B132B] sm:text-4xl">
            Senior-Engineered iOS, Android, Flutter &amp; AI Mobile Apps
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            We combine full-cycle agency execution with real product publishing experience—delivering
            fast, store-compliant mobile apps backed by scalable Java Spring Boot and cloud APIs.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES_LIST.map((item) => (
            <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
                {item.tag}
              </span>
              <h2 className="mt-2 font-display text-lg font-bold text-[#0B132B]">{item.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="font-display text-2xl font-extrabold text-[#0B132B]">
            Flexible Engagement Models
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {ENGAGEMENT_MODELS.map((model) => (
              <div
                key={model.name}
                className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-lg font-bold text-[#0B132B]">{model.name}</h3>
                    <span className="rounded-full bg-cyan-50 px-2.5 py-1 text-xs font-semibold text-cyan-700">
                      {model.timeline}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-slate-600">{model.idealFor}</p>
                  <ul className="mt-4 space-y-2">
                    {model.points.map((pt) => (
                      <li key={pt} className="flex items-center gap-2 text-sm text-slate-700">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  to="/contact"
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-[#4F46E5] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
                >
                  Discuss This Model <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
