export const FALLBACK_CASE_STUDIES = [
  {
    slug: 'ai-text-scanner',
    appName: 'AI Text Scanner',
    frontImage: '/card-ai-text-scanner.jpg',
    tagline: 'From physical documents to usable digital information',
    category: 'Documents, OCR & AI Integration',
    installsLabel: '100K+ Google Play',
    rating: 4.6,
    ratingLabel: '4.6/5 iOS Rating',
    summary:
      'A mobile document-processing experience that lets people capture or import visual content, recognize text, manage results, and work with extracted information using AI-assisted tools.',
    challenge:
      'Information in printed pages, images, screenshots, and PDFs is easy to view but often difficult to edit, search, or reuse. Re-entering it manually adds avoidable work.',
    solution:
      'Built a unified mobile pipeline combining camera handling, image processing, multilingual OCR, batch workflows, scan history, and AI-assisted summaries, Q&A, and document interaction.',
    capabilities: [
      'Camera scanning and image/PDF import with text extraction',
      'Multilingual OCR and translation of extracted content',
      'AI-assisted summaries, questions, and document interaction',
      'Batch workflows, scan history, and export to supported formats',
    ],
    engineeringNote:
      'Combines camera handling, image processing, OCR, document workflows, and AI integration so a multi-step pipeline feels straightforward on mobile.',
    relevance:
      'Useful experience for document digitization, data extraction, business workflows, and AI productivity products.',
    techStack: ['Flutter & Dart', 'Multilingual OCR', 'PDF & Image Import', 'AI Document Q&A'],
  },
  {
    slug: 'copy-text-on-screen',
    appName: 'Copy Text On Screen',
    frontImage: '/card-copy-text.jpg',
    tagline: 'A focused solution to a daily mobile usability problem',
    category: 'OCR & Productivity Utility',
    installsLabel: '500K+ Google Play',
    rating: 4.6,
    ratingLabel: '4.6/5 iOS Rating',
    summary:
      'An image-to-text utility that helps users recognize, copy, share, and translate text from screenshots and other visual content, minimizing the work needed to make visible information reusable.',
    challenge:
      'Text displayed inside a screenshot, image, or certain app interfaces cannot always be selected directly. Users otherwise need to retype the information or use a separate workaround.',
    solution:
      'Engineered reliable mobile image handling, fast OCR extraction, clipboard & sharing workflows, multilingual translation, and smart detection of links, email addresses, and phone numbers.',
    capabilities: [
      'Screenshot and image text extraction',
      'Clipboard, sharing, and text reuse workflows',
      'Multilingual recognition and translation',
      'Detection and use of links, email addresses, and phone numbers',
    ],
    engineeringNote:
      'Demonstrates how reliable mobile image handling, recognition results, and a deliberately simple UX can guide an enduring product.',
    relevance:
      'Relevant to mobile productivity, accessibility-oriented utilities, content extraction, and custom workflow tools.',
    techStack: ['Android & iOS', 'OCR Extraction', 'Entity Detection', 'Multilingual Translation'],
  },
  {
    slug: 'ai-transcript-audio-to-text',
    appName: 'AI Transcript: Audio to Text',
    frontImage: '/card-ai-transcript.jpg',
    tagline: 'Transforming recordings into information users can work with',
    category: 'Multilingual Audio & Applied AI',
    installsLabel: '10K+ Google Play',
    rating: 4.5,
    ratingLabel: 'Android & iOS',
    summary:
      'A complete mobile transcription workflow: record or import audio/video, convert speech to text, review the transcript, and use AI features to summarize, translate, or query its contents.',
    challenge:
      'Recordings of meetings, lessons, and conversations contain valuable information, but repeatedly listening and manually creating notes can be time-consuming.',
    solution:
      'Integrated mobile audio handling with speech recognition and downstream AI processing—managing long-form content, usage limits, external AI costs, and transcript storage/export.',
    capabilities: [
      'Audio/video file transcription and supported live speech-to-text',
      'Multilingual transcription and translation workflows',
      'AI summaries and transcript-based questions',
      'Transcript storage, review, export, and sharing',
    ],
    engineeringNote:
      'Handles real production concerns including long-form audio, usage limits, external AI cost control, and responsive UX.',
    relevance:
      'Relevant to AI assistants, meeting tools, education, multilingual workflows, and speech-enabled business applications.',
    techStack: ['Flutter & Dart', 'Speech-to-Text AI', 'AI Summarization', 'Cloud Functions'],
  },
  {
    slug: 'handwriting-to-text-scanner',
    appName: 'Handwriting to Text Scanner',
    frontImage: '/card-handwriting.jpg',
    tagline: 'Bringing handwritten information into digital workflows',
    category: 'EdTech & Digitization Workflows',
    installsLabel: '10K+ Google Play',
    rating: 4.4,
    ratingLabel: 'Android & iOS',
    summary:
      'A dedicated mobile workflow that helps users scan handwritten pages or import existing content, recognize text, make corrections, organize in folders, and reuse results digitally.',
    challenge:
      'Handwritten notes remain useful in study and work, yet they are hard to search, edit, organize, or share without manual transcription.',
    solution:
      'Combined handwriting recognition with an accessible mobile editing and folder-based document management experience, batch scanning, translation, and export history.',
    capabilities: [
      'Camera capture and image/PDF import',
      'Handwriting recognition and editable results',
      'Batch scanning and folder-based organization',
      'Translation, copying, sharing, and scan history',
    ],
    engineeringNote:
      'Focuses not only on extracting text, but on completing the journey from a handwritten page to an organized digital document.',
    relevance:
      'Relevant to education software, digitization, digital recordkeeping, and focused productivity products.',
    techStack: ['Android & iOS', 'Handwriting AI', 'Batch Scanning', 'Folder Organization'],
  },
]

