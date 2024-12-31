import React from 'react';
import { ChevronRight } from 'lucide-react';
import { MenuCategory } from '../types/menu';

interface MobileNavProps {
  categories: MenuCategory[];
  activeCategory: string;
  onCategoryClick: (id: string) => void;
}

export default function MobileNav({ categories, activeCategory, onCategoryClick }: MobileNavProps) {
  return (
    <div className="lg:hidden sticky top-0 z-50 bg-white shadow-md">
      <div className="overflow-x-auto">
        <div className="flex whitespace-nowrap p-4 gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryClick(category.id)}
              className={`inline-flex items-center px-4 py-2 rounded-full text-sm transition-colors duration-200 ${
                activeCategory === category.id
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.title}
              <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}