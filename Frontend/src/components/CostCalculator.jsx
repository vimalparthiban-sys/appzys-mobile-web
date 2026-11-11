import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Calculator, Check, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react'
import { api } from '../services/api'

const PLATFORMS = [
  { id: 'flutter', label: 'Flutter / Cross-Platform', sub: 'iOS + Android (1 Codebase)', base: 5500 },
  { id: 'react-native', label: 'React Native', sub: 'JS/TS Cross-Platform', base: 5500 },
  { id: 'single-native', label: 'Single Native', sub: 'iOS (Swift) or Android (Kotlin)', base: 4500 },
  { id: 'both-native', label: 'Dual Native', sub: 'Separate Swift + Kotlin Apps', base: 9000 },
]

const UI_LEVELS = [
  { id: 'mvp', label: 'Clean MVP UI', cost: 800, weeks: 0 },
  { id: 'custom', label: 'Custom Branded UX', cost: 2000, weeks: 1 },
  { id: 'design-system', label: 'Full Design System', cost: 3500, weeks: 1 },
]

const AI_LEVELS = [
  { id: 'none', label: 'Standard App (No AI)', cost: 0, weeks: 0 },
  { id: 'ai-assistant', label: 'AI Chat / Summarization', cost: 2200, weeks: 2 },
  { id: 'custom-ai-ocr', label: 'Custom OCR & Vision AI', cost: 4000, weeks: 2 },
]

const FEATURE_OPTIONS = [
  'User Auth & Social Login',
  'Payments & Subscriptions',
  'Real-Time Chat & Push',
  'Admin Web Dashboard',
  'Offline Mode & Local Cache',
  'Multi-Language Localization',
]

