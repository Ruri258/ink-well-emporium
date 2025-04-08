
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import Promotions from '@/components/home/Promotions';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import CategoryShowcase from '@/components/home/CategoryShowcase';
import BrandsShowcase from '@/components/home/BrandsShowcase';
import Bestsellers from '@/components/home/Bestsellers';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <CategoryShowcase />
        <FeaturedProducts />
        
        <div className="bg-gradient-to-r from-stationery-50 to-blue-50 py-16">
          <div className="container-custom">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Популярные категории</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Быстрый доступ к самым востребованным товарам нашего каталога
              </p>
            </div>
            
            <Tabs defaultValue="school" className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 h-auto p-1 bg-white/20 backdrop-blur-sm mb-6">
                <TabsTrigger value="school" className="py-3">Товары для школы</TabsTrigger>
                <TabsTrigger value="office" className="py-3">Для офиса</TabsTrigger>
                <TabsTrigger value="tech" className="py-3">Техника</TabsTrigger>
                <TabsTrigger value="paper" className="py-3">Бумага</TabsTrigger>
              </TabsList>
              
              <TabsContent value="school" className="mt-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                  {['Тетради', 'Дневники', 'Рюкзаки', 'Пеналы'].map((item, index) => (
                    <Link 
                      key={index}
                      to={`/products/school`}
                      className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow text-center"
                    >
                      <div className="text-lg font-medium text-gray-900 mb-2">{item}</div>
                      <div className="text-sm text-stationery-600">Смотреть все →</div>
                    </Link>
                  ))}
                </div>
                <div className="text-center mt-8">
                  <Button asChild className="bg-stationery-600 hover:bg-stationery-700">
                    <Link to="/products/school">
                      Все товары для школы
                    </Link>
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="office" className="mt-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                  {['Ручки', 'Степлеры', 'Органайзеры', 'Папки'].map((item, index) => (
                    <Link 
                      key={index}
                      to={`/products/office`}
                      className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow text-center"
                    >
                      <div className="text-lg font-medium text-gray-900 mb-2">{item}</div>
                      <div className="text-sm text-stationery-600">Смотреть все →</div>
                    </Link>
                  ))}
                </div>
                <div className="text-center mt-8">
                  <Button asChild className="bg-stationery-600 hover:bg-stationery-700">
                    <Link to="/products/office">
                      Все товары для офиса
                    </Link>
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="tech" className="mt-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                  {['Принтеры', 'Картриджи', 'Ноутбуки', 'Аксессуары'].map((item, index) => (
                    <Link 
                      key={index}
                      to={`/products/tech`}
                      className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow text-center"
                    >
                      <div className="text-lg font-medium text-gray-900 mb-2">{item}</div>
                      <div className="text-sm text-stationery-600">Смотреть все →</div>
                    </Link>
                  ))}
                </div>
                <div className="text-center mt-8">
                  <Button asChild className="bg-stationery-600 hover:bg-stationery-700">
                    <Link to="/products/tech">
                      Вся техника
                    </Link>
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="paper" className="mt-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                  {['Бумага А4', 'Цветная бумага', 'Блокноты', 'Ежедневники'].map((item, index) => (
                    <Link 
                      key={index}
                      to={`/products/paper`}
                      className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow text-center"
                    >
                      <div className="text-lg font-medium text-gray-900 mb-2">{item}</div>
                      <div className="text-sm text-stationery-600">Смотреть все →</div>
                    </Link>
                  ))}
                </div>
                <div className="text-center mt-8">
                  <Button asChild className="bg-stationery-600 hover:bg-stationery-700">
                    <Link to="/products/paper">
                      Вся бумажная продукция
                    </Link>
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
        
        <Bestsellers />
        <Promotions />

        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
          <div className="container-custom">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Специальные предложения для офиса</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Всё необходимое для комфортной и продуктивной работы
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Мебель для офиса</h3>
                  <p className="text-gray-600 mb-4">Кресла, столы и шкафы высокого качества для вашего офиса</p>
                  <Button asChild variant="outline">
                    <Link to="/products/furniture">Перейти в раздел</Link>
                  </Button>
                </div>
              </div>
              
              <div className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Офисная кухня</h3>
                  <p className="text-gray-600 mb-4">Кофемашины, чайники и всё для комфортного перерыва</p>
                  <Button asChild variant="outline">
                    <Link to="/products/kitchen">Перейти в раздел</Link>
                  </Button>
                </div>
              </div>
              
              <div className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Техника и оборудование</h3>
                  <p className="text-gray-600 mb-4">Принтеры, ноутбуки и другая техника для эффективной работы</p>
                  <Button asChild variant="outline">
                    <Link to="/products/tech">Перейти в раздел</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <BrandsShowcase />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
