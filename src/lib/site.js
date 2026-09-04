/* ── Content constants ──────────────────────────────────────────────────────
   The client brief's copy, verbatim, in one place so no component quietly
   rewrites a sentence. Labels the brief left unwritten (buttons, eyebrows,
   form labels, empty states) are written here in the brief's stated voice:
   direct, plainspoken, short confident sentences.
   ───────────────────────────────────────────────────────────────────────── */

export const BIZ = {
  name: 'Long Range Electrical',
  phoneDisplay: '(587) 555-0148',
  phoneHref: 'tel:+15875550148',
  smsHref: 'sms:+15875550148',
  email: 'contact@longrangeelectrical.com',
  emailHref: 'mailto:contact@longrangeelectrical.com',
  region: 'Alberta, Canada',
  year: new Date().getFullYear(),
}

export const NAV = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#story' },
  {
    label: 'Services',
    href: '#services',
    items: [
      'Residential Wiring',
      'Commercial Electrical',
      'Panel Upgrades & Replacements',
      'Breaker & Fuse Repairs',
      'Lighting Installation',
      'Outdoor & Landscape Lighting',
      'Renovation Wiring',
      'Electrical Troubleshooting',
      'Outlet & Switch Repair',
      'Ceiling Fan Installation',
      'EV Charger Installation',
      'Electrical Safety Inspections',
    ],
  },
  {
    label: 'Service Areas',
    href: '#coverage',
    items: [
      'Residential Service',
      'Commercial Service',
      'New Construction',
      'Renovations & Additions',
      'Rural & Acreage Properties',
      'Multi-Unit Properties',
    ],
  },
  { label: 'FAQ', href: '#faq' },
  { label: 'Blog', href: '#footer' },
  { label: 'Contact', href: '#contact' },
]

export const HERO = {
  eyebrow: 'Residential & Commercial Electrical',
  h1: 'Trusted Electricians Serving Alberta Homes & Businesses',
  sub: "Licensed and insured electrical work, from a single tripped breaker to a full panel upgrade, done by a crew that explains what's wrong before touching anything and quotes it straight.",
}

export const VALUE_BADGES = [
  { label: 'Satisfaction Guarantee', icon: 'HeartHandshake' },
  { label: 'Licensed & Insured', icon: 'ShieldCheck' },
  { label: 'Free Estimates', icon: 'ClipboardList' },
  { label: 'Flexible Scheduling', icon: 'CalendarClock' },
]

export const REVIEWS = {
  aggregate: '4.9 out of 5 stars, based on real Google reviews',
  score: 4.9,
  items: [
    {
      name: 'Sarah M.',
      quote: 'Had a dead outlet in the kitchen for months. They found the problem in ten minutes and had it fixed before lunch.',
      focus: 'Troubleshooting',
    },
    {
      name: 'Mike T.',
      quote: 'Straightforward quote, no upselling, and the panel upgrade was finished in a single afternoon.',
      focus: 'Panel Upgrade',
    },
    {
      name: 'Jennifer K.',
      quote: 'Called on a Tuesday and had someone out by Thursday. Every step got explained before any tool came out.',
      focus: 'Scheduling',
    },
    {
      name: 'Dave R.',
      quote: 'Rewired our basement for a renovation and left the workspace cleaner than they found it.',
      focus: 'Renovation Wiring',
    },
    {
      name: 'Priya S.',
      quote: 'I asked a lot of questions before hiring anyone, and every one got a real answer instead of a sales pitch.',
      focus: 'Straight Answers',
    },
  ],
}

export const TRUST_BADGES = [
  { label: 'Licensed & Insured', icon: 'BadgeCheck' },
  { label: 'Locally Owned & Operated', icon: 'MapPin' },
  { label: 'Years Of Experience', icon: 'Award' },
  { label: 'Satisfaction Guaranteed', icon: 'ThumbsUp' },
]

export const WHY_US = [
  {
    title: 'Straight Answers, No Upselling',
    icon: 'MessageSquare',
    body: 'We tell you what’s wrong and what it costs to fix before any work starts, never after.',
  },
  {
    title: 'Fast, Honest Response',
    icon: 'Zap',
    body: 'Electrical problems rarely wait for a convenient afternoon. We move quickly when we can and give a real timeline instead of a vague one when we can’t.',
  },
  {
    title: 'Clean, Careful Work',
    icon: 'Sparkles',
    body: 'Every job gets finished the way we’d want it done in our own home, with wiring routed properly and the site left the way we found it.',
  },
  {
    title: 'Licensed And Accountable',
    icon: 'ShieldCheck',
    body: 'You’re covered from the first phone call to the last outlet tested, with a crew that stands behind its own work.',
  },
]