export default function CostCalculator() {
  const [platform, setPlatform] = useState('flutter')
  const [uiLevel, setUiLevel] = useState('custom')
  const [aiLevel, setAiLevel] = useState('none')
  const [features, setFeatures] = useState(['User Auth & Social Login', 'Admin Web Dashboard'])
  const [saving, setSaving] = useState(false)
  const [savedEstimate, setSavedEstimate] = useState(null)
  const [errorMsg, setErrorMsg] = useState('')

  const toggleFeature = (feature) => {
    setSavedEstimate(null)
    setFeatures((prev) =>
      prev.includes(feature) ? prev.filter((item) => item !== feature) : [...prev, feature]
    )
  }

  const estimate = useMemo(() => {
    const p = PLATFORMS.find((x) => x.id === platform) || PLATFORMS[0]
    const u = UI_LEVELS.find((x) => x.id === uiLevel) || UI_LEVELS[0]
    const a = AI_LEVELS.find((x) => x.id === aiLevel) || AI_LEVELS[0]

    const minBudget = p.base + u.cost + a.cost + features.length * 750
    const maxBudget = Math.round(minBudget * 1.3)
    const estWeeks = Math.max(4, 4 + features.length + a.weeks + u.weeks)

    return { minBudget, maxBudget, estWeeks }
  }, [platform, uiLevel, aiLevel, features])

  const handleSaveEstimate = async () => {
    setSaving(true)
    setErrorMsg('')
    try {
      const res = await api.submitEstimate({
        leadId: null,
        platform,
        uiLevel,
        features,
        aiLevel,
      })
      setSavedEstimate(res.data)
    } catch (err) {
      setErrorMsg(
        err.message || 'Estimate ready! Click below to request your free 48-Hr Audit.'
      )
    } finally {
      setSaving(false)
    }
  }

  return (
    <section id="estimator" className="border-y border-slate-200 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-indigo-600">
            <Calculator className="h-3.5 w-3.5" />
            Interactive Scope &amp; Budget Planner
          </span>
          <h2 className="mt-2 font-display text-2xl font-extrabold text-[#0B132B] sm:text-3xl">
            Estimate Your Mobile App Cost &amp; Launch Timeline in 30 Seconds
          </h2>
          <p className="mt-2 text-sm text-slate-600 sm:text-base">
            No annoying quote pop-ups. Select your platform and features to get a realistic
            development range upfront.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-12">
          {/* Controls */}
          <div className="space-y-6 rounded-2xl border border-slate-200 bg-slate-50 p-6 lg:col-span-8">
            {/* Step 1: Platform */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                1. Choose Target Platform
              </h3>
              <div className="mt-2.5 grid gap-2.5 sm:grid-cols-2">
                {PLATFORMS.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      setPlatform(item.id)
                      setSavedEstimate(null)
                    }}
                    className={`rounded-xl border p-3.5 text-left transition ${
                      platform === item.id
                        ? 'border-[#4F46E5] bg-indigo-50/70 ring-1 ring-[#4F46E5]'
                        : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                  >
                    <div className="text-sm font-bold text-[#0B132B]">{item.label}</div>
                    <div className="mt-0.5 text-xs text-slate-500">{item.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2 & 3: UI & AI */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  2. UI/UX Design Depth
                </h3>
                <div className="mt-2.5 space-y-2">
                  {UI_LEVELS.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => {
                        setUiLevel(item.id)
                        setSavedEstimate(null)
                      }}
                      className={`flex w-full items-center justify-between rounded-xl border px-3.5 py-2.5 text-sm font-medium transition ${
                        uiLevel === item.id
                          ? 'border-[#4F46E5] bg-indigo-50/70 text-indigo-900'
                          : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      <span>{item.label}</span>
                      {uiLevel === item.id && <Check className="h-4 w-4 text-indigo-600" />}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  3. AI &amp; OCR Capabilities
                </h3>
                <div className="mt-2.5 space-y-2">
                  {AI_LEVELS.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => {
                        setAiLevel(item.id)
                        setSavedEstimate(null)
                      }}
                      className={`flex w-full items-center justify-between rounded-xl border px-3.5 py-2.5 text-sm font-medium transition ${
                        aiLevel === item.id
                          ? 'border-[#4F46E5] bg-indigo-50/70 text-indigo-900'
                          : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      <span>{item.label}</span>
                      {aiLevel === item.id && <Check className="h-4 w-4 text-indigo-600" />}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Step 4: Features */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                4. Core App Modules ({features.length} selected)
              </h3>
              <div className="mt-2.5 flex flex-wrap gap-2">
                {FEATURE_OPTIONS.map((feat) => {
                  const selected = features.includes(feat)
                  return (
                    <button
                      key={feat}
                      type="button"
                      onClick={() => toggleFeature(feat)}
                      className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-xs font-semibold transition ${
                        selected
                          ? 'border-[#4F46E5] bg-[#4F46E5] text-white'
                          : 'border-slate-300 bg-white text-slate-700 hover:border-slate-400'
                      }`}
                    >
                      {selected && <Check className="h-3.5 w-3.5" />}
                      {feat}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Live Summary Card */}
          <div className="flex flex-col justify-between rounded-2xl bg-[#0B132B] p-6 text-white shadow-xl lg:col-span-4">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-cyan-500/15 px-3 py-1 text-xs font-semibold text-cyan-300">
                <Sparkles className="h-3.5 w-3.5" />
                Live Appzys Estimate
              </div>

              <div className="mt-6">
                <div className="text-xs uppercase tracking-wider text-slate-400">
                  Estimated Investment Range
                </div>
                <div className="mt-1 font-display text-3xl font-extrabold text-white">
                  ${(savedEstimate?.minBudget ?? estimate.minBudget).toLocaleString()} – $
                  {(savedEstimate?.maxBudget ?? estimate.maxBudget).toLocaleString()}
                </div>
              </div>

              <div className="mt-5 rounded-xl border border-slate-800 bg-slate-900/80 p-4">
                <div className="text-xs text-slate-400">Estimated Time to Store Launch</div>
                <div className="mt-1 font-display text-xl font-bold text-cyan-300">
                  {savedEstimate?.estWeeks ?? estimate.estWeeks} Weeks (Agile Sprints)
                </div>
              </div>

              <ul className="mt-5 space-y-2 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  Senior-only product team execution
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  Weekly TestFlight &amp; Play Internal builds
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  100% source code &amp; IP ownership
                </li>
              </ul>
            </div>

            <div className="mt-6 space-y-2.5">
              <button
                type="button"
                onClick={handleSaveEstimate}
                disabled={saving}
                className="w-full rounded-xl bg-[#4F46E5] px-4 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500 disabled:opacity-60"
              >
                {saving ? 'Saving Estimate...' : 'Save This Estimate'}
              </button>

              {savedEstimate && (
                <div className="rounded-xl bg-emerald-500/15 px-3 py-2 text-xs text-emerald-300">
                  Estimate #{savedEstimate.id} saved! Reference it in your 48-Hr Audit.
                </div>
              )}

              {errorMsg && (
                <div className="rounded-xl bg-amber-500/15 px-3 py-2 text-xs text-amber-200">
                  {errorMsg}
                </div>
              )}

              <Link
                to={savedEstimate ? `/contact?estimateId=${savedEstimate.id}` : '/contact'}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:border-slate-500"
              >
                Lock Scope &amp; Get 48-Hr Audit <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
