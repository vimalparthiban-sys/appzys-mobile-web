export const FALLBACK_CASE_STUDIES = [
  {
    slug: 'copy-text-on-screen',
    appName: 'Copy Text On Screen',
    category: 'OCR & Productivity Utility',
    installsLabel: '700K+ Installs',
    rating: 4.1,
    summary:
      'Extracts selectable text, phone numbers, emails, and URLs directly from screenshots and restricted app screens across 100+ languages.',
    challenge:
      'Mobile users frequently need to copy text embedded inside images, social apps, or screenshots where native OS text selection is blocked.',
    solution:
      'Engineered a fast, low-latency on-device & cloud OCR pipeline with smart entity detection (URLs, phones, emails) and instant multi-language translation.',
    techStack: ['Android Kotlin', 'On-Device ML Kit', 'OCR Pipeline', 'Material 3 UI'],
  },
  {
    slug: 'ai-text-scanner',
    appName: 'AI Text Scanner: Image To Text',
    category: 'AI & Document Intelligence',
    installsLabel: 'High-Retention Utility',
    rating: 4.3,
    summary:
      'Converts physical documents, PDFs, and photos into clean editable digital text with AI summarization and instant export.',
    challenge:
      'Standard mobile scanners struggle with skewed lighting, multi-column layouts, and noisy backgrounds on budget Android devices.',
    solution:
      'Built automatic edge detection, perspective correction, and AI text post-processing to deliver accurate structured text exports in seconds.',
    techStack: ['Flutter / Native', 'Computer Vision', 'AI Summarization', 'Cloud Sync'],
  },
  {
    slug: 'handwriting-to-text-scanner',
    appName: 'Handwriting to Text Scanner',
    category: 'EdTech & AI Recognition',
    installsLabel: 'Global Multi-Language',
    rating: 4.2,
    summary:
      'Transforms handwritten notes, classroom boards, and paper forms into searchable, editable digital notes across multiple languages.',
    challenge:
      'Cursive and uneven handwriting varies wildly across users, requiring specialized recognition models beyond standard printed OCR.',
    solution:
      'Combined adaptive image preprocessing with modern handwriting recognition models and a distraction-free mobile editor.',
    techStack: ['iOS & Android', 'Handwriting AI', 'PDF Export', 'Offline Cache'],
  },
]

export const SERVICES_LIST = [
  {
    title: 'Native iOS & Android Apps',
    tag: 'Swift & Kotlin',
    description:
      'High-performance native mobile applications engineered for smooth animations, hardware access, and strict Play Store & App Store compliance.',
  },
  {
    title: 'Cross-Platform (Flutter & React Native)',
    tag: 'Faster Time-to-Market',
    description:
      'Single-codebase iOS and Android apps that cut MVP launch timelines by up to 40% without sacrificing native-grade speed.',
  },
  {
    title: 'AI, OCR & Computer Vision Apps',
    tag: 'Appzys Signature Edge',
    description:
      'Document scanners, smart text extraction, LLM assistants, and on-device ML built by the team behind ~1M+ AI utility app installs.',
  },
  {
    title: 'Mobile UI/UX & Interactive Prototyping',
    tag: 'Design Systems',
    description:
      'Thumb-friendly mobile flows, Figma component libraries, and user-tested prototypes built to maximize retention and conversion.',
  },
  {
    title: 'App Modernization & Performance',
    tag: 'Android & iOS Upgrades',
    description:
      'Upgrade legacy mobile apps to Jetpack Compose, SwiftUI, or Flutter—improving startup speed, crash-free rates, and Play Store ratings.',
  },
  {
    title: 'App Launch, ASO & Long-Term Scaling',
    tag: 'Store Growth',
    description:
      'App Store Optimization, crash analytics, OS version upgrades, and continuous feature sprints after launch.',
  },
]