export const EMERGING_PRODUCTS = [
  {
    name: 'Live Transcribe',
    tagline: 'Real-time speech-to-text',
    category: 'Live Audio Workflows / AI Speech Recognition',
    status: 'In Active Development • 500+ Downloads',
    summary:
      'A mobile product focused on converting spoken conversations into readable text, exploring live recognition, multilingual experiences, and practical speech capture.',
  },
  {
    name: 'AI Study Tutor',
    tagline: 'AI-assisted study and document learning',
    category: 'Education Technology / AI Document Interaction',
    status: 'In Active Development • 500+ Downloads',
    summary:
      'An educational application exploring question-answering and learning workflows around study material, PDFs, and homework-related tasks.',
  },
]

export const SERVICES_LIST = [
  {
    id: '01',
    slug: 'mobile-app-development',
    title: '01. Mobile App Development',
    tag: 'Core Engineering Service',
    summary:
      'Cross-platform Android and iOS mobile applications and startup MVPs built with Flutter and Dart from a shared codebase.',
    description:
      'We help startups and businesses build and launch Android and iOS mobile applications using Flutter, Provider state management, REST API integration, Firebase services, testing, and store deployment.',
    capabilities: [
      'Flutter & Dart cross-platform Android and iOS apps',
      'Clean UI screens, layouts, and navigation flows',
      'Provider-based state management & business logic',
      'REST API & Firebase (Auth, Database, Cloud Functions)',
      'Functional/widget testing & Play/App Store release support',
    ],
  },
  {
    id: '02',
    slug: 'ai-integration',
    title: '02. AI Integration & Applications',
    tag: 'Specialized Capability',
    summary:
      'AI-powered Flutter mobile products and third-party AI API integration for speech, documents, OCR, and intelligent chat.',
    description:
      'We integrate existing AI models and APIs into Flutter apps with secure Cloud Functions mediation, token/cost safeguards, structured response parsing, and responsive mobile UIs.',
    capabilities: [
      'Audio & video speech-to-text transcription & summaries',
      'PDF upload, document Q&A, and citation-aware chat',
      'OCR image-to-text & handwriting recognition workflows',
      'Conversational AI assistants with context history',
      'AI-powered quizzes, flashcards & text enhancement',
    ],
  },
  {
    id: '03',
    slug: 'app-enhancement-maintenance',
    title: '03. App Enhancement & Maintenance',
    tag: 'Application Lifecycle Service',
    summary:
      'Ongoing feature development, bug fixing, API upgrades, and technical support for existing Flutter applications.',
    description:
      'Already have a published Flutter app? We start with a structured codebase assessment & improvement backlog, then deliver bug fixes, new screens, dependency upgrades, and monthly maintenance.',
    capabilities: [
      'Bug fixing, crash resolution & state management fixes',
      'New screens, search/filtering & user account workflows',
      'REST API, Firebase & third-party SDK updates',
      'Flutter SDK & dependency compatibility upgrades',
      'Performance profiling, regression QA & release support',
    ],
  },
  {
    id: '04',
    slug: 'dedicated-flutter-development',
    title: '04. Dedicated Flutter Development',
    tag: 'Team & White-Label Model',
    summary:
      'Dedicated Flutter developers for startups, product teams, and digital agencies needing reliable mobile engineering capacity.',
    description:
      'Engage APPZYS Flutter engineers to work directly alongside your React, Node.js, and QA team—or partner with us for confidential white-label Flutter delivery under your agency brand.',
    capabilities: [
      'Full-time or part-time monthly Flutter developer allocation',
      'Team extension alongside existing Web, Backend & QA teams',
      'White-label Flutter delivery for partner software agencies',
      'API & Firebase integration, testing & code maintenance',
      'Clear NDA, IP ownership, and sprint reporting',
    ],
  },
]

