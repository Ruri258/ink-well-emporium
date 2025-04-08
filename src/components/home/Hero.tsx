
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="relative bg-stationery-50 overflow-hidden">
      <div className="container-custom py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-slide-in">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Качественные канцтовары для работы и учебы
            </h1>
            
            <p className="text-lg text-gray-600 max-w-lg">
              Мы предлагаем широкий ассортимент канцелярских товаров от лучших брендов с доставкой по всей России
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-stationery-600 hover:bg-stationery-700 text-white">
                <Link to="/products">
                  Каталог товаров
                </Link>
              </Button>
              
              <Button asChild variant="outline">
                <Link to="/promotions">
                  Акции и скидки
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="relative h-[350px] md:h-[450px] animate-fade-in">
            <img 
              src="https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1048&q=80" 
              alt="Канцелярские товары" 
              className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg"
            />
            <div className="absolute top-6 left-6 bg-white/70 backdrop-blur-sm p-3 rounded-lg shadow-sm">
              <div className="text-stationery-800 font-semibold mb-1">Новая коллекция</div>
              <div className="text-sm text-gray-700">Скидки до 20%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
