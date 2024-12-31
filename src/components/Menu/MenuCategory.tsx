import React from 'react';
import { MenuSection as MenuSectionType } from '../../types/menu';
import { Utensils } from 'lucide-react';

interface MenuCategoryProps {
  title: string;
  subtitle?: string;
  description?: string;
  sections: MenuSectionType[];
}

export default function MenuCategory({
  title,
  subtitle,
  description,
  sections
}: MenuCategoryProps) {
  return (
    <section className="py-12 first:pt-0 border-b border-amber-100 last:border-0">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-2">
          <div className="h-px bg-red-200 flex-1 max-w-[100px]" />
          <Utensils className="w-5 h-5 text-red-400" />
          <div className="h-px bg-red-200 flex-1 max-w-[100px]" />
        </div>
        <h2 className="text-3xl font-serif text-red-600">{title}</h2>
        {subtitle && (
          <p className="text-gray-600 italic mt-2">{subtitle}</p>
        )}
        {description && (
          <p className="text-gray-700 mt-3 max-w-2xl mx-auto text-sm leading-relaxed">{description}</p>
        )}
      </div>
      
      <div className="space-y-12">
        {sections.map((section, index) => (
          <div key={index} className="space-y-6">
            {sections.length > 1 && (
              <h3 className="text-xl font-medium text-gray-800 border-b border-amber-200 pb-2">
                {section.title}
              </h3>
            )}
            <div className="grid gap-6">
              {section.items.map((item, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-start group hover:bg-amber-50/50 p-4 -mx-4 rounded-lg transition-colors duration-200"
                >
                  <div className="flex-1 pr-4">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="font-medium text-gray-900 group-hover:text-red-600 transition-colors duration-200">
                        {item.name}
                      </h4>
                      <div className="flex gap-2">
                        {item.isBestSeller && (
                          <span className="px-2 py-0.5 text-xs font-medium text-amber-800 bg-amber-100 rounded-full">
                            ★ Best Seller
                          </span>
                        )}
                        {item.isHealthy && (
                          <span className="px-2 py-0.5 text-xs font-medium text-green-800 bg-green-100 rounded-full">
                            ♥ Healthy Choice
                          </span>
                        )}
                        {item.isNew && (
                          <span className="px-2 py-0.5 text-xs font-medium text-blue-800 bg-blue-100 rounded-full">
                            New
                          </span>
                        )}
                      </div>
                    </div>
                    {item.description && (
                      <p className="mt-1 text-sm text-gray-600 leading-relaxed">{item.description}</p>
                    )}
                  </div>
                  <div className="text-right">
                    <span className="font-medium text-gray-900 group-hover:text-red-600 transition-colors duration-200">
                      ${item.price.toFixed(2)}
                    </span>
                    {item.calories && (
                      <p className="text-xs text-gray-500 mt-1">{item.calories} cal</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            {section.note && (
              <p className="text-sm text-gray-600 italic mt-6 bg-amber-50/50 p-4 rounded-lg">
                {section.note}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}