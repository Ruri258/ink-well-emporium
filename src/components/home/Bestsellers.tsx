
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';
import ProductCard from '../products/ProductCard';

// Sample bestselling products data
const bestsellingProducts = [
  {
    id: 13,
    name: "Ежедневник датированный А5",
    price: 550,
    oldPrice: 690,
    image: "https://images.unsplash.com/photo-1584473457433-79ed48f85913?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    category: "notebooks",
    isNew: false,
    isSale: true,
  },
  {
    id: 14,
    name: "Набор ручек гелевых 10 цветов",
    price: 420,
    oldPrice: 500,
    image: "https://images.unsplash.com/photo-1495727034151-8fdc73e332a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    category: "pens",
    isNew: false,
    isSale: true,
  },
  {
    id: 15,
    name: "Степлер офисный металлический",
    price: 380,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1612968753014-51420a76e419?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    category: "office",
    isNew: true,
    isSale: false,
  },
  {
    id: 16,
    name: "Корректор ленточный 5мм",
    price: 150,
    oldPrice: 190,
    image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
    category: "office",
    isNew: false,
    isSale: true,
  },
];

// Star rating component
const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={14}
          className={`${
            i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
          }`}
        />
      ))}
      <span className="ml-1 text-sm text-gray-600">{rating}.0</span>
    </div>
  );
};

const Bestsellers = () => {
  return (
    <section className="section">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Бестселлеры
          </h2>
          
          <Link 
            to="/products" 
            className="text-stationery-600 hover:text-stationery-700 font-medium flex items-center"
          >
            Все хиты продаж
            <svg className="w-5 h-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
        
        <div className="product-grid">
          {bestsellingProducts.map(product => (
            <div key={product.id} className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <Link to={`/products/${product.category}/${product.id}`} className="block">
                <div className="relative">
                  <div className="aspect-[4/3] bg-gray-100 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  {(product.isNew || product.isSale) && (
                    <div className="absolute top-2 left-2 flex flex-col gap-1">
                      {product.isNew && (
                        <span className="badge badge-new">Новинка</span>
                      )}
                      {product.isSale && (
                        <span className="badge badge-sale">
                          -{Math.round(((product.oldPrice! - product.price) / product.oldPrice!) * 100)}%
                        </span>
                      )}
                    </div>
                  )}
                  
                  <div className="absolute top-2 right-2">
                    <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      Хит
                    </span>
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="mb-2">
                    <StarRating rating={4} />
                  </div>
                  
                  <h3 className="font-medium text-gray-900 mb-1 line-clamp-2 min-h-[48px]">
                    {product.name}
                  </h3>
                  
                  <div className="flex justify-between items-center mt-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-gray-900">
                          {product.price} ₽
                        </span>
                        
                        {product.oldPrice && (
                          <span className="text-gray-500 text-sm line-through">
                            {product.oldPrice} ₽
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Button asChild>
            <Link to="/products">
              Посмотреть все товары
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
