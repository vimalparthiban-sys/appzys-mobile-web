import { Check, FileText, Languages, PenTool, ScanText, Sparkles } from 'lucide-react'

export default function CaseStudyMiniPreview({ slug }) {
  if (slug === 'copy-text-on-screen') {
    return (
      <div className="relative overflow-hidden rounded-xl border border-slate-700/80 bg-[#080E20] p-3.5">
        <div className="flex items-center justify-between text-[10px] font-semibold text-slate-400">
          <span className="inline-flex items-center gap-1 text-blue-300">
            <ScanText className="h-3 w-3" />
            Screen Capture Overlay
          </span>
          <span className="rounded bg-blue-500/20 px-1.5 py-0.5 text-blue-300">
            500K+ Play
          </span>
        </div>

        <div className="relative mt-2.5 rounded-lg border border-blue-500/40 bg-slate-900/90 p-2.5">
          <div className="animate-scan-beam pointer-events-none absolute inset-x-1 top-1 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
          <div className="flex items-center justify-between text-[11px] text-slate-200">
            <span className="rounded border border-blue-400/50 bg-blue-500/10 px-1.5 py-0.5 font-mono text-[10px] text-blue-200">
              +91 90253 59351
            </span>
            <span className="inline-flex items-center gap-0.5 text-[10px] font-semibold text-blue-300">
              <Check className="h-3 w-3" /> Copied
            </span>
          </div>
          <div className="mt-2 flex items-center justify-between text-[10px] text-slate-400">
            <span>support@appzys.com</span>
            <span className="inline-flex items-center gap-1 text-blue-300">
              <Languages className="h-3 w-3" /> Translate
            </span>
          </div>
        </div>
      </div>
    )
  }

  if (slug === 'ai-text-scanner') {
    return (
      <div className="relative overflow-hidden rounded-xl border border-slate-700/80 bg-[#080E20] p-3.5">
        <div className="flex items-center justify-between text-[10px] font-semibold text-slate-400">
          <span className="inline-flex items-center gap-1 text-blue-300">
            <FileText className="h-3 w-3" />
            Document OCR + AI
          </span>
          <span className="rounded bg-blue-500/25 px-1.5 py-0.5 text-blue-200">
            PDF &rarr; Text
          </span>
        </div>

        <div className="mt-2.5 grid grid-cols-2 gap-2">
          <div className="rounded-lg border border-dashed border-blue-400/50 bg-slate-900/90 p-2">
            <div className="h-1.5 w-10 rounded bg-slate-600" />
            <div className="mt-1.5 h-1.5 w-14 rounded bg-slate-700" />
            <div className="mt-1.5 h-1.5 w-12 rounded bg-slate-700" />
            <div className="mt-2 text-[9px] font-semibold text-blue-300">100K+ Play</div>
          </div>
          <div className="rounded-lg border border-blue-400/40 bg-blue-950/60 p-2">
            <div className="inline-flex items-center gap-1 text-[9px] font-bold text-blue-200">
              <Sparkles className="h-2.5 w-2.5 text-blue-300" /> AI Summary
            </div>
            <p className="mt-1 text-[9px] leading-snug text-slate-300">
              Multilingual OCR, Q&amp;A &amp; batch export ready.
            </p>
          </div>
        </div>
      </div>
    )
  }

  if (slug === 'ai-transcript-audio-to-text') {
    return (
      <div className="relative overflow-hidden rounded-xl border border-slate-700/80 bg-[#080E20] p-3.5">
        <div className="flex items-center justify-between text-[10px] font-semibold text-slate-400">
          <span className="inline-flex items-center gap-1 text-blue-300">
            <Sparkles className="h-3 w-3" />
            Audio &rarr; AI Transcript
          </span>
          <span className="rounded bg-blue-500/20 px-1.5 py-0.5 text-blue-200">
            Multilingual
          </span>
        </div>

        <div className="mt-2.5 rounded-lg border border-slate-700 bg-slate-900/90 p-2.5">
          <div className="flex items-center gap-1">
            <span className="h-2 w-1 rounded bg-blue-400" />
            <span className="h-4 w-1 rounded bg-blue-300" />
            <span className="h-3 w-1 rounded bg-blue-400" />
            <span className="h-5 w-1 rounded bg-blue-200" />
            <span className="h-2.5 w-1 rounded bg-blue-400" />
            <span className="ml-2 text-[10px] font-medium text-slate-300">
              &ldquo;Action items summarized &amp; translated&rdquo;
            </span>
          </div>
          <div className="mt-2 flex items-center justify-between border-t border-slate-800 pt-1.5 text-[10px]">
            <span className="font-mono text-blue-300">AI Summary + Q&amp;A</span>
            <span className="text-slate-400">10K+ Play</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative overflow-hidden rounded-xl border border-slate-700/80 bg-[#080E20] p-3.5">
      <div className="flex items-center justify-between text-[10px] font-semibold text-slate-400">
        <span className="inline-flex items-center gap-1 text-blue-300">
          <PenTool className="h-3 w-3" />
          Handwriting AI Engine
        </span>
        <span className="rounded bg-blue-500/20 px-1.5 py-0.5 text-blue-200">
          10K+ Play
        </span>
      </div>

      <div className="mt-2.5 rounded-lg border border-slate-700 bg-slate-900/90 p-2.5">
        <div className="font-serif text-xs italic text-slate-300">
          &ldquo;Sprint 1: Launch OCR v2.0&rdquo;
        </div>
        <div className="mt-2 flex items-center justify-between border-t border-slate-800 pt-1.5 text-[10px]">
          <span className="font-mono text-blue-300">&rarr; Folder-Organized Note</span>
          <span className="text-slate-400">Editable</span>
        </div>
      </div>
    </div>
  )
}
