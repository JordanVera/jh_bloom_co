export type PortfolioImage = {
  id: string;
  src: string;
  alt: string;
};

export const PORTFOLIO_IMAGES: PortfolioImage[] = [
  {
    id: 'bouquets-01',
    src: '/portfolio/bouquets/01.jpg',
    alt: 'Custom bouquet by JH Bloom Co',
  },
  {
    id: 'events-01',
    src: '/portfolio/events/01.jpg',
    alt: 'Event floral centerpiece',
  },
  {
    id: 'bouquets-03',
    src: '/portfolio/bouquets/03.jpg',
    alt: 'Pink and white bouquet',
  },
  {
    id: 'bouquets-04',
    src: '/portfolio/bouquets/04.jpg',
    alt: 'Seasonal bouquet arrangement',
  },
  {
    id: 'bouquets-02',
    src: '/portfolio/bouquets/02.jpg',
    alt: 'Mixed floral bouquet',
  },
  {
    id: 'events-02',
    src: '/portfolio/events/02.jpg',
    alt: 'Celebration florals',
  },
  {
    id: 'events-03',
    src: '/portfolio/events/03.jpg',
    alt: 'Wedding event florals',
  },
  {
    id: 'events-04',
    src: '/portfolio/events/04.jpg',
    alt: 'Party floral arrangement',
  },
  {
    id: 'details-01',
    src: '/portfolio/details/01.jpg',
    alt: 'Floral detail close-up',
  },
  {
    id: 'details-02',
    src: '/portfolio/details/02.jpg',
    alt: 'Rose and greenery detail',
  },
  {
    id: 'details-03',
    src: '/portfolio/details/03.jpg',
    alt: 'Bouquet texture detail',
  },
  {
    id: 'details-04',
    src: '/portfolio/details/04.jpg',
    alt: 'Floral styling detail',
  },
  {
    id: 'occasions-01',
    src: '/portfolio/occasions/01.jpg',
    alt: 'Everyday occasion bouquet',
  },
  {
    id: 'occasions-02',
    src: '/portfolio/occasions/02.jpg',
    alt: 'Gift bouquet arrangement',
  },
  {
    id: 'occasions-03',
    src: '/portfolio/occasions/03.jpg',
    alt: 'Special occasion florals',
  },
  {
    id: 'occasions-04',
    src: '/portfolio/occasions/04.jpg',
    alt: 'Hand-tied bouquet',
  },
];

export const FEATURED_IMAGES = PORTFOLIO_IMAGES.slice(0, 4);

export const HERO_IMAGES = [
  {
    src: '/hero/01-wedding-table.jpg',
    alt: 'Wedding table with pink and peach floral centerpiece',
  },
  {
    src: '/hero/03-bridal-bouquet.jpg',
    alt: 'Bridal bouquet of pink roses and succulents',
  },
  {
    src: '/hero/05-wedding-tablescape.jpg',
    alt: 'Wedding table setting with floral arrangements',
  },
  {
    src: '/hero/02-pink-bouquet.jpg',
    alt: 'Pink and red flower bouquet in glass vase',
  },
] as const;
