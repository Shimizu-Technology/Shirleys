import { MenuSection } from '../types/menu';
import { EGGS_AND_THINGS, SCRAMBLES, OMELETS } from '../data/breakfast';
import { APPETIZERS } from '../data/appetizers';
import { SALADS, SALAD_ADDONS } from '../data/salads';
import { LITE_MEALS } from '../data/lite-meals';
import { FRIED_RICE } from '../data/fried-rice';
import { MAIN_SECTIONS } from '../data/main';
import { YAKISOBA, PANCIT, NOODLE_SOUP } from '../data/noodles';
import { PASTA } from '../data/pasta';
import { CUTLETS } from '../data/cutlets';
import { SWEET_SOUR } from '../data/sweet-sour';
import { CHOPSUEY, TAOSI } from '../data/wok';
import { FILIPINO_FAVORITES } from '../data/filipino';
import { SANDWICHES, BURGERS, SPECIALTY_SANDWICHES } from '../data/burgers';
import { SIDES } from '../data/sides';
import { DESSERTS } from '../data/desserts';
import { COLD_DRINKS, HOT_DRINKS, ALCOHOLIC_DRINKS } from '../data/drinks';
import { PREMIUM_DRINKS } from '../data/premium-drinks';
import { KIDDIE_MEALS, STUDENT_MEALS } from '../data/kids';

export function getMenuSections(categoryId: string): MenuSection[] {
  switch (categoryId) {
    case 'breakfast':
      return [
        { title: "Eggs N' Things", items: EGGS_AND_THINGS },
        { title: "Scrambles", items: SCRAMBLES },
        { title: "Omelets", items: OMELETS }
      ];
    case 'appetizers':
      return [{ title: "", items: APPETIZERS }];
    case 'salads':
      return [
        { title: "", items: SALADS },
        { title: "Add to any salad", items: SALAD_ADDONS }
      ];
    case 'lite-meals':
      return [{ title: "", items: LITE_MEALS }];
    case 'fried-rice':
      return [{ title: "", items: FRIED_RICE }];
    case 'lunch-dinner':
      return MAIN_SECTIONS;
    case 'noodles':
      return [
        { title: "Yakisoba", items: YAKISOBA },
        { title: "Pancit", items: PANCIT },
        { title: "Noodle Soup", items: NOODLE_SOUP }
      ];
    case 'pasta':
      return [{ title: "", items: PASTA }];
    case 'cutlets':
      return [{ title: "", items: CUTLETS }];
    case 'sweet-sour':
      return [{ title: "", items: SWEET_SOUR }];
    case 'wok':
      return [
        { title: "Chopsuey", items: CHOPSUEY },
        { title: "Taosi", items: TAOSI }
      ];
    case 'filipino':
      return [{ title: "", items: FILIPINO_FAVORITES }];
    case 'burgers':
      return [
        { title: "Sandwiches", items: SANDWICHES },
        { title: "Burgers", items: BURGERS },
        { title: "Specialty Sandwiches", items: SPECIALTY_SANDWICHES }
      ];
    case 'sides':
      return [{ title: "", items: SIDES }];
    case 'desserts':
      return [{ title: "", items: DESSERTS }];
    case 'drinks':
      return [
        { title: "Cold Drinks", items: COLD_DRINKS },
        { title: "Hot Drinks", items: HOT_DRINKS },
        { title: "Alcoholic Beverages", items: ALCOHOLIC_DRINKS }
      ];
    case 'premium-drinks':
      return [{ title: "", items: PREMIUM_DRINKS }];
    case 'kids':
      return [
        { title: "Kiddie Meals", items: KIDDIE_MEALS },
        { title: "Student Meals", items: STUDENT_MEALS }
      ];
    default:
      return [];
  }
}