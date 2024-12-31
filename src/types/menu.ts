export interface MenuItem {
  name: string;
  description?: string;
  price: number;
  isBestSeller?: boolean;
  isHealthy?: boolean;
  isNew?: boolean;
  calories?: number;
  tag?: string;
}

export interface MenuCategory {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
}

export interface MenuSection {
  title: string;
  items: MenuItem[];
  note?: string;
}