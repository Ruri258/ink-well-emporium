
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProductCard from '@/components/products/ProductCard';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { SlidersHorizontal, X } from 'lucide-react';

// Sample products data
const allProducts = [
  {
    id: 1,
    name: "Ручка шариковая Premium",
    price: 120,
    oldPrice: 150,
    image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
    category: "pens",
    isNew: false,
    isSale: true,
  },
  {
    id: 2,
    name: "Блокнот в твердой обложке",
    price: 350,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    category: "notebooks",
    isNew: true,
    isSale: false,
  },
  {
    id: 3,
    name: "Набор карандашей цветных",
    price: 280,
    oldPrice: 320,
    image: "https://images.unsplash.com/photo-1522111608460-7a466dbef58e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    category: "creative",
    isNew: false,
    isSale: true,
  },
  {
    id: 4,
    name: "Органайзер настольный",
    price: 750,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1544986581-efac024faf62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    category: "office",
    isNew: true,
    isSale: false,
  },
  {
    id: 5,
    name: "Тетрадь в клетку, 48 л.",
    price: 60,
    oldPrice: 75,
    image: "https://images.unsplash.com/photo-1595231776515-ddffb1f4eb73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    category: "notebooks",
    isNew: false,
    isSale: true,
  },
  {
    id: 6,
    name: "Калькулятор инженерный",
    price: 890,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1574607383476-f517f260d30b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
    category: "office",
    isNew: false,
    isSale: false,
  },
  {
    id: 7,
    name: "Набор маркеров для доски",
    price: 420,
    oldPrice: 500,
    image: "https://images.unsplash.com/photo-1568205612837-017257d2310a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1012&q=80",
    category: "office",
    isNew: false,
    isSale: true,
  },
  {
    id: 8,
    name: "Планер недатированный",
    price: 650,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80",
    category: "notebooks",
    isNew: true,
    isSale: false,
  },
  {
    id: 9,
    name: "Ручка гелевая, синяя",
    price: 85,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1585336261022-680e295ce3fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1010&q=80",
    category: "pens",
    isNew: false,
    isSale: false,
  },
  {
    id: 10,
    name: "Карандаш чернографитный HB",
    price: 30,
    oldPrice: 40,
    image: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1010&q=80",
    category: "pens",
    isNew: false,
    isSale: true,
  },
  {
    id: 11,
    name: "Краски акварельные, 24 цвета",
    price: 350,
    oldPrice: 420,
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1071&q=80",
    category: "creative",
    isNew: false,
    isSale: true,
  },
  {
    id: 12,
    name: "Бумага для заметок цветная",
    price: 180,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    category: "office",
    isNew: true,
    isSale: false,
  },
];

const categoryTitles: Record<string, string> = {
  pens: "Ручки и карандаши",
  notebooks: "Тетради и блокноты",
  office: "Офисные принадлежности",
  creative: "Творчество",
  school: "Школьные товары",
};

const Products = () => {
  const { category } = useParams<{ category?: string }>();
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [showSaleOnly, setShowSaleOnly] = useState(false);
  const [showNewOnly, setShowNewOnly] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  
  const filteredProducts = allProducts
    .filter(product => !category || product.category === category)
    .filter(product => product.price >= priceRange[0] && product.price <= priceRange[1])
    .filter(product => !showSaleOnly || product.isSale)
    .filter(product => !showNewOnly || product.isNew);

  const categoryTitle = category ? categoryTitles[category] || "Товары" : "Все товары";

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container-custom py-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-8">
          {categoryTitle}
        </h1>
        
        <div className="lg:grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1 mb-6 lg:mb-0">
            <div className="lg:sticky lg:top-24 space-y-6">
              <Button 
                onClick={toggleFilters}
                className="flex items-center justify-between w-full lg:hidden mb-4"
                variant="outline"
              >
                <div className="flex items-center">
                  <SlidersHorizontal size={16} className="mr-2" />
                  Фильтры
                </div>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                  {filteredProducts.length}
                </span>
              </Button>
              
              <div className={`bg-white p-6 rounded-lg space-y-6 border ${showFilters ? 'block' : 'hidden lg:block'}`}>
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-lg">Фильтры</h3>
                  {showFilters && (
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={toggleFilters}
                      className="lg:hidden"
                    >
                      <X size={18} />
                    </Button>
                  )}
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-medium">Цена</h4>
                  <div className="px-2">
                    <Slider 
                      defaultValue={[0, 1000]} 
                      max={1000} 
                      step={10} 
                      onValueChange={(value) => setPriceRange(value as [number, number])}
                    />
                    <div className="flex justify-between mt-2 text-sm text-gray-500">
                      <span>{priceRange[0]} ₽</span>
                      <span>{priceRange[1]} ₽</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-medium">Специальные предложения</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="sale" 
                        checked={showSaleOnly}
                        onCheckedChange={() => setShowSaleOnly(!showSaleOnly)}
                      />
                      <Label htmlFor="sale">Скидки</Label>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="new" 
                        checked={showNewOnly}
                        onCheckedChange={() => setShowNewOnly(!showNewOnly)}
                      />
                      <Label htmlFor="new">Новинки</Label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            {filteredProducts.length > 0 ? (
              <div className="product-grid">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Товары не найдены
                </h3>
                <p className="text-gray-500">
                  Попробуйте изменить параметры фильтрации или выбрать другую категорию.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Products;
