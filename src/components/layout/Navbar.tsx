
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Menu, X, Search, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const categories = [
  { name: "Бумага и бумажная продукция", path: "/products/paper" },
  { name: "Мебель", path: "/products/furniture" },
  { name: "Офисная кухня", path: "/products/kitchen" },
  { name: "Техника и расходные материалы", path: "/products/tech" },
  { name: "Товары для офиса", path: "/products/office" },
  { name: "Товары для школы", path: "/products/school" },
  { name: "Хозтовары и химия", path: "/products/chemicals" },
];

// Additional navigation items for the dropdown menus
const companyLinks = [
  { name: "О компании", path: "/about" },
  { name: "Гарантии", path: "/guarantees" },
  { name: "Политика конфиденциальности", path: "/privacy" },
  { name: "Вакансии", path: "/careers" },
];

const customerLinks = [
  { name: "Как заказать", path: "/how-to-order" },
  { name: "Оплата", path: "/payment" },
  { name: "Доставка", path: "/delivery" },
  { name: "Обмен и возврат", path: "/returns" },
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

  // Navigation items with their dropdown contents
  const navItems = [
    {
      title: "Главная",
      path: "/",
      hasDropdown: false
    },
    {
      title: "Каталог",
      path: "/products",
      hasDropdown: true,
      dropdownContent: (
        <ul className="grid grid-cols-2 gap-3 w-[400px] p-4">
          {categories.map((category) => (
            <li key={category.path}>
              <Link
                to={category.path}
                className="block p-2 hover:bg-gray-50 rounded-md"
              >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      )
    },
    {
      title: "Новости",
      path: "/news",
      hasDropdown: true,
      dropdownContent: (
        <ul className="space-y-2 w-[250px] p-4">
          <li>
            <Link
              to="/news"
              className="block p-2 hover:bg-gray-50 rounded-md"
            >
              Все новости
            </Link>
          </li>
          <li>
            <Link
              to="/news/promotions"
              className="block p-2 hover:bg-gray-50 rounded-md"
            >
              Акции и скидки
            </Link>
          </li>
        </ul>
      )
    },
    {
      title: "Контакты",
      path: "/contact",
      hasDropdown: true,
      dropdownContent: (
        <ul className="space-y-2 w-[250px] p-4">
          <li>
            <Link
              to="/contact"
              className="block p-2 hover:bg-gray-50 rounded-md"
            >
              Наши контакты
            </Link>
          </li>
          {companyLinks.map(link => (
            <li key={link.path}>
              <Link
                to={link.path}
                className="block p-2 hover:bg-gray-50 rounded-md"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )
    }
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom">
        {/* Top bar with customer service links */}
        <div className="py-2 text-sm border-b border-gray-100 hidden md:flex items-center space-x-6 text-gray-600">
          {customerLinks.map(link => (
            <Link key={link.path} to={link.path} className="hover:text-stationery-600 transition-colors">
              {link.name}
            </Link>
          ))}
        </div>
        
        {/* Main header with logo and icons */}
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
            {/* Main navigation menu - desktop */}
            {!isMobile && (
              <NavigationMenu>
                <NavigationMenuList>
                  {navItems.map((item) => (
                    <NavigationMenuItem key={item.title}>
                      {item.hasDropdown ? (
                        <>
                          <NavigationMenuTrigger className="text-gray-700 hover:text-stationery-600 transition-colors">
                            {item.title}
                          </NavigationMenuTrigger>
                          <NavigationMenuContent>
                            {item.dropdownContent}
                          </NavigationMenuContent>
                        </>
                      ) : (
                        <Link to={item.path} className="text-gray-700 hover:text-stationery-600 transition-colors px-3 py-2 text-sm font-medium">
                          {item.title}
                        </Link>
                      )}
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            )}
            
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
                
                {/* Mobile collapsible menus */}
                <li className="border-b pb-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="w-full justify-between p-0 h-auto">
                        <span className="text-lg font-medium">Каталог</span>
                        <ChevronDown size={16} />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {categories.map((category) => (
                        <DropdownMenuItem key={category.path} asChild>
                          <Link 
                            to={category.path}
                            onClick={toggleMobileMenu}
                          >
                            {category.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </li>
                
                <li className="border-b pb-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="w-full justify-between p-0 h-auto">
                        <span className="text-lg font-medium">Новости</span>
                        <ChevronDown size={16} />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem asChild>
                        <Link to="/news" onClick={toggleMobileMenu}>Все новости</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link to="/news/promotions" onClick={toggleMobileMenu}>Акции и скидки</Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </li>
                
                <li className="border-b pb-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="w-full justify-between p-0 h-auto">
                        <span className="text-lg font-medium">Контакты</span>
                        <ChevronDown size={16} />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem asChild>
                        <Link to="/contact" onClick={toggleMobileMenu}>Наши контакты</Link>
                      </DropdownMenuItem>
                      {companyLinks.map(link => (
                        <DropdownMenuItem key={link.path} asChild>
                          <Link to={link.path} onClick={toggleMobileMenu}>{link.name}</Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </li>
                
                {/* Additional mobile links */}
                <li>
                  <div className="text-sm text-gray-500 font-medium mb-2">Информация для клиентов:</div>
                  <ul className="space-y-3 pl-2">
                    {customerLinks.map(link => (
                      <li key={link.path}>
                        <Link 
                          to={link.path} 
                          className="text-gray-700 block py-1"
                          onClick={toggleMobileMenu}
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
