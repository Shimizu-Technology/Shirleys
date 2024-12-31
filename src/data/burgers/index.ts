import { MenuItem } from '../../types/menu';

export const SANDWICHES: MenuItem[] = [
  {
    name: 'Grilled Cheese',
    price: 7.50
  },
  {
    name: 'Grilled Ham & Cheese',
    price: 8.00
  },
  {
    name: 'Grilled Ham / Egg & Cheese',
    price: 8.55
  },
  {
    name: 'Bacon & Egg',
    price: 8.00
  },
  {
    name: 'Bacon / Lettuce / Tomato (B.L.T.)',
    price: 8.00
  },
  {
    name: 'Tuna w/ Lettuce & Tomato',
    price: 8.00
  },
  {
    name: 'Ham and Egg',
    price: 8.00
  },
  {
    name: 'Ham and Cheese',
    price: 8.00
  },
  {
    name: 'Ham, Egg and Cheese',
    price: 8.50
  },
  {
    name: 'Clubhouse',
    price: 9.25,
    isBestSeller: true
  }
];

export const BURGERS: MenuItem[] = [
  {
    name: 'Hamburger',
    price: 9.25
  },
  {
    name: 'Cheeseburger',
    price: 9.75,
    isBestSeller: true
  },
  {
    name: 'Bacon Cheese Burger',
    price: 10.25,
    isNew: true
  }
];

export const SPECIALTY_SANDWICHES: MenuItem[] = [
  {
    name: 'Chicken Breast',
    description: 'Breaded or Grilled',
    price: 10.00
  },
  {
    name: 'Mahi Mahi Fillet',
    description: 'Breaded or Grilled',
    price: 10.00
  }
];