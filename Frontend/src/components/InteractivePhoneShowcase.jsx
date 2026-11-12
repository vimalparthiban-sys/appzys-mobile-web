import { useState } from 'react'
import {
  ArrowUpRight,
  Check,
  CheckCircle2,
  Copy,
  GitBranch,
  Languages,
  ScanText,
  Sparkles,
} from 'lucide-react'

const OCR_SAMPLES = [
  {
    id: 'invoice',
    name: 'Printed Page',
    inputTitle: 'Camera Scan • AI Text Scanner',
    sampleInput: 'Printed Contract Page • 4 pages captured -> Clean editable digital text',
    extracted: [
      { type: 'Pipeline', value: 'Camera + Auto-Crop OCR' },
      { type: 'AI Tool', value: 'Summary & Key Points' },
      { type: 'Output', value: 'Batch Export & History' },
    ],
    copyText: 'Printed Contract Page -> Clean editable text + AI summary ready for export.',
    latency: '100K+ Google Play',
  },
  {
    id: 'pdf',
    name: 'PDF Import',
    inputTitle: 'PDF Document • AI Text Scanner',
    sampleInput: 'Q3_Product_Spec.pdf • Imported for multilingual OCR & Q&A',
    extracted: [
      { type: 'Import', value: 'Multi-Page PDF & Image' },
      { type: 'Language', value: 'Multilingual Translation' },
      { type: 'Rating', value: '4.6 / 5 on App Store' },
    ],
    copyText: 'Q3_Product_Spec.pdf imported -> Multilingual OCR & translation complete.',
    latency: '4.6/5 iOS Rating',
  },
  {
    id: 'qa',
    name: 'AI Q&A',
    inputTitle: 'Document Chat • AI Text Scanner',
    sampleInput: 'Ask AI: "Summarize deliverables & payment milestones from this doc"',
    extracted: [
      { type: 'Response', value: '3 Milestones Extracted' },
      { type: 'Workflow', value: 'Interactive Doc Chat' },
      { type: 'Share', value: 'Copy / TXT / PDF Export' },
    ],
    copyText: 'AI Q&A: 3 Milestones extracted from scanned document.',
    latency: 'AI Assisted',
  },
]

const TRANSLATION_TARGETS = [
  {
    id: 'ta',
    label: 'Tamil',
    detected: 'Screenshot • Phone +91 98XXX XXXXX & Email detected',
    translated: 'ஸ்கிரீன்ஷாட் உரையை உடனடியாக நகலெடுத்து மொழிபெயர்க்கவும்.',
    localeNote: 'Copy Text On Screen • 500K+ Play',
  },
  {
    id: 'es',
    label: 'Spanish',
    detected: 'Screenshot • URL & Contact Link detected',
    translated: 'Copie y traduzca texto de cualquier captura de pantalla al instante.',
    localeNote: 'Copy Text On Screen • 4.6/5 iOS',
  },
  {
    id: 'fr',
    label: 'French',
    detected: 'Screenshot • Email & Phone clickable actions ready',
    translated: 'Extrayez, copiez et traduisez le texte de vos captures d’écran.',
    localeNote: 'Clipboard & Instant Share',
  },
  {
    id: 'ja',
    label: 'Japanese',
    detected: 'Screenshot • Multilingual OCR active',
    translated: 'スクリーンショット内のテキストを認識し、すぐにコピー・翻訳します。',
    localeNote: 'Global Language Support',
  },
]

const SPRINT_BUILDS = [
  {
    id: 's1',
    label: 'Record',
    milestone: 'Audio / Video Recording & Import',
    sampleInput: 'Meeting_Sprint_Review.m4a (14:22) • Multilingual speech detected',
    metrics: [
      { type: 'Workflow', value: 'Live & File Audio-to-Text' },
      { type: 'Platforms', value: 'Android & iOS (10K+ Play)' },
      { type: 'AI Ops', value: 'Cloud Functions Proxy' },
    ],
  },
  {
    id: 's2',
    label: 'Summarize',
    milestone: 'AI Transcript Summary & Action Items',
    sampleInput: 'Key decisions: Ship Flutter v2.1 beta Friday + enable PDF export.',
    metrics: [
      { type: 'AI Feature', value: 'Summary + Transcript Q&A' },
      { type: 'Translation', value: 'Multilingual Output' },
      { type: 'Cost Guard', value: 'Token & Usage Limits' },
    ],
  },
  {
    id: 's3',
    label: 'Export',
    milestone: 'Review, Save & Share Transcripts',
    sampleInput: 'Clean formatted transcript saved to history & ready for team export.',
    metrics: [
      { type: 'Adoption', value: '10K+ Google Play' },
      { type: 'Use Cases', value: 'Meetings, Lectures & Notes' },
      { type: 'Architecture', value: 'Flutter + Provider + AI' },
    ],
  },
]

