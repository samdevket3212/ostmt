export type ServiceCategory = 'design' | 'development' | 'marketing';
export type ServiceArtKind = '2d-3d' | 'game' | 'brand' | 'uiux' | 'web' | 'software' | 'marketing';

export interface Service {
  slug: string;
  number: string;
  name: string;
  shortName: string;
  /** Contact form options this service preselects. */
  contactLabels: string[];
  category: ServiceCategory;
  eyebrow: string;
  headline: string;
  summary: string[];
  cardHeadline: string;
  cardText: string;
  sectionLabel: string;
  sectionHeading: string;
  body: string[];
  deliverables: string[];
  approachHeading: string;
  approachBody: string;
  faqs: { question: string; answer: string }[];
  ctaHeading: string;
  ctaLabel: string;
  relatedProjects: string[];
  relatedServices: string[];
  seoTitle: string;
  seoDescription: string;
  art: ServiceArtKind;
  /** Accent used for the hero artwork panel. */
  theme: 'coral' | 'cobalt' | 'ink' | 'mint' | 'sand';
}

export const serviceCategories: { id: ServiceCategory; number: string; label: string; heading: string; description: string }[] = [
  {
    id: 'design',
    number: '01',
    label: 'Creative Design',
    heading: 'Where imagination takes shape.',
    description: 'We explore ideas through visual storytelling, dimensional artwork, identity systems, interactive design, and original creative concepts.',
  },
  {
    id: 'development',
    number: '02',
    label: 'Digital Development',
    heading: 'Turning vision into functionality.',
    description: 'We create websites, software, and digital platforms where design quality and technical execution work together.',
  },
  {
    id: 'marketing',
    number: '03',
    label: 'Digital Marketing',
    heading: 'Helping great ideas get noticed.',
    description: "Creative content, digital marketing, and audience-focused campaigns help extend the reach of what you've built.",
  },
];

