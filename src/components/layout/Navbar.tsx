
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Menu, X, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useIsMobile } from '@/hooks/use-mobile';

const categories = [
  { name: "Бумага и бумажная продукция", path: "/products/paper" },
  { name: "Мебель", path: "/products/furniture" },
  { name: "Офисная кухня", path: "/products/kitchen" },
  { name: "Техника и расходные материалы", path: "/products/tech" },
  { name: "Товары для офиса", path: "/products/office" },
  { name: "Товары для школы", path: "/products/school" },
  { name: "Хозтовары и химия", path: "/products/chemicals" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const isMobile = useIsMobile();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search functionality
    console.log("Searching for:", searchValue);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom">
        {/* Top bar with logo and icons */}
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="text-2xl font-bold text-stationery-800">
            Канцелярский центр
          </Link>

          {!isMobile && (
            <form onSubmit={handleSearch} className="flex-1 max-w-md mx-8">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Поиск товаров..."
                  className="pl-3 pr-10"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                />
                <Button 
                  type="submit" 
                  size="sm" 
                  variant="ghost" 
                  className="absolute right-0 top-0 h-full"
                >
                  <Search size={18} />
                </Button>
              </div>
            </form>
          )}

          <div className="flex items-center space-x-4">
            <Link to="/cart" className="relative p-2">
              <ShoppingCart className="text-gray-700" size={22} />
              <span className="absolute top-0 right-0 bg-stationery-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                0
              </span>
            </Link>
            
            <Link to="/login" className="p-2">
              <User className="text-gray-700" size={22} />
            </Link>
            
            {isMobile && (
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={toggleMobileMenu} 
                className="p-2"
              >
                {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </Button>
            )}
          </div>
        </div>

        {/* Categories navigation bar */}
        {!isMobile && (
          <div className="bg-stationery-600 px-4 py-2 -mx-6 overflow-x-auto">
            <div className="flex space-x-6 text-white whitespace-nowrap">
              {categories.map((category) => (
                <Link 
                  key={category.path}
                  to={category.path} 
                  className="text-white hover:text-white/80 text-sm font-medium py-1 transition-colors"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Navigation links - desktop */}
        {!isMobile && (
          <nav className="py-3 border-t">
            <ul className="flex space-x-8">
              <li>
                <Link to="/" className="text-gray-700 hover:text-stationery-600 transition-colors font-medium">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-700 hover:text-stationery-600 transition-colors">
                  Каталог
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-gray-700 hover:text-stationery-600 transition-colors">
                  Новости
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-700 hover:text-stationery-600 transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>

      {/* Mobile menu */}
      {isMobile && mobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 pt-20 px-4 animate-fade-in">
          <form onSubmit={handleSearch} className="mb-6">
            <div className="relative">
              <Input
                type="text"
                placeholder="Поиск товаров..."
                className="pl-3 pr-10"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <Button 
                type="submit" 
                size="sm" 
                variant="ghost" 
                className="absolute right-0 top-0 h-full"
              >
                <Search size={18} />
              </Button>
            </div>
          </form>
          
          <nav>
            <ul className="flex flex-col space-y-4">
              <li>
                <Link 
                  to="/" 
                  className="text-lg font-medium block py-2"
                  onClick={toggleMobileMenu}
                >
                  Главная
                </Link>
              </li>
              <li>
                <Link 
                  to="/products" 
                  className="text-lg font-medium block py-2"
                  onClick={toggleMobileMenu}
                >
                  Каталог
                </Link>
              </li>
              {categories.map((category) => (
                <li key={category.path}>
                  <Link 
                    to={category.path} 
                    className="text-gray-700 block py-2 pl-4"
                    onClick={toggleMobileMenu}
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  to="/news" 
                  className="text-gray-700 block py-2"
                  onClick={toggleMobileMenu}
                >
                  Новости
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-gray-700 block py-2"
                  onClick={toggleMobileMenu}
                >
                  Контакты
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
