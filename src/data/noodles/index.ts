import { MenuItem } from '../../types/menu';

export const YAKISOBA: MenuItem[] = [
  {
    name: 'Beef',
    price: 13.75
  },
  {
    name: 'Chicken',
    price: 13.25
  },
  {
    name: 'Shrimp',
    price: 13.75
  },
  {
    name: 'Combination',
    price: 14.00,
    isBestSeller: true
  }
];

export const PANCIT: MenuItem[] = [
  {
    name: 'Pancit Bihon',
    price: 13.50
  },
  {
    name: 'Pancit Canton',
    price: 13.50
  },
  {
    name: 'Mixed Pancit',
    price: 13.75,
    isBestSeller: true
  },
  {
    name: "Luming's Palabok",
    price: 14.00,
    description: 'Malabon-style noodles, orange sauce, smoked fish flakes, shrimp, squid, egg.'
  }
];

export const NOODLE_SOUP: MenuItem[] = [
  {
    name: 'Wonton Noodle Soup',
    price: 11.50,
    isBestSeller: true
  },
  {
    name: 'Island Style Soba',
    price: 11.25,
    isNew: true
  },
  {
    name: 'Saimen Noodle Soup',
    price: 11.75
  },
  {
    name: 'Lomi',
    price: 11.00
  }
];