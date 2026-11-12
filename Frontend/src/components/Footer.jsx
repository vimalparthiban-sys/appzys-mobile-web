import { Link } from 'react-router-dom'
import { Smartphone, MapPin, Mail, ShieldCheck } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-blue-900/40 bg-gradient-to-r from-[#0A192F] via-[#0F2557] to-[#1D4ED8] pb-20 pt-14 text-blue-100 md:pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#2563EB] to-[#1D63ED] text-white">
                <Smartphone className="h-5 w-5" />
              </div>
              <span className="font-display text-xl font-extrabold text-white">
                Appzys Technologies
              </span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-400">
              Flutter Mobile Application Development &amp; AI Integration Studio. We build
              cross-platform Android &amp; iOS apps, integrate AI workflows, maintain existing
              Flutter codebases, and provide white-label Flutter capacity.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-xs text-blue-300">
              <ShieldCheck className="h-4 w-4 text-blue-400" />
              100% Source-Code IP Ownership &amp; NDA Protection From Day 1
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Navigation</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services/mobile-app-development" className="hover:text-white">
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="hover:text-white">
                  Built by Appzys (Case Studies)
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white">
                  48-Hr Free Architecture Audit
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Studio HQ</h3>
            <ul className="mt-4 space-y-3 text-sm text-blue-100">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blue-200" />
                <span>Chennai / Kanchipuram, Tamil Nadu, India</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-blue-200" />
                <span>hello@appzys.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-white/15 pt-6 text-xs text-blue-100/80 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Appzys Technologies Private Limited. All rights reserved.</p>
          <p>Flutter &amp; Dart &bull; Provider &bull; Firebase &bull; Cloud Functions &bull; AI Integration</p>
        </div>
      </div>
    </footer>
  )
}
