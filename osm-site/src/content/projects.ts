export type ProjectTone = 'modulo' | 'next-level' | 'form-and-function' | 'openspace';
export type WorkFilter = 'all' | '2d-3d' | 'game' | 'branding' | 'uiux' | 'development';

export interface Project {
  slug: string;
  index: string;
  name: string;
  title: string;
  /** 'Studio Concept' until replaced by an authorized client project. */
  type: 'Studio Concept' | 'Client Project';
  categories: string[];
  disciplines: string[];
  filters: Exclude<WorkFilter, 'all'>[];
  summary: string;
  overview: string[];
  direction: string;
  details: string;
  focusAreas: string[];
  /** Five frames in the order the brief lists them. Frame 0 is the cover. */
  gallery: string[];
  relatedServices: string[];
  relatedProjects: string[];
  tone: ProjectTone;
  coverAlt: string;
  seoDescription: string;
}

export const workFilters: { id: WorkFilter; label: string }[] = [
  { id: 'all', label: 'All Work' },
  { id: '2d-3d', label: '2D & 3D' },
  { id: 'game', label: 'Game Design' },
  { id: 'branding', label: 'Branding' },
  { id: 'uiux', label: 'UI/UX' },
  { id: 'development', label: 'Development' },
];

export const projects: Project[] = [
  {
    slug: 'modulo',
    index: '01',
    name: 'MODULO',
    title: 'Shape a Different Perspective',
    type: 'Studio Concept',
    categories: ['3D Art', 'Visual Identity', 'Creative Direction'],
    disciplines: ['3D Art', 'Visual Systems', 'Creative Direction'],
    filters: ['2d-3d', 'branding'],
    summary: 'An experimental visual world shaped through dimension, color, and expressive geometry.',
    overview: [
      'MODULO is an exploration of visual form, dimension, and movement. Through bold geometry and expressive material studies, the concept investigates how abstract shapes can create a recognizable visual world.',
    ],
    direction: 'Glossy, sculptural shapes balanced with strong typography and vibrant color.',
    details:
      'The system is built from a small set of modules: a quarter-round, a half-round, a block and a sphere. They repeat at different scales and in a fixed palette of coral, cobalt, cream and ink, so any new composition still reads as part of the same world.',
    focusAreas: ['Creative Direction', '3D Form Exploration', 'Material Studies', 'Color Systems', 'Dimensional Composition', 'Motion Concepts'],
    gallery: ['Full-width sculptural hero', 'Abstract geometric studies', 'Material and texture details', 'Typographic poster', 'Digital application mockup'],
    relatedServices: ['2d-3d-design', 'branding', 'digital-marketing'],
    relatedProjects: ['form-and-function', 'next-level'],
    tone: 'modulo',
    coverAlt: 'Sculptural coral, cobalt and cream geometric forms stacked on a warm background.',
    seoDescription: 'MODULO, a One Stop Media studio concept exploring 3D form, color and expressive geometry.',
  },
  {
    slug: 'next-level',
    index: '02',
    name: 'NEXT LEVEL',
    title: 'Made for Players',
    type: 'Studio Concept',
    categories: ['Game Design', 'Game UI', 'Digital Art'],
    disciplines: ['Game Design', 'Game Art', 'UI/UX'],
    filters: ['game', 'uiux'],
    summary: 'An exploration of bold game interfaces, atmospheric art, and intuitive player experiences.',
    overview: [
      'NEXT LEVEL explores a fictional interactive game universe with an emphasis on atmosphere, visual identity, and player-centered interface design.',
      'The concept connects imaginative world-building with functional interface elements.',
    ],
    direction: 'Bold sci-fi-inspired typography, highly graphic interface elements, atmospheric environments, and distinctive game UI screens.',
    details:
      'Every interface element shares one angled corner and one accent color, so health, ammunition and objectives stay readable against busy environments. Menus reuse the same panels at a larger scale, keeping the game world and its interface visibly related.',
    focusAreas: ['Game Interface Concepts', 'HUD Design', 'Menu Systems', 'Game Art Direction', 'Environment Concepts', 'Iconography'],
    gallery: ['Game-world hero', 'Main menu', 'Gameplay HUD mockup', 'Inventory interface', 'Game branding and icon set'],
    relatedServices: ['game-design', 'ui-ux-design', '2d-3d-design'],
    relatedProjects: ['modulo', 'openspace'],
    tone: 'next-level',
    coverAlt: 'A sci-fi game landscape at dusk with an angular coral HUD frame and a cobalt targeting ring.',
    seoDescription: 'NEXT LEVEL, a One Stop Media studio concept for a fictional game universe and its player interface.',
  },
  {
    slug: 'form-and-function',
    index: '03',
    name: 'FORM & FUNCTION',
    title: 'An Identity That Speaks',
    type: 'Studio Concept',
    categories: ['Branding', 'Logo Design', 'Art Direction'],
    disciplines: ['Branding', 'Logo Design', 'Graphic Design'],
    filters: ['branding'],
    summary: 'A modular brand identity concept built around distinctive typography, form, and movement.',
    overview: [
      'FORM & FUNCTION is a brand identity exploration built around the relationship between simple forms, bold typography, and a flexible visual language.',
      'The concept demonstrates how a modular identity can adapt across digital and print-inspired applications.',
    ],
    direction: 'High-contrast graphic design, architectural typography, clean geometric symbols, and expressive color applications.',
    details:
      'The symbol is made of a square and a circle that can sit apart, overlap or merge. That single rule produces the logo, the pattern, the icon set and the motion behaviour, so the identity can flex without losing its character.',
    focusAreas: ['Logo Concept', 'Visual Identity', 'Typography', 'Color Direction', 'Brand Mockups', 'Social Graphics'],
    gallery: ['Identity hero poster', 'Logo system', 'Typography studies', 'Digital brand mockups', 'Motion identity exploration'],
    relatedServices: ['branding', 'digital-marketing', '2d-3d-design'],
    relatedProjects: ['modulo', 'openspace'],
    tone: 'form-and-function',
    coverAlt: 'A black and cream identity poster with a square and circle symbol and large architectural type.',
    seoDescription: 'FORM & FUNCTION, a One Stop Media studio concept for a modular brand identity built on form and typography.',
  },
  {
    slug: 'openspace',
    index: '04',
    name: 'OPENSPACE',
    title: 'Interfaces With Intention',
    type: 'Studio Concept',
    categories: ['UI/UX', 'Product Design', 'Development Concept'],
    disciplines: ['UI/UX', 'Digital Product Design', 'Web Application Concept'],
    filters: ['uiux', 'development'],
    summary: 'A modern digital workspace concept where complex tasks meet clear, approachable design.',
    overview: [
      'OPENSPACE explores a contemporary digital workspace with an emphasis on visual clarity, simple navigation, and well-organized product functionality.',
      'The design concept balances information density with a friendly, accessible visual language.',
    ],
    direction: 'Warm neutral backgrounds, structured dashboards, vibrant accent colors, and restrained interaction patterns.',
    details:
      'Navigation is limited to five destinations, and every screen follows the same three-zone layout: context on the left, work in the middle, details on the right. Cobalt marks what you can act on and coral marks what needs attention, nothing else.',
    focusAreas: ['Product Design', 'Dashboard Layout', 'User Flows', 'Navigation Design', 'Interface Components', 'Responsive Product Concepts'],
    gallery: ['Main dashboard', 'Product overview mockup', 'Component detail', 'Application navigation', 'Mobile interface adaptations'],
    relatedServices: ['ui-ux-design', 'software-development', 'web-development'],
    relatedProjects: ['next-level', 'form-and-function'],
    tone: 'openspace',
    coverAlt: 'A light workspace dashboard with cobalt accents layered over a laptop and phone.',
    seoDescription: 'OPENSPACE, a One Stop Media studio concept for a clear, approachable digital workspace.',
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
