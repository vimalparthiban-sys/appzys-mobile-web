import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowRight,
  Calculator,
  Check,
  CheckCircle2,
  ListChecks,
  Sparkles,
} from 'lucide-react'
import { api } from '../services/api'

const PLATFORMS = [
  { id: 'flutter', label: '01. Flutter Android & iOS MVP', sub: 'Shared Dart Codebase + Provider', base: 5000 },
  { id: 'flutter-ai', label: '02. Flutter + AI Integration App', sub: 'Flutter + Transcription / OCR / PDF AI', base: 6500 },
  { id: 'single-native', label: '03. App Enhancement & Upgrades', sub: 'Existing Flutter Fixes & Features', base: 3000 },
  { id: 'dedicated-flutter', label: '04. Dedicated Flutter Capacity', sub: 'Monthly Team Extension / White-Label', base: 4000 },
]

const UI_LEVELS = [
  {
    id: 'mvp',
    label: 'Clean Functional UI',
    desc: 'Structured Flutter screens, navigation, and clean Material/Cupertino layouts.',
    cost: 700,
    weeks: 0,
  },
  {
    id: 'custom',
    label: 'Figma-to-Flutter Implementation',
    desc: 'Pixel-accurate implementation from your Figma design files and custom branding.',
    cost: 1600,
    weeks: 1,
  },
  {
    id: 'design-system',
    label: 'Multi-Theme & Rich Workflows',
    desc: 'Dark/light theme tokens, responsive tablet/phone layouts, and polished state transitions.',
    cost: 2600,
    weeks: 1,
  },
]

const AI_LEVELS = [
  {
    id: 'none',
    label: 'Standard Flutter App (No AI)',
    desc: 'Core mobile workflows, REST API & Firebase integration without AI pipelines.',
    cost: 0,
    weeks: 0,
  },
  {
    id: 'ai-assistant',
    label: 'AI Chat, Summaries & Text Tools',
    desc: 'Third-party LLM chat, rewriting, quiz/flashcards & Cloud Functions API-key protection.',
    cost: 2000,
    weeks: 2,
  },
  {
    id: 'custom-ai-ocr',
    label: 'Speech Transcription, OCR & PDF Q&A',
    desc: 'Audio/video transcription, document chat, image OCR & handwriting workflows.',
    cost: 3500,
    weeks: 2,
  },
]

const FEATURE_OPTIONS = [
  'Firebase Auth & Database',
  'Cloud Functions API Proxy',
  'Existing REST API Integration',
  'Push Notifications & Analytics',
  'Subscriptions / Payments',
  'Multi-Language Localization',
]

const STEP_LABELS = [
  { num: 1, title: 'Service' },
  { num: 2, title: 'UI Scope' },
  { num: 3, title: 'Integrations' },
  { num: 4, title: 'AI Level' },
]

