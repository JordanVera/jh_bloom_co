export type PortfolioCategory = 'Bouquets' | 'Events' | 'Details' | 'Occasions';

export type PortfolioProject = {
  slug: string;
  title: string;
  photographer: string;
  category: PortfolioCategory;
  cover: string;
  images: string[];
};

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    slug: 'bouquets',
    title: 'Custom Bouquets',
    photographer: '',
    category: 'Bouquets',
    cover: '/portfolio/bouquets/01.jpg',
    images: [
      '/portfolio/bouquets/01.jpg',
      '/portfolio/bouquets/02.jpg',
      '/portfolio/bouquets/03.jpg',
      '/portfolio/bouquets/04.jpg',
    ],
  },
  {
    slug: 'events',
    title: 'Events & Celebrations',
    photographer: '',
    category: 'Events',
    cover: '/portfolio/events/01.jpg',
    images: [
      '/portfolio/events/01.jpg',
      '/portfolio/events/02.jpg',
      '/portfolio/events/03.jpg',
      '/portfolio/events/04.jpg',
    ],
  },
  {
    slug: 'details',
    title: 'Floral Details',
    photographer: '',
    category: 'Details',
    cover: '/portfolio/details/01.jpg',
    images: [
      '/portfolio/details/01.jpg',
      '/portfolio/details/02.jpg',
      '/portfolio/details/03.jpg',
      '/portfolio/details/04.jpg',
    ],
  },
  {
    slug: 'occasions',
    title: 'Everyday Occasions',
    photographer: '',
    category: 'Occasions',
    cover: '/portfolio/occasions/01.jpg',
    images: [
      '/portfolio/occasions/01.jpg',
      '/portfolio/occasions/02.jpg',
      '/portfolio/occasions/03.jpg',
      '/portfolio/occasions/04.jpg',
    ],
  },
];

export const PORTFOLIO_CATEGORIES: Array<'All' | PortfolioCategory> = [
  'All',
  'Bouquets',
  'Events',
  'Details',
  'Occasions',
];

export const FEATURED_PROJECTS = PORTFOLIO_PROJECTS.slice(0, 6);

export const HERO_IMAGES = [
  { src: '/portfolio/bouquets/03.jpg', alt: 'Custom bouquet' },
  { src: '/portfolio/details/01.jpg', alt: 'Floral details' },
  { src: '/portfolio/events/01.jpg', alt: 'Event florals' },
  { src: '/portfolio/occasions/01.jpg', alt: 'Occasion arrangement' },
] as const;

export function getProject(slug: string) {
  return PORTFOLIO_PROJECTS.find((project) => project.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const index = PORTFOLIO_PROJECTS.findIndex(
    (project) => project.slug === slug,
  );
  if (index === -1) return { prev: undefined, next: undefined };
  const last = PORTFOLIO_PROJECTS.length - 1;
  return {
    prev: PORTFOLIO_PROJECTS[index === 0 ? last : index - 1],
    next: PORTFOLIO_PROJECTS[index === last ? 0 : index + 1],
  };
}
