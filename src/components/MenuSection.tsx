import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface MenuItem {
  name: string;
  description: string;
  price: number;
  isBestSeller?: boolean;
  isHealthy?: boolean;
}

interface MenuSectionProps {
  title: string;
  items: MenuItem[];
}

export default function MenuSection({ title, items }: MenuSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        {isExpanded ? <ChevronUp className="h-5 w-5 text-gray-500" /> : <ChevronDown className="h-5 w-5 text-gray-500" />}
      </button>
      
      {isExpanded && (
        <div className="px-6 pb-4">
          <div className="space-y-4">
            {items.map((item, index) => (
              <div key={index} className="flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-medium text-gray-900">{item.name}</h4>
                    {item.isBestSeller && (
                      <span className="px-2 py-1 text-xs font-semibold text-green-800 bg-green-100 rounded-full">
                        Best Seller
                      </span>
                    )}
                    {item.isHealthy && (
                      <span className="px-2 py-1 text-xs font-semibold text-blue-800 bg-blue-100 rounded-full">
                        Healthy Choice
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-sm text-gray-600">{item.description}</p>
                </div>
                <span className="font-medium text-gray-900">${item.price.toFixed(2)}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}