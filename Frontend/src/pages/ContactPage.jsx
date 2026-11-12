import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import {
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'
import { api } from '../services/api'

const SERVICE_OPTIONS = [
  '01. Mobile App Development (Flutter)',
  '02. AI Integration & Applications',
  '03. App Enhancement & Maintenance',
  '04. Dedicated Flutter Development / White-Label',
]

const BUDGET_OPTIONS = [
  'Under $5,000',
  '$5,000 - $15,000',
  '$15,000 - $35,000',
  '$35,000+',
]

function mapEstimateToBudgetRange(minBudget) {
  if (!minBudget) return '$5,000 - $15,000'
  if (minBudget < 5000) return 'Under $5,000'
  if (minBudget <= 15000) return '$5,000 - $15,000'
  if (minBudget <= 35000) return '$15,000 - $35,000'
  return '$35,000+'
}

function parseFeatures(featuresJson) {
  if (!featuresJson) return []
  try {
    const parsed = JSON.parse(featuresJson)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export default function ContactPage() {
  const [searchParams] = useSearchParams()
  const estimateIdParam = searchParams.get('estimateId')
  const serviceParam = searchParams.get('service')
  const modelParam = searchParams.get('model')
  const refParam = searchParams.get('ref')

  const initialService = SERVICE_OPTIONS.includes(serviceParam)
    ? serviceParam
    : SERVICE_OPTIONS[0]

  const initialMessage = refParam
    ? `Hi Appzys team, I would like to discuss a mobile app similar to "${refParam}".`
    : modelParam
    ? `Hi Appzys team, I'm interested in the "${modelParam}" engagement model.`
    : ''

  const [attachedEstimate, setAttachedEstimate] = useState(null)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceType: initialService,
    budgetRange: BUDGET_OPTIONS[1],
    message: initialMessage,
    website: '', // honeypot field
  })
  const [submitting, setSubmitting] = useState(false)
  const [status, setStatus] = useState({ type: '', text: '' })

  useEffect(() => {
    if (!estimateIdParam) return
    let active = true
    api
      .getEstimateById(estimateIdParam)
      .then((res) => {
        if (active && res.data) {
          setAttachedEstimate(res.data)
          setForm((prev) => ({
            ...prev,
            budgetRange: mapEstimateToBudgetRange(res.data.minBudget),
            serviceType:
              res.data.aiLevel && res.data.aiLevel !== 'none'
                ? 'AI / OCR / Document Scanner App'
                : prev.serviceType,
          }))
        }
      })
      .catch(() => {})
    return () => {
      active = false
    }
  }, [estimateIdParam])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setStatus({ type: '', text: '' })

    try {
      const res = await api.submitLead({
        ...form,
        estimateId: attachedEstimate?.id ?? null,
        sourcePage: '/contact',
      })
      setStatus({
        type: 'success',
        text:
          res.message ||
          'Thank you! Your request has been saved. Our senior engineers will reply within 48 hours.',
      })
      setForm({
        name: '',
        email: '',
        phone: '',
        company: '',
        serviceType: SERVICE_OPTIONS[0],
        budgetRange: BUDGET_OPTIONS[1],
        message: '',
        website: '',
      })
    } catch (err) {
      setStatus({
        type: 'error',
        text: err.message || 'Unable to submit right now. Please check backend connection.',
      })
    } finally {
      setSubmitting(false)
    }
  }

  const attachedFeatures = parseFeatures(attachedEstimate?.featuresJson)

  return (
    <div className="py-14 sm:py-18">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        {/* Left Pitch & Audit Deliverable Info */}
        <div className="lg:col-span-5">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-700">
            <Sparkles className="h-3.5 w-3.5" />
            Free 48-Hr Architecture Audit
          </span>
          <h1 className="mt-4 font-display text-3xl font-extrabold text-[#0A192F]">
            Share Your App Idea With Our Senior Engineers
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            No pushy sales reps. You speak directly with the engineers who build and ship mobile
            apps to Google Play and the Apple App Store.
          </p>

          <div className="mt-8 space-y-4 rounded-2xl border border-slate-200 bg-white p-6">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
              What You Receive in 48 Hours
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
              <div>
                <h2 className="text-sm font-bold text-[#0A192F]">Flutter &amp; AI Architecture Plan</h2>
                <p className="text-xs text-slate-600">
                  Clear feasibility on Flutter, Provider, Firebase Cloud Functions &amp; AI API integration.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
              <div>
                <h2 className="text-sm font-bold text-[#0A192F]">Realistic Timeline &amp; Cost</h2>
                <p className="text-xs text-slate-600">
                  Transparent MVP milestone breakdown with zero hidden agency fees.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" />
              <div>
                <h2 className="text-sm font-bold text-[#0A192F]">NDA &amp; Full IP Protection</h2>
                <p className="text-xs text-slate-600">
                  Your idea and 100% of the source code stay strictly yours from Sprint 1.
                </p>
              </div>
            </div>
          </div>

          {/* Direct Studio Contact Details */}
          <div className="mt-5 space-y-2.5 rounded-2xl border border-blue-900/30 bg-gradient-to-r from-[#0A192F] via-[#0F2557] to-[#1D4ED8] p-6 text-xs text-blue-100 shadow-lg">
            <div className="font-display text-sm font-bold text-white">
              Appzys Technologies Pvt. Ltd.
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-blue-300" />
              <span>support@appzys.com &bull; hello@appzys.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-blue-300" />
              <span>+91 90253 59351</span>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blue-300" />
              <span>Chennai / Kanchipuram, Tamil Nadu, India</span>
            </div>
          </div>
        </div>

        {/* Right Form Panel */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
          >
            {/* Hidden honeypot against automated bots */}
            <input
              type="text"
              name="website"
              value={form.website}
              onChange={handleChange}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            {attachedEstimate && (
              <div className="mb-5 rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-xs text-blue-950">
                <div className="font-bold">
                  Attached Scope Estimate #{attachedEstimate.id}:{' '}
                  ${attachedEstimate.minBudget?.toLocaleString()} &ndash; $
                  {attachedEstimate.maxBudget?.toLocaleString()} ({attachedEstimate.estWeeks} weeks)
                </div>
                <div className="mt-1 text-blue-800">
                  Platform: <strong>{attachedEstimate.platform}</strong> &bull; UI:{' '}
                  <strong>{attachedEstimate.uiLevel}</strong> &bull; AI:{' '}
                  <strong>{attachedEstimate.aiLevel}</strong>
                </div>
                {attachedFeatures.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-1">
                    {attachedFeatures.map((feat) => (
                      <span
                        key={feat}
                        className="rounded bg-white px-2 py-0.5 text-[11px] font-medium text-blue-800 ring-1 ring-blue-200"
                      >
                        {feat}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )}

            {(modelParam || refParam) && !attachedEstimate && (
              <div className="mb-5 rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-xs text-blue-950">
                <strong>Selected Inquiry Context:</strong>{' '}
                {modelParam ? `Engagement Model — ${modelParam}` : `Similar App Reference — ${refParam}`}
              </div>
            )}

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-xs font-semibold text-slate-700">
                  Your Name *
                </label>
                <input
                  required
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Vimal Kumar"
                  className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm focus:border-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-semibold text-slate-700">
                  Work Email *
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm focus:border-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-semibold text-slate-700">
                  Phone / WhatsApp
                </label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91 98XXX XXXXX"
                  className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm focus:border-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-semibold text-slate-700">
                  Company / Startup
                </label>
                <input
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Your Company"
                  className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm focus:border-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-semibold text-slate-700">
                  Project Focus
                </label>
                <select
                  name="serviceType"
                  value={form.serviceType}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm focus:border-blue-500 focus:outline-none"
                >
                  {SERVICE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-semibold text-slate-700">
                  Estimated Budget
                </label>
                <select
                  name="budgetRange"
                  value={form.budgetRange}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm focus:border-blue-500 focus:outline-none"
                >
                  {BUDGET_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-4">
              <label className="mb-1.5 block text-xs font-semibold text-slate-700">
                Tell us about your app idea *
              </label>
              <textarea
                required
                rows={4}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Target users, key features, or timeline goals..."
                className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm focus:border-blue-500 focus:outline-none"
              />
            </div>

            {status.text && (
              <div
                className={`mt-4 rounded-xl px-4 py-3 text-sm font-medium ${
                  status.type === 'success'
                    ? 'bg-blue-50 text-blue-800'
                    : 'bg-rose-50 text-rose-700'
                }`}
              >
                {status.text}
              </div>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#2563EB] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 disabled:opacity-60"
            >
              <Send className="h-4 w-4" />
              {submitting ? 'Submitting Request...' : 'Request My Free 48-Hr Audit'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