export const services: Service[] = [
  {
    slug: '2d-3d-design',
    number: '01',
    name: '2D & 3D Design',
    shortName: '2D & 3D Design',
    contactLabels: ['2D Design', '3D Design'],
    category: 'design',
    eyebrow: 'Art / Dimension / Visual Storytelling',
    headline: 'From flat ideas to extraordinary dimensions.',
    summary: [
      "Creativity doesn't have to stay on the page. We produce expressive 2D artwork and dimensional 3D visuals that give ideas form, character, movement, and meaning.",
    ],
    cardHeadline: 'Ideas with depth.',
    cardText: 'Illustration, 3D modeling, digital artwork, and visual storytelling that transform imagination into impactful creative assets.',
    sectionLabel: 'The art of possibilities',
    sectionHeading: 'Every perspective tells a different story.',
    body: [
      'From a simple illustration to a detailed 3D environment, visual design helps audiences experience an idea in a way words alone cannot.',
      'Our approach combines art direction, composition, color, material, and detail to create assets that feel distinctive and purposeful.',
    ],
    deliverables: [
      '2D Illustrations',
      'Digital Art and Compositing',
      '3D Modeling',
      '3D Texturing and Materials',
      'Product Visualization',
      'Character Design and Concept Art',
      'Environment Art',
      'Motion Graphics',
      '3D Animation',
      'Digital Advertising Artwork',
      'Website and Application Visual Assets',
    ],
    approachHeading: 'Sketch the idea. Explore the form. Refine the experience.',
    approachBody: 'We begin with a creative direction, explore the visual possibilities, and refine the selected concept into finished assets suited to their intended use.',
    faqs: [
      { question: 'Can you provide only the design assets?', answer: 'Yes. Design-only engagements can focus on final illustrations, 3D assets, renders, or creative compositions.' },
      { question: 'Can the work be prepared for a website, game, or campaign?', answer: 'Yes. Asset formats and production requirements can be agreed upon according to the final platform.' },
    ],
    ctaHeading: "Let's give your idea another dimension.",
    ctaLabel: 'Start a 2D/3D Project',
    relatedProjects: ['modulo', 'form-and-function'],
    relatedServices: ['game-design', 'branding', 'digital-marketing'],
    seoTitle: '2D & 3D Design Services',
    seoDescription: 'Illustration, 3D modeling, product visualization, character and environment art from One Stop Media in Sheridan, Wyoming.',
    art: '2d-3d',
    theme: 'coral',
  },
  {
    slug: 'game-design',
    number: '02',
    name: 'Game Design',
    shortName: 'Game Design',
    contactLabels: ['Game Design'],
    category: 'design',
    eyebrow: 'Game Worlds / Player Experiences / Digital Art',
    headline: 'Every great game starts with a world worth exploring.',
    summary: [
      'We bring creative ideas into play through game concepts, art direction, interactive interfaces, characters, environments, and immersive visual experiences.',
    ],
    cardHeadline: 'Designed to play.',
    cardText: 'Game art, interactive interfaces, characters, environments, and experiences built around memorable worlds and intuitive play.',
    sectionLabel: 'Create more than a screen',
    sectionHeading: 'Worlds with personality. Interfaces with purpose.',
    body: [
      'A memorable game depends on the details players see, feel, and interact with.',
      'We explore the visual and experiential elements that make a game engaging, from the first concept sketch to the final interface direction.',
    ],
    deliverables: [
      'Game Concept Design',
      'Game Art Direction',
      'Character Concept Art',
      '2D and 3D Game Assets',
      'Environment Art',
      'Game Interface Design',
      'HUD Design',
      'Game Menu Systems',
      'Inventory and Icon Design',
      'Visual Level Concepts',
      'Interaction Prototypes',
      'Gameplay Experience Design Concepts',
    ],
    approachHeading: 'Imagine. Explore. Play. Refine.',
    approachBody: 'We develop visual direction and player-focused design concepts that can support a cohesive, engaging experience.',
    faqs: [
      { question: 'Can you design game interfaces without developing the full game?', answer: 'Yes. UI, HUD, menu, and visual asset work can be scoped independently.' },
      { question: 'Can you work on early game concepts?', answer: 'Yes. Concept artwork, experience planning, and creative direction can help shape an early-stage idea.' },
    ],
    ctaHeading: "Let's create a world worth playing.",
    ctaLabel: 'Discuss Your Game',
    relatedProjects: ['next-level', 'modulo'],
    relatedServices: ['2d-3d-design', 'ui-ux-design', 'software-development'],
    seoTitle: 'Game Art & Design Services',
    seoDescription: 'Game concepts, art direction, characters, environments, HUDs and game interfaces from One Stop Media in Sheridan, Wyoming.',
    art: 'game',
    theme: 'ink',
  },
  {
    slug: 'branding',
    number: '03',
    name: 'Logo & Brand Identity',
    shortName: 'Branding',
    contactLabels: ['Logo & Branding'],
    category: 'design',
    eyebrow: 'Identity / Graphic Design / Brand Systems',
    headline: 'Make your brand impossible to confuse.',
    summary: [
      "Distinctive brands don't just look good. They communicate personality, create recognition, and make every interaction feel connected.",
      'We design memorable logos and visual identity systems built around what makes your brand different.',
    ],
    cardHeadline: 'Identity with character.',
    cardText: 'Distinctive logos, brand systems, and visual languages that express who you are and make your brand recognizable.',
    sectionLabel: 'Your identity, expressed',
    sectionHeading: 'A strong brand has its own visual language.',
    body: [
      'From typography and color to logo design and digital applications, every visual element contributes to how people recognize and experience a brand.',
      'We approach identity work as a complete system rather than a collection of isolated graphics.',
    ],
    deliverables: [
      'Logo Design',
      'Logo Redesign',
      'Brand Identity Development',
      'Visual Direction',
      'Typography Systems',
      'Color Palettes',
      'Brand Guidelines',
      'Stationery and Business Collateral',
      'Social Media Branding',
      'Marketing Graphics',
      'Animated Logos',
      'Brand Application Mockups',
    ],
    approachHeading: 'Discover the personality. Develop the identity. Make it consistent.',
    approachBody: 'We establish the creative foundation, explore visual directions, and refine a cohesive system of recognizable brand assets.',
    faqs: [
      { question: 'Can I commission a logo without a full brand package?', answer: 'Yes. Logo-specific projects can be discussed independently from comprehensive identity systems.' },
      { question: 'Do you create brand guidelines?', answer: 'Yes. Guidelines can be included to help ensure consistent use of the identity.' },
    ],
    ctaHeading: "Let's create a brand people remember.",
    ctaLabel: 'Start a Branding Project',
    relatedProjects: ['form-and-function', 'modulo'],
    relatedServices: ['2d-3d-design', 'web-development', 'digital-marketing'],
    seoTitle: 'Logo & Brand Identity Design',
    seoDescription: 'Logo design, brand identity systems, typography, color and brand guidelines from One Stop Media in Sheridan, Wyoming.',
    art: 'brand',
    theme: 'sand',
  },
  {
    slug: 'ui-ux-design',
    number: '04',
    name: 'UI/UX Design',
    shortName: 'UI/UX',
    contactLabels: ['UI/UX Design'],
    category: 'design',
    eyebrow: 'Digital Products / Interfaces / Experience Design',
    headline: 'Make every interaction feel effortless.',
    summary: [
      'The best digital products balance beauty with clarity. We design websites, applications, and interactive experiences that are intuitive, engaging, and carefully considered.',
    ],
    cardHeadline: 'Every interaction matters.',
    cardText: 'Thoughtful websites, applications, and digital product interfaces designed to feel natural, engaging, and beautifully simple.',
    sectionLabel: 'Made for people',
    sectionHeading: "Beautiful isn't enough. It has to make sense.",
    body: [
      'Thoughtful UI/UX design helps people navigate information, complete tasks, and interact with digital products naturally.',
      'We bring structure, visual hierarchy, and interaction design together to create coherent digital experiences.',
    ],
    deliverables: [
      'Website UI Design',
      'Mobile App UI/UX',
      'SaaS Product Design',
      'Dashboard Design',
      'User Flows',
      'Wireframing',
      'Interactive Prototyping',
      'Component Libraries',
      'Design Systems',
      'Responsive Interface Design',
      'UX Audits',
      'Product Redesign',
    ],
    approachHeading: 'Understand the user. Map the journey. Design the interaction.',
    approachBody:
      'Our process begins with understanding the experience, developing its information structure, and refining layouts and interactions through design iterations.',
    faqs: [
      { question: 'Do you design both mobile apps and desktop products?', answer: 'Yes. UI/UX projects can cover web, desktop, and mobile experiences.' },
      { question: 'Can you work with our existing engineering team?', answer: 'Yes. Design files and component specifications can be prepared for engineering handoff.' },
    ],
    ctaHeading: "Let's design a better experience.",
    ctaLabel: 'Discuss Your Product',
    relatedProjects: ['openspace', 'next-level'],
    relatedServices: ['web-development', 'software-development', 'branding'],
    seoTitle: 'UI/UX Design Services',
    seoDescription: 'Website, mobile app, SaaS and dashboard interface design, prototypes and design systems from One Stop Media in Sheridan, Wyoming.',
    art: 'uiux',
    theme: 'cobalt',
  },
  {
    slug: 'web-development',
    number: '05',
    name: 'Web Development',
    shortName: 'Web Development',
    contactLabels: ['Web Development'],
    category: 'development',
    eyebrow: 'Web Experiences / Creative Development',
    headline: 'Websites with a little more wow.',
    summary: [
      'We build responsive, design-led websites that bring brands and ideas to life through clean engineering, beautiful interfaces, and thoughtful interaction.',
    ],
    cardHeadline: 'Beautifully built.',
    cardText: 'Modern, responsive websites and digital experiences that combine compelling visual design with dependable technology.',
    sectionLabel: 'Better by design',
    sectionHeading: 'A website should do more than exist.',
    body: [
      'A website is often where people first experience a brand.',
      'We combine creative design and technical development to create digital spaces that communicate clearly, work smoothly, and leave a lasting impression.',
    ],
    deliverables: [
      'Creative Business Websites',
      'Portfolio Websites',
      'Responsive Web Development',
      'Landing Pages',
      'E-commerce Websites',
      'Content Management Systems',
      'Frontend Development',
      'Interactive Web Experiences',
      'Website Redesign',
      'Website Performance Improvements',
      'Website Maintenance and Enhancements',
    ],
    approachHeading: 'Design with purpose. Develop with care. Launch with confidence.',
    approachBody: 'We translate the approved creative direction into a responsive website while testing usability, functionality, and presentation.',
    faqs: [
      { question: 'Can you design and develop the entire website?', answer: 'Yes. Design and development can be delivered as one coordinated project.' },
      { question: 'Can you redesign an existing website?', answer: 'Yes. Redesign projects may cover visuals, user experience, content structure, and implementation.' },
    ],
    ctaHeading: 'Your next website deserves better design.',
    ctaLabel: 'Start a Website Project',
    relatedProjects: ['openspace', 'form-and-function'],
    relatedServices: ['ui-ux-design', 'software-development', 'digital-marketing'],
    seoTitle: 'Custom Web Development',
    seoDescription: 'Responsive, design-led websites, e-commerce, CMS builds and redesigns from One Stop Media in Sheridan, Wyoming.',
    art: 'web',
    theme: 'mint',
  },
  {
    slug: 'software-development',
    number: '06',
    name: 'Software Development',
    shortName: 'Software Development',
    contactLabels: ['Software Development'],
    category: 'development',
    eyebrow: 'Applications / Platforms / Digital Systems',
    headline: 'Smart ideas deserve smart software.',
    summary: ['We create custom software and digital applications that help businesses simplify workflows, deliver services, and transform ideas into useful products.'],
    cardHeadline: 'Made to work smarter.',
    cardText: 'Custom digital products, web applications, and business platforms designed around real-world workflows and meaningful functionality.',
    sectionLabel: 'Technology with intention',
    sectionHeading: 'Build something people actually want to use.',
    body: [
      'Useful software starts with understanding the problem.',
      'We combine product thinking, interface design, and development to create digital solutions that make complex processes more manageable.',
    ],
    deliverables: [
      'Custom Web Applications',
      'Business Management Tools',
      'SaaS Platforms',
      'Internal Dashboards',
      'Customer Portals',
      'Workflow Automation',
      'API Integrations',
      'Custom Digital Tools',
      'MVP Development',
      'Application Redesign',
      'Software Interface Development',
    ],
    approachHeading: 'Understand the challenge. Design the solution. Develop the product.',
    approachBody: 'We define essential functionality, design user workflows, and implement features in a structured development process.',
    faqs: [
      { question: 'Can you build a prototype or MVP?', answer: 'Yes. Early product concepts can be scoped as prototypes or minimum viable products.' },
      {
        question: 'Can you improve an existing software platform?',
        answer: 'Yes. Projects involving an existing application can be evaluated after reviewing its architecture and requirements.',
      },
    ],
    ctaHeading: "Let's turn your idea into something useful.",
    ctaLabel: 'Discuss Software Development',
    relatedProjects: ['openspace'],
    relatedServices: ['ui-ux-design', 'web-development', 'game-design'],
    seoTitle: 'Custom Software Development',
    seoDescription: 'Custom web applications, SaaS platforms, dashboards, portals and MVPs from One Stop Media in Sheridan, Wyoming.',
    art: 'software',
    theme: 'ink',
  },
  {
    slug: 'digital-marketing',
    number: '07',
    name: 'Digital Marketing',
    shortName: 'Digital Marketing',
    contactLabels: ['Digital Marketing'],
    category: 'marketing',
    eyebrow: 'Strategy / Content / Digital Presence',
    headline: 'Good ideas deserve to be seen.',
    summary: [
      'We bring creative storytelling and digital marketing together to help businesses communicate effectively, create engaging content, and connect with their audiences.',
    ],
    cardHeadline: 'Make your message move.',
    cardText: 'Creative campaigns, content, digital strategy, and visual storytelling that help your brand connect with the audiences that matter.',
    sectionLabel: 'Creative meets strategy',
    sectionHeading: 'Turn attention into connection.',
    body: [
      'The most effective digital marketing starts with a clear message and a strong creative direction.',
      'We connect campaign ideas, content, design, and digital strategy to help brands communicate consistently across channels.',
    ],
    deliverables: [
      'Digital Marketing Strategy',
      'Social Media Marketing',
      'Creative Campaign Planning',
      'Social Content Creation',
      'Marketing Graphics',
      'Motion and Video Assets',
      'Paid Campaign Creative',
      'Landing Page Design',
      'SEO Support',
      'Content Planning',
      'Campaign Reporting',
      'Creative Performance Optimization',
    ],
    approachHeading: 'Know the audience. Shape the message. Improve the impact.',
    approachBody: 'We align marketing content with brand identity and business objectives, then use available performance information to support creative improvements.',
    faqs: [
      { question: 'Can you create marketing content without managing campaigns?', answer: 'Yes. Creative production and campaign management can be scoped separately.' },
      { question: 'Can marketing be combined with branding and web development?', answer: 'Yes. Integrated projects can align brand direction, websites, content, and campaigns.' },
    ],
    ctaHeading: "Let's create something people notice.",
    ctaLabel: 'Discuss Your Marketing Project',
    relatedProjects: ['form-and-function'],
    relatedServices: ['branding', 'web-development', '2d-3d-design'],
    seoTitle: 'Digital Marketing Services',
    seoDescription: 'Campaign strategy, social content, paid creative and SEO support from One Stop Media in Sheridan, Wyoming.',
    art: 'marketing',
    theme: 'coral',
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
export const servicesByCategory = (c: ServiceCategory) => services.filter((s) => s.category === c);
