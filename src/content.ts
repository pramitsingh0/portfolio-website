// Site content: career facts from cv.md; project summaries verified against their repositories.
import cvUrl from "./assets/cv-pramit-singh-standard-2026-08-27.pdf";

export const identity = {
  name: "Pramit Singh",
  wordmark: ["pramit", ".space"] as const,
  email: "pramitsingh0@gmail.com",
  phone: "+919937877665",
  location: "Bangalore, India",
  cv: cvUrl,
  github: "https://github.com/pramitsingh0",
  linkedin: "https://www.linkedin.com/in/pramit-singh-dev/",
};

export const nav = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const hero = {
  metrics: [
    { value: 2, suffix: "+", label: "YEARS EXPERIENCE" },
    { value: 1000, suffix: "+", label: "ORDERS / DAY IN PRODUCTION" },
    { value: 500, suffix: "ms", label: "QUERY TIME, DOWN FROM 12s" },
  ],
  lede: "Full-Stack Developer building production systems end to end — React and TypeScript on the front, Node.js and event-driven services on Google Cloud behind them.",
  tags: [
    "Node.js",
    "React",
    "TypeScript",
    "GCP",
    "Firestore",
    "PostgreSQL",
    "Docker",
    "Python",
  ],
};

export const about = {
  statement: {
    before: "I build ",
    emphasis: "production-ready",
    after: " systems that stay correct when the traffic arrives.",
  },
  blocks: [
    {
      heading: "Where I work",
      paragraphs: [
        "I'm a full-stack developer in Bangalore, two years into building the software behind logistics and compliance platforms — React and TypeScript at the front, Node.js and event-driven services on Google Cloud behind them.",
        "Most of what I do is make systems survive their own success: moving work off the request path, making retries idempotent, and turning a twelve-second query into a half-second one.",
      ],
    },
    {
      heading: "Education",
      paragraphs: [
        "B.Tech in Electrical and Electronics Engineering, Veer Surendra Sai University of Technology, 2020–2024. Graduated with a 7.55 CGPA.",
      ],
    },
    {
      heading: "Elsewhere",
      paragraphs: [
        "Led a team of four through a University of Helsinki training programme, shipping a full-stack booking platform end to end.",
      ],
    },
  ],
};

export const experience = [
  {
    company: "Meel",
    role: "Backend Developer",
    period: "Jun 2025 — Present",
    bullets: [
      "Owned backend architecture and API design for a logistics platform on Google Cloud Run, sustaining 1,000+ daily orders across orders, routes, invoices and admin systems.",
      "Refactored notifications out of the request path into an event-driven flow: a Firestore onDocumentCreated collection-group trigger enqueues a Cloud Task, which handles delivery with exponential-backoff retries. Idempotent dispatch, validated at ~5k notifications a day.",
      "Improved API response times by ~30% through query optimisation, indexing and caching.",
      "Built commerce integrations (Salla, Zid, WooCommerce) with webhook pipelines that stay consistent under burst traffic, plus a Zoho Books suite covering OAuth token lifecycle, sales orders and invoices.",
      "Implemented geospatial and AI route optimisation — reverse geocoding, distance and ETA computation, real-time route orchestration — and customer-facing LLM route summaries on the Groq API.",
    ],
  },
  {
    company: "iComply Lifescience Solutions",
    role: "Backend Developer",
    period: "Jul 2024 — Jun 2025",
    bullets: [
      "Designed and shipped the Non-Conformance backend module, modelling relational workflows across deviation, action items, RCA and CAPA entities.",
      "Engineered complex SQL using joins, unions, subqueries and indexing, improving critical query performance from 12s to under 500ms.",
      "Built a Python (Django) microservice for event-triggered email notifications, reaching 99% uptime through structured error handling and monitoring.",
      "Implemented JWT authentication and access control, with input validation and parameterised queries to prevent SQL injection.",
    ],
  },
  {
    company: "MoLog Media and Advertising",
    role: "Full Stack Developer Intern",
    period: "Apr 2022 — Jun 2022",
    bullets: [
      "Led the migration of MoLog's Soham-ngma product to AMP, cutting page load times by ~50% and improving the mobile experience.",
    ],
  },
];

export const projects = [
  {
    name: "Chingu Rooms",
    blurb:
      "A full-stack hotel booking platform with a React front end and an Express/MongoDB backend. Led a team of four under a University of Helsinki training programme, and designed the services behind sessions, bookings and simulated payments.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    live: "https://chingu-bt-30.onrender.com/",
    source: "https://github.com/chingu-voyages/v42-bears-team-30",
    placeholder: false,
  },
  {
    name: "AnimeFreak",
    blurb: "A full-stack social platform for anime fans.",
    stack: [] as string[], // cv.md records no stack — do not guess
    live: "https://animefreak.onrender.com",
    source: "https://github.com/pramitsingh0/salmon-roe/",
    placeholder: false,
  },
  {
    name: "DMail",
    blurb:
      "A mail web application built with Django and JavaScript.",
    stack: ["Django", "Python", "JavaScript"],
    live: "http://pramitsingh1.pythonanywhere.com/",
    source: "https://github.com/pramitsingh0/django-js-mail-app",
    placeholder: false,
  },
  {
    name: "Auctions",
    blurb:
      "An auction website built primarily with Django.",
    stack: ["Django", "Python", "SQL"],
    live: "http://pramitsingh2.pythonanywhere.com/",
    source: "https://github.com/pramitsingh0/django-auctions",
    placeholder: false,
  },
];

export const socials = [
  { label: "Email", href: `mailto:${identity.email}` },
  { label: "GitHub", href: identity.github },
  { label: "LinkedIn", href: identity.linkedin },
  {
    label: "WhatsApp",
    href: `https://wa.me/${identity.phone.replace("+", "")}`,
  },
];