export default function CostCalculator() {
  const [activeStep, setActiveStep] = useState(1)
  const [showAllSteps, setShowAllSteps] = useState(false)
  const [platform, setPlatform] = useState('flutter')
  const [uiLevel, setUiLevel] = useState('custom')
  const [features, setFeatures] = useState(['Firebase Auth & Database', 'Existing REST API Integration'])
  const [aiLevel, setAiLevel] = useState('none')
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

    const featuresCost = features.length * 750
    const minBudget = p.base + u.cost + a.cost + featuresCost
    const maxBudget = Math.round(minBudget * 1.3)
    const estWeeks = Math.max(4, 4 + features.length + a.weeks + u.weeks)

    return {
      platformObj: p,
      uiObj: u,
      aiObj: a,
      featuresCost,
      minBudget,
      maxBudget,
      estWeeks,
    }
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

  const showStep = (stepNum) => showAllSteps || activeStep === stepNum

  return (
    <section id="estimator" className="border-y border-slate-200 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-600">
              <Calculator className="h-3.5 w-3.5" />
              4-Step Scope &amp; Budget Planner
            </span>
            <h2 className="mt-2 font-display text-2xl font-extrabold text-[#0A192F] sm:text-3xl">
              Estimate Your Mobile App Cost &amp; Launch Timeline in 30 Seconds
            </h2>
            <p className="mt-2 text-sm text-slate-600 sm:text-base">
              No annoying quote pop-ups. Walk through Platform, Design, Features, and AI Level to
              receive a transparent budget &amp; sprint estimate upfront.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setShowAllSteps((prev) => !prev)}
            className="inline-flex shrink-0 items-center gap-1.5 self-start rounded-xl border border-slate-300 bg-slate-50 px-3.5 py-2 text-xs font-semibold text-slate-700 transition hover:border-blue-400 hover:text-blue-700"
          >
            <ListChecks className="h-4 w-4" />
            {showAllSteps ? 'Switch to Step-by-Step View' : 'View All 4 Steps Together'}
          </button>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-12">
          {/* Controls Panel */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50 p-6 lg:col-span-8">
            <div>
              {/* 4-Step Progress Bar */}
              {!showAllSteps && (
                <div className="mb-6 grid grid-cols-4 gap-2">
                  {STEP_LABELS.map((step) => {
                    const isCurrent = activeStep === step.num
                    const isCompleted = activeStep > step.num
                    return (
                      <button
                        key={step.num}
                        type="button"
                        onClick={() => setActiveStep(step.num)}
                        className={`flex items-center justify-center gap-1.5 rounded-xl border px-2 py-2.5 text-xs font-bold transition sm:justify-start sm:px-3 ${
                          isCurrent
                            ? 'border-[#2563EB] bg-[#2563EB] text-white shadow-sm'
                            : isCompleted
                            ? 'border-blue-300 bg-blue-50 text-blue-800'
                            : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                        }`}
                      >
                        <span
                          className={`inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] ${
                            isCurrent
                              ? 'bg-white/20 text-white'
                              : isCompleted
                              ? 'bg-blue-600 text-white'
                              : 'bg-slate-100 text-slate-600'
                          }`}
                        >
                          {isCompleted ? <Check className="h-3 w-3" /> : step.num}
                        </span>
                        <span className="hidden sm:inline">{step.title}</span>
                      </button>
                    )
                  })}
                </div>
              )}

              <div className="space-y-6">
                {/* Step 1: Platform */}
                {showStep(1) && (
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Step 1 of 4 &bull; Choose Target Platform
                    </h3>
                    <div className="mt-3 grid gap-3 sm:grid-cols-2">
                      {PLATFORMS.map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => {
                            setPlatform(item.id)
                            setSavedEstimate(null)
                          }}
                          className={`rounded-xl border p-4 text-left transition ${
                            platform === item.id
                              ? 'border-[#2563EB] bg-blue-50/70 ring-1 ring-[#2563EB]'
                              : 'border-slate-200 bg-white hover:border-slate-300'
                          }`}
                        >
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-sm font-bold text-[#0A192F]">{item.label}</span>
                            <span className="text-xs font-bold text-blue-600">
                              ${item.base.toLocaleString()}
                            </span>
                          </div>
                          <div className="mt-1 text-xs text-slate-500">{item.sub}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 2: Design */}
                {showStep(2) && (
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Step 2 of 4 &bull; Mobile UI/UX Design Depth
                    </h3>
                    <div className="mt-3 space-y-2.5">
                      {UI_LEVELS.map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => {
                            setUiLevel(item.id)
                            setSavedEstimate(null)
                          }}
                          className={`flex w-full items-center justify-between gap-4 rounded-xl border p-4 text-left transition ${
                            uiLevel === item.id
                              ? 'border-[#2563EB] bg-blue-50/70 ring-1 ring-[#2563EB]'
                              : 'border-slate-200 bg-white hover:border-slate-300'
                          }`}
                        >
                          <div>
                            <div className="text-sm font-bold text-[#0A192F]">{item.label}</div>
                            <div className="mt-0.5 text-xs text-slate-600">{item.desc}</div>
                          </div>
                          <div className="shrink-0 text-right">
                            <div className="text-xs font-bold text-blue-600">
                              +${item.cost.toLocaleString()}
                            </div>
                            <div className="text-[11px] text-slate-500">
                              +{item.weeks} wk{item.weeks === 1 ? '' : 's'}
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 3: Core Features */}
                {showStep(3) && (
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Step 3 of 4 &bull; Select Core App Modules ({features.length} selected, +$750 / +1 wk each)
                    </h3>
                    <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
                      {FEATURE_OPTIONS.map((feat) => {
                        const selected = features.includes(feat)
                        return (
                          <button
                            key={feat}
                            type="button"
                            onClick={() => toggleFeature(feat)}
                            className={`flex items-center justify-between rounded-xl border px-4 py-3 text-left text-xs font-semibold transition ${
                              selected
                                ? 'border-[#2563EB] bg-[#2563EB] text-white shadow-xs'
                                : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                            }`}
                          >
                            <span>{feat}</span>
                            {selected ? (
                              <Check className="h-4 w-4 shrink-0" />
                            ) : (
                              <span className="text-[11px] font-medium text-slate-400">+$750</span>
                            )}
                          </button>
                        )
                      })}
                    </div>
                  </div>
                )}

                {/* Step 4: AI & OCR Level */}
                {showStep(4) && (
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Step 4 of 4 &bull; Choose AI &amp; OCR Capability Level
                    </h3>
                    <div className="mt-3 space-y-2.5">
                      {AI_LEVELS.map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => {
                            setAiLevel(item.id)
                            setSavedEstimate(null)
                          }}
                          className={`flex w-full items-center justify-between gap-4 rounded-xl border p-4 text-left transition ${
                            aiLevel === item.id
                              ? 'border-[#2563EB] bg-blue-50/70 ring-1 ring-[#2563EB]'
                              : 'border-slate-200 bg-white hover:border-slate-300'
                          }`}
                        >
                          <div>
                            <div className="text-sm font-bold text-[#0A192F]">{item.label}</div>
                            <div className="mt-0.5 text-xs text-slate-600">{item.desc}</div>
                          </div>
                          <div className="shrink-0 text-right">
                            <div className="text-xs font-bold text-blue-600">
                              {item.cost === 0 ? 'Included' : `+$${item.cost.toLocaleString()}`}
                            </div>
                            <div className="text-[11px] text-slate-500">
                              +{item.weeks} wks
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Step Navigation Buttons */}
            {!showAllSteps && (
              <div className="mt-7 flex items-center justify-between border-t border-slate-200 pt-4">
                <button
                  type="button"
                  onClick={() => setActiveStep((prev) => Math.max(1, prev - 1))}
                  disabled={activeStep === 1}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-slate-700 transition hover:border-slate-400 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  Previous Step
                </button>

                <span className="text-xs font-medium text-slate-500">
                  Step {activeStep} of 4
                </span>

                {activeStep < 4 ? (
                  <button
                    type="button"
                    onClick={() => setActiveStep((prev) => Math.min(4, prev + 1))}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-[#1D63ED] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#1652CA]"
                  >
                    Next Step
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleSaveEstimate}
                    disabled={saving}
                    className="inline-flex items-center gap-1.5 rounded-xl border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-semibold text-[#1D63ED] transition hover:bg-blue-100"
                  >
                    {saving ? 'Calculating...' : 'Confirm & Save'}
                    <Check className="h-3.5 w-3.5" />
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Live Summary Card */}
          <div className="flex flex-col justify-between rounded-2xl bg-[#0A192F] p-6 text-white shadow-xl lg:col-span-4">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/15 px-3 py-1 text-xs font-semibold text-blue-300">
                <Sparkles className="h-3.5 w-3.5" />
                Live Appzys Estimate
              </div>

              <div className="mt-5">
                <div className="text-xs uppercase tracking-wider text-slate-400">
                  Estimated Investment Range
                </div>
                <div className="mt-1 font-display text-3xl font-extrabold text-white">
                  ${(savedEstimate?.minBudget ?? estimate.minBudget).toLocaleString()} &ndash; $
                  {(savedEstimate?.maxBudget ?? estimate.maxBudget).toLocaleString()}
                </div>
              </div>

              <div className="mt-4 rounded-xl border border-slate-800 bg-slate-900/80 p-3.5">
                <div className="text-xs text-slate-400">Estimated Time to Store Launch</div>
                <div className="mt-1 font-display text-xl font-bold text-blue-300">
                  {savedEstimate?.estWeeks ?? estimate.estWeeks} Weeks (Agile Sprints)
                </div>
              </div>

              {/* Transparent Line-by-Line Breakdown */}
              <div className="mt-4 space-y-1.5 rounded-xl border border-slate-800/80 bg-slate-900/40 p-3.5 text-xs">
                <div className="flex justify-between text-slate-300">
                  <span>{estimate.platformObj.label}</span>
                  <span className="font-semibold text-white">
                    ${estimate.platformObj.base.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>{estimate.uiObj.label}</span>
                  <span className="font-semibold text-white">
                    +${estimate.uiObj.cost.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Modules ({features.length})</span>
                  <span className="font-semibold text-white">
                    +${estimate.featuresCost.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>{estimate.aiObj.label}</span>
                  <span className="font-semibold text-white">
                    {estimate.aiObj.cost === 0 ? '$0' : `+$${estimate.aiObj.cost.toLocaleString()}`}
                  </span>
                </div>
              </div>

              <ul className="mt-4 space-y-1.5 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-400" />
                  Senior-only product team execution
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-400" />
                  Weekly TestFlight &amp; Play Internal builds
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-400" />
                  100% source code &amp; IP ownership
                </li>
              </ul>
            </div>

            <div className="mt-6 space-y-2.5">
              <button
                type="button"
                onClick={handleSaveEstimate}
                disabled={saving}
                className="w-full rounded-xl bg-[#1D63ED] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#1652CA] disabled:opacity-60"
              >
                {saving ? 'Saving Estimate...' : 'Save This Estimate'}
              </button>

              {savedEstimate && (
                <div className="rounded-xl bg-blue-500/15 px-3 py-2 text-xs text-blue-300">
                  Estimate #{savedEstimate.id} saved! Reference it in your 48-Hr Audit.
                </div>
              )}

              {errorMsg && (
                <div className="rounded-xl bg-blue-500/15 px-3 py-2 text-xs text-blue-200">
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
