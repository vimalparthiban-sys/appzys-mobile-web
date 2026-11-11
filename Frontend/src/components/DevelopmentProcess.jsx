const STEPS = [
  {
    num: '01',
    title: 'Discovery & 48-Hr Blueprint',
    desc: 'We review your business goals, target users, and monetization model—delivering a clear architecture & milestone roadmap.',
  },
  {
    num: '02',
    title: 'Interactive UI/UX Prototype',
    desc: 'Clickable Figma user flows and design system reviewed with you before a single line of production code is written.',
  },
  {
    num: '03',
    title: 'Agile Weekly Sprints',
    desc: 'Senior engineers ship weekly TestFlight (iOS) & Play Internal (Android) builds directly into your Git repository.',
  },
  {
    num: '04',
    title: 'QA & Store Compliance',
    desc: 'Automated API checks, real-device testing across screen sizes, and Apple/Google Play review compliance.',
  },
  {
    num: '05',
    title: 'Launch, ASO & Scale',
    desc: 'Store listing optimization, crash monitoring, and continuous feature iterations as your user base grows.',
  },
]

export default function DevelopmentProcess() {
  return (
    <section className="border-t border-slate-200 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-700">
            Transparent Delivery Process
          </span>
          <h2 className="mt-2 font-display text-2xl font-extrabold text-[#0B132B] sm:text-3xl">
            From Idea to Live App Store Launch in 5 Predictable Steps
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {STEPS.map((step) => (
            <div
              key={step.num}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#4F46E5] text-xs font-extrabold text-white">
                {step.num}
              </span>
              <h3 className="mt-4 font-display text-base font-bold text-[#0B132B]">{step.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