export const SERVICE_COMPARISON = [
  {
    dimension: 'Starting Point',
    s1: 'New mobile product or MVP',
    s2: 'AI capability requirement',
    s3: 'Existing Flutter application',
    s4: 'Existing engineering team',
  },
  {
    dimension: 'Main Objective',
    s1: 'Build & launch a Flutter app',
    s2: 'Add AI workflows to product',
    s3: 'Fix, upgrade & expand app',
    s4: 'Increase Flutter dev capacity',
  },
  {
    dimension: 'Main Deliverable',
    s1: 'Android & iOS Flutter app',
    s2: 'AI-powered feature / product',
    s3: 'Updated, stable application',
    s4: 'Dedicated Flutter engineer(s)',
  },
  {
    dimension: 'Typical Buyer',
    s1: 'Founder / Product Manager',
    s2: 'AI Startup / EdTech / CTO',
    s3: 'Existing App Owner / SaaS',
    s4: 'Digital Agency / Eng Manager',
  },
  {
    dimension: 'Typical Billing',
    s1: 'Fixed Price / Milestone / T&M',
    s2: 'Fixed Price / T&M',
    s3: 'Monthly Retainer / T&M',
    s4: 'Monthly Allocation / T&M',
  },
]

export const AI_CAPABILITIES = [
  {
    code: 'A',
    title: 'Speech & Audio AI',
    items: [
      'Audio & video-to-text transcription',
      'Live speech-to-text & multilingual support',
      'Transcript summarization & translation',
    ],
    useCases: 'Meetings, interviews, lectures & voice notes',
  },
  {
    code: 'B',
    title: 'AI Document Processing',
    items: [
      'PDF upload, parsing & summarization',
      'Context-based document Q&A chat',
      'Structured document data extraction',
    ],
    useCases: 'Research papers, reports & business docs',
  },
  {
    code: 'C',
    title: 'OCR & Text Extraction',
    items: [
      'Image-to-text & printed document OCR',
      'Handwriting recognition workflows',
      'Editable text, copy & instant export',
    ],
    useCases: 'Receipt scanning, notes & whiteboard capture',
  },
  {
    code: 'D',
    title: 'Conversational AI',
    items: [
      'Clean mobile AI chat interfaces',
      'Chat with documents & extracted text',
      'Persistent conversation history',
    ],
    useCases: 'AI assistants & workspace knowledge tools',
  },
  {
    code: 'E',
    title: 'AI-Powered Learning',
    items: [
      'AI-generated study summaries',
      'Automated quiz & flashcard generation',
      'Interactive study Q&A companions',
    ],
    useCases: 'EdTech apps, exam prep & digital learning',
  },
  {
    code: 'F',
    title: 'AI Text Processing',
    items: [
      'Text rewriting & grammar enhancement',
      'Multi-language translation workflows',
      'Structured entity & summary extraction',
    ],
    useCases: 'Writing tools & productivity utilities',
  },
]

export const FLUTTER_ARCHITECTURE_LAYERS = [
  {
    layer: '01. Presentation Layer',
    details: 'Flutter Screens · Reusable Widgets · Navigation Flows',
  },
  {
    layer: '02. State Management',
    details: 'Provider · Predictable App State · Client Workflows',
  },
  {
    layer: '03. Service & Data Layer',
    details: 'Repositories · REST API Clients · Typed Models · Serialization',
  },
  {
    layer: '04. Firebase & Cloud Mediation',
    details: 'Firebase Auth · Firestore/DB · Cloud Functions (API-Key Protection) · Analytics',
  },
  {
    layer: '05. External AI & Client Backends',
    details: 'Third-Party AI APIs (Speech, OCR, LLM) · Existing Client REST APIs',
  },
]