export const SERVICES = [
  {
    title: 'Electrical Installations',
    body: 'New wiring, fixture installs, and everything else that goes into powering a renovation or new build, done to code from the panel out.',
    img: '/images/rewiring-hero.webp',
    alt: 'Stud-framed interior mid-renovation with new electrical cable run overhead between the joists',
    icon: 'PlugZap',
  },
  {
    title: 'Troubleshooting & Repairs',
    body: 'Tripped breakers, dead outlets, and lights that flicker for no obvious reason. We track down the real cause, not just the symptom.',
    img: '/images/troubleshooting-hero.webp',
    alt: 'Electrician kneeling at a baseboard outlet taking a reading with a multimeter, flashlight on the floor beside him',
    icon: 'Search',
  },
  {
    title: 'Panel Upgrades',
    body: 'Older panels get replaced with equipment sized for how a home or business uses power today.',
    img: '/images/panel-new.webp',
    alt: 'Finished breaker panel in a clean grey enclosure with the door open and every circuit labelled',
    icon: 'LayoutPanelLeft',
  },
  {
    title: 'Lighting & Fixture Work',
    body: 'Indoor and outdoor lighting, from a single fixture swap to a full lighting plan for a new space.',
    img: '/images/lighting-hero.webp',
    alt: 'Modern kitchen at dusk lit by warm under-cabinet strips and recessed pot lights',
    icon: 'Lightbulb',
  },
  {
    title: 'Commercial Electrical',
    body: 'Wiring, maintenance, and repairs for local shops, offices, and commercial spaces that can’t afford downtime.',
    img: '/images/commercial-lift.webp',
    alt: 'Two electricians on a scissor lift installing linear ceiling lighting in an open commercial space',
    icon: 'Building2',
  },
  {
    title: 'Renovation Wiring',
    body: 'Electrical work for kitchen, basement, and bathroom renovations, coordinated around the rest of the trades on site.',
    img: '/images/rewire-rough-in.webp',
    alt: 'New electrical device boxes mounted on a bare stud wall with cables dropped ready for rough-in',
    icon: 'Hammer',
  },
]

export const COVERAGE = {
  framing:
    'We take on residential and commercial jobs across our Alberta service area, from single-outlet repairs to full renovation wiring. Wherever the job is, the same crew shows up, and the same honest pricing applies.',
  zones: [
    { label: 'Residential Service', icon: 'Home' },
    { label: 'Commercial Service', icon: 'Store' },
    { label: 'New Construction', icon: 'HardHat' },
    { label: 'Renovations & Additions', icon: 'Ruler' },
    { label: 'Rural & Acreage Properties', icon: 'Tractor' },
    { label: 'Multi-Unit Properties', icon: 'Building' },
  ],
}

export const STORY = [
  {
    marker: 'The Start',
    body: 'This crew started with one idea: treat every customer’s home the way you’d treat your own. That’s still how the work gets done — no unnecessary upselling or vague invoices, just a clear explanation of what’s wrong and what it costs to fix.',
  },
  {
    marker: 'Word Of Mouth',
    body: 'Most of the growth since then has come from word of mouth. A homeowner mentions a good experience to a neighbour, that neighbour calls about a flickering light, and somewhere along the way that one call turns into a full panel upgrade. That kind of trust doesn’t happen overnight, and it isn’t something taken for granted.',
  },
  {
    marker: 'The Standard',
    body: 'Every job gets the same standard, whether it’s a five-minute outlet fix or a two-day rewire: show up on time and explain the problem in plain language before anything gets touched. The site gets left the way it was found, minus whatever wasn’t working when the truck pulled up.',
  },
]

export const FAQS = [
  {
    q: 'How Fast Can You Get Someone Out For An Electrical Problem?',
    a: 'We move quickly whenever we can, especially for issues like a tripped breaker or a dead outlet that affects daily life. Call and we’ll give you a real timeline instead of a vague “soon.”',
  },
  {
    q: 'Do You Offer Free Estimates?',
    a: 'Yes. We’ll look at the job, explain what’s involved, and give you a straightforward number before any work begins.',
  },
  {
    q: 'Are You Licensed And Insured?',
    a: 'Yes. Every job is handled by licensed, insured electricians, so you’re covered from the first call to the final test.',
  },
  {
    q: 'What Kinds Of Electrical Work Do You Handle?',
    a: 'Everything from a single flickering light or dead outlet to full panel upgrades and full commercial jobs, including the wiring that comes with a renovation. If it runs on electricity, we can likely help.',
  },
  {
    q: 'How Do I Know If My Breaker Panel Needs To Be Replaced?',
    a: 'Frequent tripping and a warm panel cover are common signs, especially in a home that’s outgrown its original electrical load. We’ll assess it honestly and won’t recommend a replacement you don’t need.',
  },
  {
    q: 'Do You Clean Up After The Job Is Done?',
    a: 'Yes. We treat every home and business the way we’d want ours treated, and that includes leaving the space as tidy as we found it.',
  },
]

export const FINAL_CTA = {
  h2: 'Ready for an Electrician Who Tells It Straight?',
  sub: 'Call now for a free estimate on your next electrical project, big or small.',
}

export const FOOTER = {
  mission:
    'We’re a licensed, insured electrical crew serving homes and businesses across our Alberta service area. From a single dead outlet to a full panel upgrade, we’re available for work big and small, with honest pricing every time.',
  services: [
    'Electrical Installations',
    'Troubleshooting & Repairs',
    'Panel Upgrades',
    'Lighting & Fixture Work',
    'Commercial Electrical',
  ],
  quickLinks: [
    { label: 'Home', href: '#top' },
    { label: 'About', href: '#story' },
    { label: 'Services', href: '#services' },
    { label: 'Service Areas', href: '#coverage' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ],
}

export const REASSURANCE = 'No cost, no obligation, and we never share your information.'
