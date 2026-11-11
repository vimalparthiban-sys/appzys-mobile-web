import { useState } from 'react'
import { CheckCircle2, Send, ShieldCheck } from 'lucide-react'
import { api } from '../services/api'

const initialForm = {
  name: '',
  email: '',
  phone: '',
  company: '',
  serviceType: 'Mobile App (iOS & Android)',
  budgetRange: '$5,000 - $15,000',
  message: '',
  website: '', // honeypot field
}

export default function ContactPage() {
  const [form, setForm] = useState(initialForm)
  const [submitting, setSubmitting] = useState(false)
  const [status, setStatus] = useState({ type: '', text: '' })

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
        sourcePage: '/contact',
      })
      setStatus({
        type: 'success',
        text: res.message || 'Thank you! Your request has been saved. We will reply within 48 hours.',
      })
      setForm(initialForm)
    } catch (err) {
      setStatus({
        type: 'error',
        text: err.message || 'Unable to submit right now. Please check backend connection.',
      })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="py-14 sm:py-18">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-5">
          <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-indigo-700">
            Free 48-Hr Architecture Audit
          </span>
          <h1 className="mt-4 font-display text-3xl font-extrabold text-[#0B132B]">
            Share Your App Idea With Our Senior Engineers
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            No pushy sales reps. You speak directly with the engineers who build and ship mobile
            apps to Google Play and the Apple App Store.
          </p>

          <div className="mt-8 space-y-4 rounded-2xl border border-slate-200 bg-white p-6">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600" />
              <div>
                <h2 className="text-sm font-bold text-[#0B132B]">Recommended Tech Stack</h2>
                <p className="text-xs text-slate-600">
                  Clear advice on Native vs. Flutter/React Native &amp; AI integration.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600" />
              <div>
                <h2 className="text-sm font-bold text-[#0B132B]">Realistic Timeline &amp; Cost</h2>
                <p className="text-xs text-slate-600">
                  Transparent MVP milestone breakdown with zero hidden fees.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <ShieldCheck className="mt-0.5 h-5 w-5 text-indigo-600" />
              <div>
                <h2 className="text-sm font-bold text-[#0B132B]">NDA &amp; Full IP Protection</h2>
                <p className="text-xs text-slate-600">
                  Your idea and 100% of the source code stay strictly yours.
                </p>
              </div>
            </div>
          </div>
        </div>

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
                  className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm focus:border-indigo-500 focus:outline-none"
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
                  className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm focus:border-indigo-500 focus:outline-none"
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
                  className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm focus:border-indigo-500 focus:outline-none"
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
                  className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm focus:border-indigo-500 focus:outline-none"
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
                  className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm focus:border-indigo-500 focus:outline-none"
                >
                  <option>Mobile App (iOS &amp; Android)</option>
                  <option>Flutter / React Native Cross-Platform</option>
                  <option>AI / OCR / Document Scanner App</option>
                  <option>UI/UX Design &amp; Prototype</option>
                  <option>Dedicated Engineering Pod</option>
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
                  className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm focus:border-indigo-500 focus:outline-none"
                >
                  <option>Under $5,000</option>
                  <option>$5,000 - $15,000</option>
                  <option>$15,000 - $35,000</option>
                  <option>$35,000+</option>
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
                className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm focus:border-indigo-500 focus:outline-none"
              />
            </div>

            {status.text && (
              <div
                className={`mt-4 rounded-xl px-4 py-3 text-sm font-medium ${
                  status.type === 'success'
                    ? 'bg-emerald-50 text-emerald-800'
                    : 'bg-rose-50 text-rose-700'
                }`}
              >
                {status.text}
              </div>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#4F46E5] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 disabled:opacity-60"
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
