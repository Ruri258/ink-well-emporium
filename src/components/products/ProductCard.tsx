
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProductProps {
  product: {
    id: number;
    name: string;
    price: number;
    oldPrice: number | null;
    image: string;
    category: string;
    isNew?: boolean;
    isSale?: boolean;
  };
}

const ProductCard: React.FC<ProductProps> = ({ product }) => {
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Adding to cart:', product.id);
    // Add your cart logic here
  };

  const discountPercentage = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0;

  return (
    <Link
      to={`/products/${product.category}/${product.id}`}
      className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {(product.isNew || product.isSale) && (
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {product.isNew && (
              <span className="badge badge-new">Новинка</span>
            )}
            {product.isSale && (
              <span className="badge badge-sale">-{discountPercentage}%</span>
            )}
          </div>
        )}
      </div>
      
      <div className="p-4">
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
          
          <Button
            size="sm"
            variant="ghost"
            className="rounded-full h-9 w-9 p-0 flex items-center justify-center hover:bg-stationery-50 hover:text-stationery-600"
            onClick={handleAddToCart}
          >
            <ShoppingCart size={18} />
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
