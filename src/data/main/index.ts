import { GRILLED_ITEMS } from './grilled';
import { STEAK_ITEMS } from './steak';
import { FRIED_ITEMS } from './fried';

export const MAIN_SECTIONS = [
  {
    title: 'From The Grill',
    items: GRILLED_ITEMS,
    note: 'All grilled items include mixed vegetables and your choice of steamed rice or French fries. Upgrade to fried rice for +$3.00.'
  },
  {
    title: 'Steak',
    items: STEAK_ITEMS,
    note: 'All steak items include mixed vegetables and your choice of steamed rice or French fries. Upgrade to fried rice for +$3.00.'
  },
  {
    title: 'From The Fryer',
    items: FRIED_ITEMS
  }
];