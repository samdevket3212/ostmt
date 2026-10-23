export const site = {
  name: 'One Stop Media',
  legalName: 'One Stop Media LLC',
  tagline: 'One idea. Every dimension.',
  location: 'Sheridan, Wyoming, USA',
  locality: 'Sheridan',
  region: 'WY',
  country: 'US',
  /** Replace with the production domain before launch. */
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.example.com',
  /** Business email supplied by the studio. Shown in the footer, mobile menu, contact page, form errors and structured data. */
  email: 'onestopmediawy@gmail.com' as string | null,
  /** The number accepts calls and texts: every placement offers both. */
  phone: { display: '+1 (307) 200-4559', tel: '+13072004559', sms: '+13072004559', schema: '+1-307-200-4559' },
  /** Leave empty until verified profiles exist. */
  social: [] as { label: string; href: string }[],
  description:
    'One Stop Media is a creative design and digital studio based in Sheridan, Wyoming. Explore 2D/3D design, game design, branding, UI/UX, web development, software, and digital marketing.',
};

export const navigation = [
  { label: 'Work', href: '/work' },
  { label: 'Services', href: '/services' },
  { label: 'Studio', href: '/studio' },
  { label: 'Process', href: '/process' },
  { label: 'Contact', href: '/contact' },
];

export const footerExplore = [{ label: 'Home', href: '/' }, ...navigation];

export const homeFaqs = [
  {
    question: 'What does One Stop Media specialize in?',
    answer:
      'One Stop Media specializes in creative design, including 2D and 3D artwork, game design, branding, logo design, and UI/UX. We also provide web development, software development, and digital marketing services.',
  },
  {
    question: 'Can I hire One Stop Media just for design?',
    answer:
      'Absolutely. We can focus on individual creative needs such as logos, brand identity, illustrations, 3D artwork, game assets, or interface design without requiring a development engagement.',
  },
  {
    question: 'Can you design and build my website?',
    answer: 'Yes. Website design and development can be delivered as a connected project, helping maintain consistency between the visual concept and final implementation.',
  },
  {
    question: 'Do you work with startups and established companies?',
    answer:
      'Our services are suitable for businesses at different stages, from early concepts and new product launches to redesigns and improvements for existing brands.',
  },
  { question: 'Where is One Stop Media located?', answer: 'One Stop Media LLC is based in Sheridan, Wyoming, USA.' },
  {
    question: 'How can I discuss a project?',
    answer: 'Use our contact form, call or text us at +1 (307) 200-4559, or email onestopmediawy@gmail.com to introduce your project and discuss the next steps.',
  },
];

/** The four-step summary used on the homepage. */
export const processPreview = [
  { number: '01', name: 'Discover', summary: 'We understand your idea, objectives, audience, and priorities.' },
  { number: '02', name: 'Imagine', summary: 'We explore visual directions, concepts, and creative possibilities.' },
  { number: '03', name: 'Create', summary: 'We design, develop, and refine the work around an agreed scope.' },
  { number: '04', name: 'Deliver', summary: 'We prepare the finished experience, provide the agreed deliverables, and help plan what comes next.' },
];

/** The full five-stage process on /process. */
export const processStages = [
  {
    number: '01',
    name: 'Discover',
    heading: 'Every great project starts with understanding.',
    body: 'We learn about the idea, business context, intended audience, creative preferences, and project requirements.',
    deliverables: ['Discovery Sessions', 'Creative Brief', 'Project Scope', 'Requirements Review', 'Goals and Priorities'],
  },
  {
    number: '02',
    name: 'Imagine',
    heading: 'This is where the possibilities begin.',
    body: 'We explore references, creative directions, design concepts, interaction ideas, and visual approaches.',
    deliverables: ['Moodboards', 'Concept Exploration', 'Visual References', 'Wireframes', 'Art Direction', 'Prototype Concepts'],
  },
  {
    number: '03',
    name: 'Design',
    heading: 'Turning good ideas into great experiences.',
    body: 'We refine the selected direction into purposeful visuals, interface systems, artwork, or production-ready designs.',
    deliverables: ['Brand Identity', 'UI/UX Design', '2D/3D Assets', 'Game Design Assets', 'Design Systems', 'Final Creative Files'],
  },
  {
    number: '04',
    name: 'Build',
    heading: 'Making the creative vision functional.',
    body: 'For development projects, we turn designs into responsive websites, digital products, and working software.',
    note: 'For design-only projects, this stage focuses on production and deliverable preparation instead of code.',
    deliverables: ['Frontend Development', 'Application Functionality', 'API Integration', 'Technical Testing', 'Responsive Implementation'],
  },
  {
    number: '05',
    name: 'Launch & Beyond',
    heading: 'Ready to make an impression.',
    body: 'We finalize the work, prepare agreed deliverables, and support handoff, deployment, or follow-up work as defined by the engagement.',
    deliverables: ['Final Files', 'Design Handoff', 'Website Launch', 'Deployment Support', 'Documentation', 'Optional Ongoing Services'],
  },
];

export const contactOptions = {
  services: ['2D Design', '3D Design', 'Game Design', 'Logo & Branding', 'UI/UX Design', 'Web Development', 'Software Development', 'Digital Marketing', 'Other / Not Sure Yet'],
  budgets: ['Under $5,000', '$5,000–$15,000', '$15,000–$30,000', '$30,000+', "Let's Discuss"],
  timelines: ['Ready to begin soon', 'Within 1–3 months', '3+ months', 'Still exploring'],
};
