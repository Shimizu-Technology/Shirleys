import { MenuItem } from '../../types/menu';

export const FILIPINO_FAVORITES: MenuItem[] = [
  {
    name: 'Chicken & Pork Adobo',
    price: 13.00
  },
  {
    name: 'Beef Caldereta',
    price: 12.95
  },
  {
    name: 'Beef Congee (Goto)',
    price: 10.25,
    isBestSeller: true,
    description: 'Pairs well with Pork & Tofu (Tokwa\'t Baboy)'
  },
  {
    name: 'Chicken Arrozcaldo',
    price: 9.95
  },
  {
    name: 'Chicken Tinola w/ Pechay',
    price: 13.75,
    isNew: true
  },
  {
    name: 'Pork Belly & Spareribs Sinigang',
    price: 13.75,
    tag: 'IMPROVED!'
  },
  {
    name: 'Bangus Belly Sinigang',
    description: 'Milkfish Belly',
    price: 14.00
  },
  {
    name: 'Mahi Sinigang',
    price: 14.00
  },
  {
    name: 'Shrimp Sinigang',
    price: 14.75
  },
  {
    name: 'Bulalo',
    description: 'Bone Marrow Soup',
    price: 15.00,
    isBestSeller: true
  }
];