const TOP_TABS = [
  { id: 'ocr', label: 'AI Text Scanner', badge: '100K+ • 4.6★ iOS' },
  { id: 'translate', label: 'Copy On Screen', badge: '500K+ Play • 4.6★' },
  { id: 'sprint', label: 'AI Transcript', badge: '10K+ Play • Audio AI' },
]

export default function InteractivePhoneShowcase() {
  const [activeTab, setActiveTab] = useState(0)
  const [ocrIndex, setOcrIndex] = useState(0)
  const [scanning, setScanning] = useState(false)
  const [copied, setCopied] = useState(false)
  const [langIndex, setLangIndex] = useState(0)
  const [sprintIndex, setSprintIndex] = useState(2)

  const currentTab = TOP_TABS[activeTab]
  const currentOcr = OCR_SAMPLES[ocrIndex]
  const currentLang = TRANSLATION_TARGETS[langIndex]
  const currentSprint = SPRINT_BUILDS[sprintIndex]

  const triggerScanPulse = (nextIdx = ocrIndex) => {
    setOcrIndex(nextIdx)
    setCopied(false)
    setScanning(true)
    window.setTimeout(() => setScanning(false), 320)
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(currentOcr.copyText)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    }
  }

  return (
    <div className="relative mx-auto w-full max-w-[350px]">
      <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-tr from-blue-500/25 via-blue-400/20 to-blue-400/15 blur-2xl" />

      <div className="rounded-[2.2rem] border-[6px] border-slate-800 bg-[#0A192F] p-4 text-white shadow-2xl">
        <div className="mx-auto mb-3 h-1.5 w-16 rounded-full bg-slate-700" />

        {/* Phone Header Status */}
        <div className="flex items-center justify-between rounded-xl bg-slate-900/90 px-3 py-2 text-xs">
          <span className="inline-flex items-center gap-1.5 font-semibold text-blue-300">
            <Sparkles className="h-3.5 w-3.5" />
            Interactive Appzys Demo
          </span>
          <span className="rounded-full bg-blue-500/20 px-2 py-0.5 text-[10px] font-semibold text-blue-200">
            {currentTab.badge}
          </span>
        </div>

        {/* Top 3 Mode Switcher Tabs */}
        <div className="mt-3 grid grid-cols-3 gap-1.5">
          {TOP_TABS.map((mode, idx) => (
            <button
              key={mode.id}
              type="button"
              onClick={() => {
                setActiveTab(idx)
                setCopied(false)
              }}
              className={`rounded-lg px-2 py-1.5 text-[11px] font-semibold transition ${
                idx === activeTab
                  ? 'bg-[#1D63ED] text-white shadow-sm'
                  : 'bg-slate-900 text-slate-400 hover:text-white'
              }`}
            >
              {mode.label}
            </button>
          ))}
        </div>

        {/* Mode 1: Interactive OCR Screen Scan */}
        {activeTab === 0 && (
          <div className="mt-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-3.5">
            <div className="flex items-center justify-between text-[11px] text-slate-400">
              <span className="inline-flex items-center gap-1 font-medium text-slate-300">
                <ScanText className="h-3.5 w-3.5 text-blue-400" />
                {currentOcr.inputTitle}
              </span>
              <span className="text-blue-400">
                {scanning ? 'Scanning...' : currentOcr.latency}
              </span>
            </div>

            {/* Interactive sample selector */}
            <div className="mt-2 flex gap-1.5">
              {OCR_SAMPLES.map((sample, idx) => (
                <button
                  key={sample.id}
                  type="button"
                  onClick={() => triggerScanPulse(idx)}
                  className={`flex-1 rounded-md border px-2 py-1 text-[10px] font-semibold transition ${
                    ocrIndex === idx
                      ? 'border-blue-400/60 bg-blue-500/15 text-blue-200'
                      : 'border-slate-800 bg-slate-950/60 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {sample.name}
                </button>
              ))}
            </div>

            <p className="mt-2 rounded-lg bg-slate-950/80 p-2.5 text-xs leading-relaxed text-slate-300">
              {currentOcr.sampleInput}
            </p>

            <div
              className={`mt-2.5 space-y-1.5 transition-opacity duration-200 ${
                scanning ? 'opacity-40' : 'opacity-100'
              }`}
            >
              {currentOcr.extracted.map((row) => (
                <div
                  key={row.type}
                  className="flex items-start justify-between gap-2 rounded-lg border border-slate-800 bg-slate-950/50 px-2.5 py-1.5 text-xs"
                >
                  <span className="shrink-0 font-medium text-slate-400">{row.type}</span>
                  <span className="text-right font-semibold text-blue-200">{row.value}</span>
                </div>
              ))}
            </div>

            <div className="mt-2.5 flex gap-2">
              <button
                type="button"
                onClick={() => triggerScanPulse(ocrIndex)}
                className="flex-1 rounded-lg border border-slate-700 bg-slate-950 px-2.5 py-1.5 text-[11px] font-semibold text-slate-200 transition hover:border-blue-400"
              >
                Re-Scan Frame
              </button>
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex flex-1 items-center justify-center gap-1 rounded-lg bg-blue-600/90 px-2.5 py-1.5 text-[11px] font-semibold text-white transition hover:bg-blue-500"
              >
                {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                {copied ? 'Copied!' : 'Copy Text'}
              </button>
            </div>
          </div>
        )}

        {/* Mode 2: Interactive 100+ Language AI */}
        {activeTab === 1 && (
          <div className="mt-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-3.5">
            <div className="flex items-center justify-between text-[11px] text-slate-400">
              <span className="inline-flex items-center gap-1 font-medium text-slate-300">
                <Languages className="h-3.5 w-3.5 text-blue-400" />
                Captured Text Block
              </span>
              <span className="text-blue-400">210ms instant sync</span>
            </div>

            <p className="mt-2 rounded-lg bg-slate-950/80 p-2.5 text-xs leading-relaxed text-slate-300">
              Scan documents, extract structured fields, and translate instantly.
            </p>

            <div className="mt-2.5">
              <div className="mb-1.5 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                Tap Target Language:
              </div>
              <div className="grid grid-cols-4 gap-1">
                {TRANSLATION_TARGETS.map((lang, idx) => (
                  <button
                    key={lang.id}
                    type="button"
                    onClick={() => setLangIndex(idx)}
                    className={`rounded-md border px-1.5 py-1 text-[10px] font-semibold transition ${
                      langIndex === idx
                        ? 'border-blue-400/60 bg-blue-500/15 text-blue-200'
                        : 'border-slate-800 bg-slate-950/60 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-2.5 space-y-1.5">
              <div className="flex items-start justify-between gap-2 rounded-lg border border-slate-800 bg-slate-950/50 px-2.5 py-1.5 text-xs">
                <span className="shrink-0 font-medium text-slate-400">Detected</span>
                <span className="text-right font-semibold text-blue-200">
                  {currentLang.detected}
                </span>
              </div>
              <div className="rounded-lg border border-slate-800 bg-slate-950/50 px-2.5 py-2 text-xs">
                <div className="font-medium text-slate-400">{currentLang.label} Output</div>
                <div className="mt-1 font-semibold leading-relaxed text-blue-200">
                  {currentLang.translated}
                </div>
              </div>
              <div className="rounded-lg border border-slate-800 bg-slate-950/30 px-2.5 py-1.5 text-[11px] text-blue-300">
                {currentLang.localeNote}
              </div>
            </div>
          </div>
        )}

        {/* Mode 3: Interactive Client Build Tracker */}
        {activeTab === 2 && (
          <div className="mt-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-3.5">
            <div className="flex items-center justify-between text-[11px] text-slate-400">
              <span className="inline-flex items-center gap-1 font-medium text-slate-300">
                <GitBranch className="h-3.5 w-3.5 text-blue-400" />
                {currentSprint.milestone}
              </span>
              <span className="text-blue-400">Weekly Friday Demo</span>
            </div>

            <div className="mt-2 flex gap-1.5">
              {SPRINT_BUILDS.map((sprint, idx) => (
                <button
                  key={sprint.id}
                  type="button"
                  onClick={() => setSprintIndex(idx)}
                  className={`flex-1 rounded-md border px-2 py-1 text-[10px] font-semibold transition ${
                    sprintIndex === idx
                      ? 'border-blue-400/60 bg-blue-500/15 text-blue-200'
                      : 'border-slate-800 bg-slate-950/60 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {sprint.label}
                </button>
              ))}
            </div>

            <p className="mt-2 rounded-lg bg-slate-950/80 p-2.5 text-xs leading-relaxed text-slate-300">
              {currentSprint.sampleInput}
            </p>

            <div className="mt-2.5 space-y-1.5">
              {currentSprint.metrics.map((row) => (
                <div
                  key={row.type}
                  className="flex items-start justify-between gap-2 rounded-lg border border-slate-800 bg-slate-950/50 px-2.5 py-1.5 text-xs"
                >
                  <span className="shrink-0 font-medium text-slate-400">{row.type}</span>
                  <span className="text-right font-semibold text-blue-200">{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-3 flex items-center justify-between px-1 text-[11px] text-slate-400">
          <span className="inline-flex items-center gap-1 text-blue-400">
            <CheckCircle2 className="h-3.5 w-3.5" />
            APPZYS In-House Apps
          </span>
          <span className="inline-flex items-center gap-0.5 text-blue-300">
            Tap controls inside phone <ArrowUpRight className="h-3 w-3" />
          </span>
        </div>
      </div>
    </div>
  )
}
