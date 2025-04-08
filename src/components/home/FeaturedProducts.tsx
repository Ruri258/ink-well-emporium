
import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../products/ProductCard';

// Sample featured products data with more items
const featuredProducts = [
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
    id: 20,
    name: "Бумага для принтера А4",
    price: 320,
    oldPrice: 380,
    image: "https://images.unsplash.com/photo-1584473457433-79ed48f85913?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    category: "paper",
    isNew: false,
    isSale: true,
  },
  {
    id: 21,
    name: "Скрепки канцелярские 100 шт",
    price: 65,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1613039013481-f9b1a021025e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    category: "office",
    isNew: true,
    isSale: false,
  },
  {
    id: 22,
    name: "Краски акриловые 12 цветов",
    price: 470,
    oldPrice: 550,
    image: "https://images.unsplash.com/photo-1520420097861-e4959843b682?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    category: "creative",
    isNew: false,
    isSale: true,
  },
  {
    id: 23,
    name: "Линейка металлическая 30 см",
    price: 120,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1517686748843-bb360cfc62b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    category: "office",
    isNew: false,
    isSale: false,
  },
];

const FeaturedProducts = () => {
  return (
    <section className="section bg-white border-t border-gray-100">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Популярные товары
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Большой выбор качественных канцелярских товаров для работы, учебы и творчества
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredProducts.slice(0, 8).map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Link 
            to="/products" 
            className="inline-flex items-center text-stationery-600 hover:text-stationery-700 font-medium"
          >
            Показать все товары
            <svg className="w-5 h-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
