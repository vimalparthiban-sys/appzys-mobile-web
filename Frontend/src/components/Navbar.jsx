import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, ArrowRight, Smartphone, Sparkles } from 'lucide-react'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Mobile Services', to: '/services/mobile-app-development' },
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#0B132B] via-[#4F46E5] to-[#06B6D4] text-white shadow-sm">
              <Smartphone className="h-5 w-5" />
            </div>
            <div>
              <span className="font-display text-lg font-extrabold tracking-tight text-[#0B132B]">
                Appzys
              </span>
              <span className="ml-1.5 hidden rounded-full bg-indigo-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-indigo-700 sm:inline-block">
                AI &amp; Mobile Studio
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-indigo-600'
                      : 'text-slate-600 hover:text-[#0B132B]'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-[#4F46E5] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
            >
              <Sparkles className="h-4 w-4" />
              Free 48-Hr Audit
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-lg border border-slate-200 p-2 text-slate-700 md:hidden"
            aria-label="Toggle navigation menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="border-t border-slate-200 bg-white px-4 py-4 md:hidden">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `rounded-lg px-3 py-2 text-sm font-semibold ${
                      isActive ? 'bg-indigo-50 text-indigo-700' : 'text-slate-700'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[#4F46E5] px-4 py-2.5 text-sm font-semibold text-white"
              >
                Get Free 48-Hr App Audit
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Thumb-friendly sticky mobile CTA bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 px-4 py-2.5 backdrop-blur-md md:hidden">
        <div className="flex items-center gap-2.5">
          <Link
            to="/case-studies"
            className="flex-1 rounded-xl border border-slate-300 px-3 py-2.5 text-center text-xs font-semibold text-slate-800"
          >
            Live App Proof
          </Link>
          <Link
            to="/contact"
            className="flex-1 rounded-xl bg-[#4F46E5] px-3 py-2.5 text-center text-xs font-semibold text-white shadow-sm"
          >
            Free App Audit
          </Link>
        </div>
      </div>
    </>
  )
}
