import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, Layers } from 'lucide-react'

const STEPS = [
  {
    num: '01',
    title: 'Initial Analysis',
    duration: 'Days 1–2',
    desc: 'It starts with understanding and analysis of your requirements. We assess technical feasibility across Flutter, Firebase, and AI integrations to provide viable solutions and a clear roadmap.',
    deliverable: 'Flutter Architecture Flow (Provider + Firebase + Cloud Functions) & Fixed Sprint Roadmap',
    gate: 'Zero ambiguity on scope & budget before kickoff',
  },
  {
    num: '02',
    title: 'Designing',
    duration: 'Week 1–2',
    desc: 'Our team plans every screen, navigation flow, and clickable wireframe/blueprint so you can validate the complete mobile user journey before production coding starts.',
    deliverable: 'Interactive Screen Flows, Figma UI Handoff & Material 3 / Cupertino Specs',
    gate: '100% UI/UX workflow sign-off from your team',
  },
  {
    num: '03',
    title: 'Development',
    duration: 'Weekly Drops',
    desc: 'Once the design is finalized, we begin end-to-end Flutter & Dart development—implementing Provider state management, REST APIs, Firebase Cloud Functions, and AI workflows with weekly builds.',
    deliverable: 'Weekly TestFlight (iOS) & Play Internal (Android) Builds + Direct Git Commits',
    gate: 'Live Friday build walkthrough & backlog review',
  },
  {
    num: '04',
    title: 'Testing',
    duration: 'Pre-Release',
    desc: 'To ensure reliable operation, security, and bug-free functionality, we carry out functional, widget, and integration testing along with user acceptance testing (UAT) across real devices.',
    deliverable: 'Scoped Functional & Widget QA Report + Device Compatibility Verification',
    gate: 'Zero blocker defects across target Android & iOS versions',
  },
  {
    num: '05',
    title: 'Deployment',
    duration: 'Store Launch',
    desc: 'We prepare production builds and guide your mobile app through Google Play Console and Apple App Store review, complete with full source-code and IP handover.',
    deliverable: 'Production APK/AAB & IPA Builds + Guided Store Release & 100% IP Handover',
    gate: 'Live store release & analytics telemetry verified',
  },
  {
    num: '06',
    title: 'Post Deployment Maintenance',
    duration: 'Ongoing Support',
    desc: 'We provide end-to-end post-deployment support—covering Flutter SDK & dependency upgrades, bug fixes, new feature enhancements, and monthly maintenance retainers as your product grows.',
    deliverable: 'Flutter Dependency Upgrades, Bug Fixes, Feature Sprints & Monthly Status Reports',
    gate: 'Continuous stability & long-term product evolution',
  },
]

export default function DevelopmentProcess() {
  return (
    <section className="border-t border-slate-200 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Left Sticky Column */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                Transparent Delivery Process
              </span>
              <h2 className="mt-2 font-display text-3xl font-extrabold leading-tight text-black sm:text-4xl">
                Our Mobile Application Development Process
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-black sm:text-base">
                As a focused Flutter &amp; AI engineering studio, we follow a streamlined{' '}
                <Link
                  to="/services/mobile-app-development"
                  className="font-semibold text-[#1D63ED] underline decoration-blue-200 underline-offset-4 hover:text-[#1652CA]"
                >
                  mobile app development workflow
                </Link>{' '}
                tailored to your product requirements to achieve reliable, store-ready outcomes.
              </p>
              <Link
                to="/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#1D63ED] px-6 py-3 text-sm font-bold text-white shadow-md shadow-blue-500/20 transition hover:bg-[#1652CA]"
              >
                Talk To Our Flutter Experts
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Right Vertical Dashed Timeline (01 to 06) */}
          <div className="lg:col-span-8">
            <div className="relative space-y-5 pl-12 before:absolute before:bottom-6 before:left-[17px] before:top-6 before:border-l-2 before:border-dashed before:border-slate-300">
              {STEPS.map((step) => (
                <div key={step.num} className="group relative flex items-start">
                  <span className="absolute -left-12 top-5 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#1D63ED] bg-white font-display text-xs font-extrabold text-[#1D63ED] transition duration-300 group-hover:bg-[#1D63ED] group-hover:text-white">
                    {step.num}
                  </span>

                  <div className="w-full rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs transition duration-300 group-hover:-translate-y-1 group-hover:border-blue-400 group-hover:shadow-md">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="font-display text-lg font-bold text-black transition-colors group-hover:text-blue-600">
                        {step.title}
                      </h3>
                      <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-[11px] font-semibold text-[#1D63ED]">
                        {step.duration}
                      </span>
                    </div>

                    <p className="mt-2 text-sm leading-relaxed text-black">{step.desc}</p>

                    <div className="mt-4 grid gap-3 border-t border-slate-100 pt-3.5 text-xs sm:grid-cols-2">
                      <div className="flex items-start gap-2 text-slate-700">
                        <Layers className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#1D63ED]" />
                        <span>{step.deliverable}</span>
                      </div>
                      <div className="flex items-start gap-2 text-slate-700">
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#1D63ED]" />
                        <span>{step.gate}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
