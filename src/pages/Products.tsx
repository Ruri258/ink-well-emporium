
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
  // Бумага и бумажная продукция
  {
    id: 1,
    name: "Бумага для принтера А4, 500 листов",
    price: 299,
    oldPrice: 350,
    image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    category: "paper",
    isNew: false,
    isSale: true,
  },
  {
    id: 2,
    name: "Ежедневник недатированный А5",
    price: 450,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80",
    category: "paper",
    isNew: true,
    isSale: false,
  },
  {
    id: 3,
    name: "Блокнот в клетку А6",
    price: 180,
    oldPrice: 220,
    image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    category: "paper",
    isNew: false,
    isSale: true,
  },
  {
    id: 4,
    name: "Бумага цветная А4, 100 листов",
    price: 350,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1630514969818-94aefc42ec47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    category: "paper",
    isNew: false,
    isSale: false,
  },
  
  // Мебель
  {
    id: 5,
    name: "Кресло офисное эргономичное",
    price: 7500,
    oldPrice: 8900,
    image: "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    category: "furniture",
    isNew: false,
    isSale: true,
  },
  {
    id: 6,
    name: "Стол компьютерный угловой",
    price: 12500,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1135&q=80",
    category: "furniture",
    isNew: true,
    isSale: false,
  },
  {
    id: 7,
    name: "Шкаф для документов",
    price: 15800,
    oldPrice: 18200,
    image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    category: "furniture",
    isNew: false,
    isSale: true,
  },
  
  // Офисная кухня
  {
    id: 8,
    name: "Кофемашина автоматическая",
    price: 25900,
    oldPrice: 29500,
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    category: "kitchen",
    isNew: false,
    isSale: true,
  },
  {
    id: 9,
    name: "Чайник электрический",
    price: 1800,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1594222082006-17d454989d2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    category: "kitchen",
    isNew: true,
    isSale: false,
  },
  {
    id: 10,
    name: "Набор посуды для офиса",
    price: 3200,
    oldPrice: 3800,
    image: "https://images.unsplash.com/photo-1556911261-6bd341186b2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    category: "kitchen",
    isNew: false,
    isSale: true,
  },
  
  // Техника и расходные материалы
  {
    id: 11,
    name: "Принтер лазерный",
    price: 12500,
    oldPrice: 14800,
    image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    category: "tech",
    isNew: false,
    isSale: true,
  },
  {
    id: 12,
    name: "Картридж для принтера",
    price: 3500,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1575844264771-892081089af5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    category: "tech",
    isNew: false,
    isSale: false,
  },
  {
    id: 13,
    name: "Ноутбук офисный 15.6\"",
    price: 45000,
    oldPrice: 49900,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
    category: "tech",
    isNew: true,
    isSale: true,
  },
  
  // Товары для офиса, канцтовары
  {
    id: 14,
    name: "Набор шариковых ручек",
    price: 120,
    oldPrice: 150,
    image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
    category: "office",
    isNew: false,
    isSale: true,
  },
  {
    id: 15,
    name: "Степлер офисный",
    price: 280,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1595431548066-7e7584715c05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    category: "office",
    isNew: false,
    isSale: false,
  },
  {
    id: 16,
    name: "Органайзер настольный",
    price: 750,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1544986581-efac024faf62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    category: "office",
    isNew: true,
    isSale: false,
  },
  {
    id: 17,
    name: "Клей-карандаш 40г",
    price: 85,
    oldPrice: 110,
    image: "https://images.unsplash.com/photo-1586075223419-229403b5c49a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    category: "office",
    isNew: false,
    isSale: true,
  },
  
  // Товары для школы
  {
    id: 18,
    name: "Рюкзак школьный",
    price: 2300,
    oldPrice: 2600,
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1022&q=80",
    category: "school",
    isNew: false,
    isSale: true,
  },
  {
    id: 19,
    name: "Пенал тканевый",
    price: 450,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1600348714596-5ae237bf8a0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    category: "school",
    isNew: true,
    isSale: false,
  },
  {
    id: 20,
    name: "Тетрадь в клетку, 48л",
    price: 60,
    oldPrice: 75,
    image: "https://images.unsplash.com/photo-1595231776515-ddffb1f4eb73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    category: "school",
    isNew: false,
    isSale: true,
  },
  {
    id: 21,
    name: "Набор карандашей цветных",
    price: 280,
    oldPrice: 320,
    image: "https://images.unsplash.com/photo-1522111608460-7a466dbef58e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    category: "school",
    isNew: false,
    isSale: true,
  },
  
  // Хозтовары и бытовая химия
  {
    id: 22,
    name: "Жидкое мыло для рук, 500мл",
    price: 220,
    oldPrice: 260,
    image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    category: "chemicals",
    isNew: false,
    isSale: true,
  },
  {
    id: 23,
    name: "Чистящее средство для оргтехники",
    price: 350,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1585421514284-efb74320dbac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    category: "chemicals",
    isNew: true,
    isSale: false,
  },
  {
    id: 24,
    name: "Салфетки бумажные, 100шт",
    price: 120,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1598346343145-2774766125ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    category: "chemicals",
    isNew: false,
    isSale: false,
  },
  {
    id: 25,
    name: "Освежитель воздуха",
    price: 180,
    oldPrice: 210,
    image: "https://images.unsplash.com/photo-1601356616077-695728ae17cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    category: "chemicals",
    isNew: false,
    isSale: true,
  },
];

const categoryTitles: Record<string, string> = {
  paper: "Бумага и бумажная продукция",
  furniture: "Мебель",
  kitchen: "Офисная кухня",
  tech: "Техника и расходные материалы",
  office: "Товары для офиса, канцтовары",
  school: "Товары для школы",
  chemicals: "Хозтовары и бытовая химия",
};

const Products = () => {
  const { category } = useParams<{ category?: string }>();
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 50000]);
  const [showSaleOnly, setShowSaleOnly] = useState(false);
  const [showNewOnly, setShowNewOnly] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  
  const filteredProducts = allProducts
    .filter(product => !category || product.category === category)
    .filter(product => product.price >= priceRange[0] && product.price <= priceRange[1])
    .filter(product => !showSaleOnly || product.isSale)
    .filter(product => !showNewOnly || product.isNew);

  const categoryTitle = category ? categoryTitles[category] || "Товары" : "Все товары";

  const maxPrice = Math.max(...allProducts.map(p => p.price));

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
                      defaultValue={[0, maxPrice]} 
                      max={maxPrice} 
                      step={100} 
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
