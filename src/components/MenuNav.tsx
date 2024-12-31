import React from 'react';
import { MenuCategory } from '../types/menu';

interface MenuNavProps {
  categories: MenuCategory[];
  activeCategory: string;
  onCategoryClick: (id: string) => void;
}

export default function MenuNav({ categories, activeCategory, onCategoryClick }: MenuNavProps) {
  return (
    <nav className="hidden lg:block sticky top-4 w-64 bg-white rounded-lg shadow-md p-4 h-[calc(100vh-2rem)] overflow-y-auto">
      <ul className="space-y-2">
        {categories.map((category) => (
          <li key={category.id}>
            <button
              onClick={() => onCategoryClick(category.id)}
              className={`w-full text-left px-4 py-2 rounded-md transition-colors duration-200 ${
                activeCategory === category.id
                  ? 'bg-red-600 text-white'
                  : 'hover:bg-red-50 text-gray-700'
              }`}
            >
              {category.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}