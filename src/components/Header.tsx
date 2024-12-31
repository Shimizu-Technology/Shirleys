import { Coffee } from 'lucide-react';

export default function Header() {
  return (
    <header className="relative bg-white shadow-lg">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80')] opacity-10 bg-cover bg-center" />
      <div className="relative container mx-auto px-4 py-6 flex flex-col items-center">
        <div className="text-center">
          <h1 className="font-brand text-red-600 text-6xl md:text-7xl mb-2">Shirley's</h1>
          <h2 className="font-sans font-bold text-blue-600 text-2xl md:text-3xl tracking-wide">COFFEE SHOP</h2>
          <p className="font-script text-blue-500 italic mt-2 text-2xl">Home of the Best Fried Rice</p>
        </div>
      </div>
    </header>
  );
}