import { useState, useCallback } from 'react';
import Header from './components/Header';
import Story from './components/Story';
import MenuNav from './components/MenuNav';
import MobileNav from './components/MobileNav';
import MenuCategory from './components/Menu/MenuCategory';
import ScrollToTop from './components/ScrollToTop';
import { MENU_CATEGORIES } from './data/menuCategories';
import { getMenuSections } from './utils/menuSections';

export default function App() {
  const [activeCategory, setActiveCategory] = useState(MENU_CATEGORIES[0].id);

  const scrollToCategory = useCallback((id: string) => {
    const element = document.getElementById(`category-${id}`);
    if (element) {
      const mobileNavHeight = 72; // Approximate height of mobile nav
      const top = element.getBoundingClientRect().top + window.pageYOffset - mobileNavHeight;
      window.scrollTo({ top, behavior: 'smooth' });
      setActiveCategory(id);
    }
  }, []);

  return (
    <div className="min-h-screen bg-amber-50">
      <Header />
      <Story />
      
      <MobileNav
        categories={MENU_CATEGORIES}
        activeCategory={activeCategory}
        onCategoryClick={scrollToCategory}
      />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="lg:grid lg:grid-cols-[auto,1fr] lg:gap-8">
            <MenuNav
              categories={MENU_CATEGORIES}
              activeCategory={activeCategory}
              onCategoryClick={scrollToCategory}
            />
            
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="p-8 md:p-12">
                {MENU_CATEGORIES.map((category) => {
                  const sections = getMenuSections(category.id);
                  if (sections.length === 0) return null;
                  
                  return (
                    <div
                      key={category.id}
                      id={`category-${category.id}`}
                      className="scroll-mt-24 lg:scroll-mt-4"
                    >
                      <MenuCategory
                        title={category.title}
                        subtitle={category.subtitle}
                        description={category.description}
                        sections={sections}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <ScrollToTop />
      
      <footer className="bg-brown-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Cozy Coffee Shop - Home of the Best Fried Rice
          </p>
          <div className="mt-4 space-x-6">
            <a href="tel:+16702355379" className="text-white hover:text-amber-200 transition-colors duration-200">
              Saipan: (670) 235-5379
            </a>
            <a href="tel:+16716496622" className="text-white hover:text-amber-200 transition-colors duration-200">
              Guam: (671) 649-6622
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}