
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-stationery-600 to-blue-700 overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:16px_16px]"></div>
      <div className="container-custom relative z-10 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 animate-slide-in text-white">
            <div className="inline-block bg-white/10 backdrop-blur-md px-4 py-1 rounded-full text-sm font-medium text-white mb-2">
              Скидки до 30% на товары для школы
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Канцелярский <span className="text-yellow-300">центр</span>
            </h1>
            
            <p className="text-lg text-white/90 max-w-lg">
              Более 1000 наименований канцелярских товаров от лучших брендов с доставкой по всей России
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <Button asChild size="lg" className="bg-white text-stationery-700 hover:bg-white/90 hover:text-stationery-800">
                <Link to="/products">
                  Перейти в каталог
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
              
              <Button asChild size="lg" variant="outline" className="text-white border-white/40 hover:bg-white/10">
                <Link to="/promotions">
                  Акции и скидки
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative h-[350px] md:h-[450px] animate-fade-in">
              <div className="absolute w-full h-full bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden p-3">
                <div className="relative h-full w-full">
                  <img 
                    src="https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1048&q=80" 
                    alt="Канцелярские товары" 
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4 rotate-6">
                <div className="text-stationery-800 font-bold text-2xl mb-1">-20%</div>
                <div className="text-sm text-gray-700">на первый<br />заказ</div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg shadow-lg p-4 rotate-12">
                <div className="text-white font-bold text-xl mb-1">Бесплатная</div>
                <div className="text-sm text-white/90">доставка от 2000₽</div>
              </div>
              
              <div className="absolute bottom-8 left-8 bg-white/70 backdrop-blur-sm p-3 rounded-lg shadow-sm">
                <div className="text-stationery-800 font-semibold mb-1">Новая коллекция</div>
                <div className="text-sm text-gray-700">Скидки до 20%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
