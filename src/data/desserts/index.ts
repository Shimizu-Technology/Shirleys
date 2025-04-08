import { MenuItem } from '../../types/menu';

interface DessertItem extends MenuItem {
  doublePrice?: number;
}

export const DESSERTS: DessertItem[] = [
  {
    name: 'Ice Cream',
    price: 3.25,
    doublePrice: 5.50
  },
  {
    name: 'Wicked Oreos',
    price: 7.75,
    doublePrice: 9.50,
    isNew: true
  },
  {
    name: 'Apigigi a la Mode',
    price: 7.75,
    doublePrice: 9.50,
    isNew: true
  },
  {
    name: "Famous House Crepe",
    price: 7.75,
    doublePrice: 8.75
  },
  {
    name: 'Halo-Halo',
    price: 8.75,
    isBestSeller: true
  }
];