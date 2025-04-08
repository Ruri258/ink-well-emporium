
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
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Товары для школы</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Широкий ассортимент товаров для школы: от тетрадей и дневников до рюкзаков и пеналов
              </p>
            </div>
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
          </div>
        </div>
        <Bestsellers />
        <Promotions />
        <BrandsShowcase />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
