
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const brands = [
  {
    id: 1,
    name: 'Pilot',
    logo: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
    description: 'Японский производитель ручек премиум-класса'
  },
  {
    id: 2,
    name: 'Faber-Castell',
    logo: 'https://images.unsplash.com/photo-1546484488-2a1430996887?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    description: 'Немецкий производитель канцелярских товаров'
  },
  {
    id: 3,
    name: 'Parker',
    logo: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80',
    description: 'Производитель элитных письменных принадлежностей'
  },
  {
    id: 4,
    name: 'Moleskine',
    logo: 'https://images.unsplash.com/photo-1544988865-9e84d19a3c0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    description: 'Итальянский производитель премиальных блокнотов'
  },
  {
    id: 5,
    name: 'Stabilo',
    logo: 'https://images.unsplash.com/photo-1522111608460-7a466dbef58e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
    description: 'Известный производитель маркеров и ручек'
  },
  {
    id: 6,
    name: 'Pelikan',
    logo: 'https://images.unsplash.com/photo-1585336261022-680e295ce3fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1010&q=80',
    description: 'Немецкий производитель письменных принадлежностей'
  }
];

const BrandsShowcase = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Популярные бренды</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Мы сотрудничаем только с проверенными производителями канцелярских товаров
          </p>
        </div>
        
        <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {brands.map((brand) => (
              <CarouselItem key={brand.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                <Card className="h-full border border-gray-200 hover:border-stationery-300 transition-colors">
                  <CardContent className="p-4 flex flex-col items-center text-center">
                    <div className="w-28 h-28 rounded-full bg-gray-100 flex items-center justify-center mb-4 overflow-hidden">
                      <img 
                        src={brand.logo} 
                        alt={brand.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-medium mb-2">{brand.name}</h3>
                    <p className="text-sm text-gray-500 mb-4">{brand.description}</p>
                    <Link to="/products" className="text-stationery-600 hover:text-stationery-800 text-sm font-medium">
                      Смотреть товары
                    </Link>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default BrandsShowcase;
