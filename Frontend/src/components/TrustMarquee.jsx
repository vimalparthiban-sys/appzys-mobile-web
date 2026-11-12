import { Award, CheckCircle2, ShieldCheck, Smartphone, Sparkles, Star } from 'lucide-react'

const MARQUEE_ITEMS = [
  { icon: Smartphone, text: '500K+ Copy Text On Screen Downloads' },
  { icon: Star, text: '4.6/5 App Store Rating (AI Scanner)' },
  { icon: Sparkles, text: '100K+ AI Text Scanner Downloads' },
  { icon: CheckCircle2, text: '10K+ AI Transcript & Handwriting Apps' },
  { icon: ShieldCheck, text: 'Built by Us • Used in the Real World' },
  { icon: Award, text: 'Flutter & Dart + Firebase + AI APIs' },
]

export default function TrustMarquee() {
  return (
    <section className="overflow-hidden border-y border-slate-200 bg-white py-4">
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent" />

        <div className="animate-marquee flex items-center gap-6">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={`${item.text}-${idx}`}
                className="flex shrink-0 items-center gap-2 rounded-full border border-slate-200/90 bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-700"
              >
                <Icon className="h-3.5 w-3.5 text-[#1D63ED]" />
                <span>{item.text}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
